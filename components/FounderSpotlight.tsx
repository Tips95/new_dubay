"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Reveal from "@/components/Reveal";
import { FOUNDER_SPOTLIGHT } from "@/lib/constants";

export default function FounderSpotlight() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="order-2 lg:order-1">
          <p className="section-label">{FOUNDER_SPOTLIGHT.label}</p>
          <h2 className="display-title mt-4 text-3xl leading-tight sm:text-5xl">
            {FOUNDER_SPOTLIGHT.title}
          </h2>
          <p className="text-muted mt-5 max-w-xl">{FOUNDER_SPOTLIGHT.subtitle}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {FOUNDER_SPOTLIGHT.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel rounded-xl border border-white/10 p-4"
              >
                <p className="display-title text-2xl text-[#E8C98A]">{stat.value}</p>
                <p className="text-muted mt-1 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

          <a
            href="#pricing"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-[#C9A96E] px-7 text-sm font-medium text-[#E8C98A] transition-colors hover:bg-[#C9A96E] hover:text-black"
          >
            {FOUNDER_SPOTLIGHT.cta}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group gold-shimmer relative overflow-hidden rounded-3xl bg-[#141414] p-2"
          >
            <div className="relative overflow-hidden rounded-[22px]">
              <Image
                src={FOUNDER_SPOTLIGHT.image}
                alt={FOUNDER_SPOTLIGHT.imageAlt}
                width={768}
                height={1024}
                className="h-[520px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/20" />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
