import { Recycle } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[150] flex flex-col items-center justify-center hero-gradient">
      <div className="relative flex items-center justify-center">
        <span className="absolute w-20 h-20 rounded-full border-2 border-green-400/30 animate-ping" />
        <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
          <Recycle className="w-8 h-8 text-white animate-spin [animation-duration:2.5s]" />
        </div>
      </div>
      <p className="mt-6 text-white font-semibold tracking-wide text-sm">
        Right Ewaste Recycle
      </p>
      <p className="mt-1 text-green-300 text-xs">Loading a cleaner experience…</p>
    </div>
  );
}
