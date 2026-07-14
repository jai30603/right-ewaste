import { Recycle, Check } from "lucide-react";

/**
 * Brand mark: a dark-green badge holding the recycle triangle in bright
 * lime, with a small lime "certified" check badge layered on the corner.
 * Modeled after the company's recycling-certification badge (arrows +
 * checkmark), redrawn here as our own icon composition rather than
 * reusing the source artwork directly.
 */
export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <div className="w-full h-full rounded-xl flex items-center justify-center shadow-md bg-[#04543c]">
        <Recycle className="w-[58%] h-[58%] text-[#a7e635]" strokeWidth={2.25} />
      </div>
      <div className="absolute -bottom-1 -right-1 w-[42%] h-[42%] min-w-[14px] min-h-[14px] rounded-full bg-[#a7e635] ring-2 ring-white flex items-center justify-center">
        <Check className="w-[65%] h-[65%] text-[#04543c]" strokeWidth={3.5} />
      </div>
    </div>
  );
}
