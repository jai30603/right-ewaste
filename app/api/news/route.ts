import { NextResponse } from "next/server";

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  description: string;
  imageUrl?: string;
}

const RSS_FEEDS = [
  {
    url: "https://rss.app/feeds/tQGTqeGx4uOVLNB4.xml",
    source: "E-Waste News",
  },
  {
    url: "https://news.google.com/rss/search?q=e+waste+recycling+India&hl=en-IN&gl=IN&ceid=IN:en",
    source: "Google News",
  },
  {
    url: "https://news.google.com/rss/search?q=electronic+waste+sustainability+India&hl=en-IN&gl=IN&ceid=IN:en",
    source: "Google News",
  },
  {
    url: "https://news.google.com/rss/search?q=green+technology+India+environment&hl=en-IN&gl=IN&ceid=IN:en",
    source: "Google News",
  },
];

async function fetchRSSFeed(feedUrl: string, sourceName: string): Promise<RSSItem[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(feedUrl, {
      signal: controller.signal,
      headers: { "User-Agent": "RightEwasteRecycle/1.0" },
      next: { revalidate: 600 }, // cache 10 minutes
    });
    clearTimeout(timeoutId);

    if (!response.ok) return [];
    const text = await response.text();

    // Parse XML manually
    const items: RSSItem[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(text)) !== null) {
      const item = match[1];
      const title = extractTag(item, "title");
      const link = extractTag(item, "link") || extractTagAttr(item, "link", "href");
      const pubDate = extractTag(item, "pubDate") || extractTag(item, "published");
      const description = stripHtml(
        extractTag(item, "description") || extractTag(item, "summary") || ""
      ).slice(0, 200);

      // Try to extract image
      const imageUrl =
        extractTagAttr(item, "media:content", "url") ||
        extractTagAttr(item, "enclosure", "url") ||
        extractImgSrc(extractTag(item, "description") || "");

      // Parse source name from <source> tag if present
      const feedSource = extractTag(item, "source") || sourceName;

      if (title && link) {
        items.push({
          title: cleanTitle(title),
          link,
          pubDate: pubDate || new Date().toISOString(),
          source: feedSource,
          description,
          imageUrl: imageUrl || undefined,
        });
      }

      if (items.length >= 10) break;
    }

    return items;
  } catch {
    clearTimeout(timeoutId);
    return [];
  }
}

function extractTag(xml: string, tag: string): string {
  const cdataMatch = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, "i").exec(xml);
  if (cdataMatch) return cdataMatch[1].trim();
  const match = new RegExp(`<${tag}[^>]*>([^<]*)<\\/${tag}>`, "i").exec(xml);
  return match ? match[1].trim() : "";
}

function extractTagAttr(xml: string, tag: string, attr: string): string {
  const match = new RegExp(`<${tag}[^>]*${attr}=["']([^"']+)["']`, "i").exec(xml);
  return match ? match[1] : "";
}

function extractImgSrc(html: string): string {
  const match = /<img[^>]+src=["']([^"']+)["']/i.exec(html);
  return match ? match[1] : "";
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[a-z]+;/gi, " ").replace(/\s+/g, " ").trim();
}

function cleanTitle(title: string): string {
  // Remove "- Source Name" suffix common in Google News
  return title.replace(/\s+-\s+[A-Za-z0-9 .]+$/, "").trim();
}

export async function GET() {
  try {
    const results = await Promise.allSettled(
      RSS_FEEDS.map((feed) => fetchRSSFeed(feed.url, feed.source))
    );

    const allItems: RSSItem[] = [];
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        allItems.push(...result.value);
      }
    });

    // Deduplicate by title similarity
    const seen = new Set<string>();
    const unique = allItems.filter((item) => {
      const key = item.title.toLowerCase().slice(0, 60);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    // Sort by date descending
    unique.sort((a, b) => {
      try {
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
      } catch {
        return 0;
      }
    });

    return NextResponse.json({
      items: unique.slice(0, 24),
      total: unique.length,
      fetchedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch news", items: [] },
      { status: 500 }
    );
  }
}
