import Logo from "@/components/Logo";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[150] flex flex-col items-center justify-center hero-gradient">
      <div className="relative flex items-center justify-center">
        <span className="absolute w-20 h-20 rounded-full border-2 border-green-400/30 animate-ping" />
        <Logo className="w-16 h-16 shadow-lg animate-pulse [&_svg]:animate-spin [&_svg]:[animation-duration:2.5s]" />
      </div>
      <p className="mt-6 text-white font-extrabold uppercase tracking-wide text-sm">
        Right Ewaste Recycle
      </p>
      <p className="mt-1 text-green-300 text-xs">Loading a cleaner experience…</p>
    </div>
  );
}
