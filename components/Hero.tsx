"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

import AnimatedCounter from "@/components/AnimatedCounter";
import { HERO } from "@/lib/constants";

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 120]);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-cover bg-center"
        aria-hidden
      >
        <div
          className="h-[110%] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO.backgroundImage})` }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/70 to-[#0A0A0A]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-8 pt-28 sm:px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-label"
        >
          {HERO.topLabel}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="display-title mt-4 max-w-5xl text-4xl leading-tight uppercase sm:text-6xl lg:text-[80px]"
        >
          {HERO.title.split("\n").map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.6 }}
          className="text-muted mt-6 max-w-3xl text-base sm:text-lg"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.8 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#pricing"
            className="flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#C9A96E] to-[#E8C98A] px-8 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
            {HERO.primaryCta}
          </a>
          <a
            href="#program"
            className="flex min-h-12 items-center justify-center rounded-full border border-white/30 px-8 text-sm transition-colors hover:border-[#C9A96E] hover:text-[#E8C98A]"
          >
            {HERO.secondaryCta}
          </a>
        </motion.div>

        <div className="mt-8 flex justify-center md:justify-start">
          <ChevronDown className="scroll-chevron h-7 w-7 text-[#C9A96E]" />
        </div>

        <div className="glass-panel mt-10 grid gap-4 rounded-2xl p-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10 lg:p-6">
          {HERO.stats.map((item) => (
            <div key={item.label} className="px-4">
              <p className="display-title text-2xl text-[#E8C98A] sm:text-3xl">
                {item.valueText ? (
                  item.valueText
                ) : (
                  <AnimatedCounter value={item.value ?? 0} suffix={item.suffix} />
                )}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#9F9F9F]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
