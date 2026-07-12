"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Recycle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "What We Recycle", href: "/what-we-recycle" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Gallery", href: "/gallery" },
  { label: "Certificates", href: "/certificates" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isTransparent = !scrolled && isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14" : "h-16 lg:h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div
              className={`bg-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:bg-green-700 transition-all duration-300 ${
                scrolled ? "w-8 h-8" : "w-10 h-10"
              }`}
            >
              <Recycle className={`text-white transition-all duration-300 ${scrolled ? "w-4 h-4" : "w-6 h-6"}`} />
            </div>
            <div className="hidden sm:block">
              <div
                className={`font-bold leading-tight transition-all duration-300 ${
                  scrolled ? "text-sm" : "text-base"
                } ${isTransparent ? "text-white" : "text-gray-900"}`}
              >
                Right Ewaste
              </div>
              <div
                className={`leading-tight transition-all duration-300 ${
                  scrolled ? "text-[10px]" : "text-xs"
                } ${isTransparent ? "text-green-300" : "text-green-600"}`}
              >
                Recycle Pvt. Ltd.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.slice(0, 8).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  scrolled ? "text-xs" : "text-sm"
                } ${
                  pathname === link.href
                    ? "text-green-600 bg-green-50"
                    : isTransparent
                    ? "text-gray-100 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {navLinks.slice(8).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  scrolled ? "text-xs" : "text-sm"
                } ${
                  pathname === link.href
                    ? "text-green-600 bg-green-50"
                    : isTransparent
                    ? "text-gray-100 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className={`bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all ${
                scrolled ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`xl:hidden p-2 rounded-lg transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-green-600 bg-green-50 font-semibold"
                      : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
