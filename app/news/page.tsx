"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink, RefreshCw, Calendar, Globe, AlertCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  description: string;
  imageUrl?: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/news");
      if (!res.ok) throw new Error("Failed to fetch news");
      const data = await res.json();
      setNews(data.items || []);
      setLastRefreshed(new Date());
    } catch {
      setError("Unable to load the latest news. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
    // Auto-refresh every 10 minutes
    const interval = setInterval(fetchNews, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchNews]);

  const featured = news[0];
  const rest = news.slice(1);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Live E-Waste News
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
          >
            Latest{" "}
            <span className="text-green-400">E-Waste News</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto"
          >
            Stay informed with the latest news on e-waste, sustainability, green
            technology, and electronic recycling from across India and the world.
          </motion.p>
        </div>
      </section>

      {/* News section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <SectionHeader
                badge="Industry News"
                title="E-Waste &"
                titleHighlight="Sustainability News"
                centered={false}
              />
            </div>
            <div className="flex flex-col items-end gap-1">
              <button
                onClick={fetchNews}
                disabled={loading}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </button>
              {lastRefreshed && (
                <p className="text-gray-400 text-xs">
                  Updated {lastRefreshed.toLocaleTimeString()}
                </p>
              )}
            </div>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="space-y-6">
              {/* Featured skeleton */}
              <div className="bg-gray-100 rounded-3xl h-64 animate-pulse" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-2xl h-48 animate-pulse" />
                ))}
              </div>
            </div>
          )}

          {/* Error state */}
          {error && !loading && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Unable to Load News</h3>
              <p className="text-gray-500 mb-6">{error}</p>
              <button
                onClick={fetchNews}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
            </div>
          )}

          {/* News content */}
          {!loading && !error && news.length > 0 && (
            <>
              {/* Featured article */}
              {featured && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-10"
                >
                  <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3">
                    ★ Featured Story
                  </p>
                  <div className="border border-green-100 hover:border-green-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all group">
                    <div className="grid lg:grid-cols-2">
                      {featured.imageUrl ? (
                        <img
                          src={featured.imageUrl}
                          alt={featured.title}
                          className="w-full h-72 object-cover"
                        />
                      ) : (
                        <div className="h-72 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <Globe className="w-20 h-20 text-white/30" />
                        </div>
                      )}
                      <div className="p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                              {featured.source}
                            </span>
                            <span className="text-gray-400 text-xs flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(featured.pubDate).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-snug">
                            {featured.title}
                          </h2>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                            {featured.description}
                          </p>
                        </div>
                        <a
                          href={featured.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all mt-5 self-start"
                        >
                          Read Full Story <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* News grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((item, i) => (
                  <motion.article
                    key={`${item.link}-${i}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="border border-gray-100 hover:border-green-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all card-hover group"
                  >
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-40 object-cover"
                      />
                    ) : (
                      <div className="h-40 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                        <Globe className="w-10 h-10 text-green-400" />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                          {item.source}
                        </span>
                        <span className="text-gray-400 text-xs flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(item.pubDate).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-green-600 transition-colors line-clamp-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4">
                        {item.description}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-sm font-semibold transition-colors"
                      >
                        Read More <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}

          {!loading && !error && news.length === 0 && (
            <div className="text-center py-16">
              <Globe className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">No News Available</h3>
              <p className="text-gray-500">Check back soon for the latest e-waste news.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
