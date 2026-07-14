"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    const startHide = () => {
      setFading(true);
      hideTimer = setTimeout(() => setVisible(false), 400);
    };

    if (document.readyState === "complete") {
      startHide();
    } else {
      window.addEventListener("load", startHide);
    }

    // Safety net: never block the site for more than ~2.5s even if the
    // load event is delayed by slow third-party assets.
    const failSafe = setTimeout(startHide, 2500);

    return () => {
      window.removeEventListener("load", startHide);
      clearTimeout(hideTimer);
      clearTimeout(failSafe);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center hero-gradient transition-opacity duration-400 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
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
