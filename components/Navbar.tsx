"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Star, X } from "lucide-react";
import { useEffect, useState } from "react";

import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-panel border-b border-white/10 py-4"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <a
            href="#"
            className="display-title flex items-center gap-2 text-sm tracking-[0.18em] sm:text-base"
          >
            <Star className="h-4 w-4 text-[#C9A96E]" />
            STEPDREAM ACADEMY
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-text text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="hover:bg-accent hover:text-background rounded-full border border-[#C9A96E] px-5 py-2 text-sm transition-colors"
            >
              Записаться
            </a>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
            aria-label="Открыть меню"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col px-6 py-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="display-title text-sm tracking-[0.16em]">
                  STEPDREAM ACADEMY
                </span>
                <button
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20"
                  aria-label="Закрыть меню"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-7">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="display-title text-3xl"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="mt-auto flex min-h-12 items-center justify-center rounded-full bg-[#C9A96E] px-6 text-sm font-medium text-black"
              >
                Записаться
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
