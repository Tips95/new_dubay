"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Reveal from "@/components/Reveal";
import { BONUS_ITEMS } from "@/lib/constants";

export default function BonusSection() {
  return (
    <section id="bonuses" className="relative bg-[#101010] py-24">
      <div className="noise-overlay" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <Reveal>
            <h2 className="display-title text-3xl sm:text-5xl">
              Дополнительные преимущества тарифа
            </h2>
            <p className="text-muted mt-4 text-base">
              Включено в стоимость — не нужно покупать отдельно
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            {BONUS_ITEMS.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 text-[#C9A96E]">✦</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8">
            <div className="rounded-2xl border border-[#C9A96E] bg-[#15120c] p-5 shadow-[0_0_40px_rgba(201,169,110,0.16)]">
              <p className="display-title text-xl text-[#E8C98A]">
                Стоимость клуба — 30 000 ₽/мес × 6 мес = 180 000 ₽
              </p>
              <p className="mt-2 text-sm text-[#D5B67A]">
                Включено в ваш тариф как подарок
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="https://picsum.photos/seed/dubai-night-luxury/700/900"
              alt="Дубай"
              width={700}
              height={900}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="https://picsum.photos/seed/bali-ocean-villa/700/900"
              alt="Бали"
              width={700}
              height={900}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="https://picsum.photos/seed/cyprus-coastline/700/900"
              alt="Кипр"
              width={700}
              height={900}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
          <div className="glass-panel flex min-h-40 items-center justify-center rounded-2xl border border-white/10 p-5 text-center">
            <p className="display-title text-2xl text-[#E8C98A]">
              ОАЭ · Кипр · Таиланд
              <br />
              Бали · Грузия · Турция
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
