"use client";

import { Check } from "lucide-react";

import Reveal from "@/components/Reveal";
import { PRICING_FEATURES } from "@/lib/constants";

export default function PricingCard() {
  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-10"
    >
      <Reveal>
        <p className="section-label text-center">ТАРИФ</p>
        <h2 className="display-title mt-4 text-center text-3xl sm:text-5xl">
          Тариф «ВИП с поддержкой куратора»
        </h2>
      </Reveal>

      <Reveal delay={0.12} className="mt-12">
        <div className="gold-shimmer bg-card relative rounded-3xl p-5 sm:p-8">
          <div className="rounded-full border border-[#C9A96E] px-4 py-1 text-center text-[11px] uppercase tracking-[0.2em] text-[#E8C98A] sm:ml-auto sm:w-fit">
            Флагманский тариф
          </div>

          <p className="display-title mt-8 text-center text-5xl text-[#E8C98A] sm:text-7xl">
            179 990 ₽
          </p>
          <p className="text-muted mt-3 text-center">
            или в рассрочку — уточняйте условия
          </p>

          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {PRICING_FEATURES.map((feature) => (
              <p key={feature} className="flex items-start gap-2 text-sm sm:text-base">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#C9A96E]" />
                <span>{feature}</span>
              </p>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-[#C9A96E] p-4 text-sm font-medium text-black sm:text-base">
            🎁 Бонус: Закрытый клуб на 6 месяцев — ценность 180 000 ₽ — включён
            бесплатно
          </div>

          <a
            href="#contact"
            className="mt-8 flex min-h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#C9A96E] to-[#E8C98A] px-6 text-base font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
            Записаться на обучение
          </a>

          <p className="text-muted mt-4 text-center text-xs sm:text-sm">
            🔒 Безопасная оплата · Доступ сразу после оплаты · Поддержка 24/7
          </p>
        </div>
      </Reveal>
    </section>
  );
}
