"use client";

import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="noise-overlay" />
      <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-10">
        <Reveal>
          <h2 className="display-title text-3xl sm:text-5xl">
            Готовы стать топовым брокером?
          </h2>
          <p className="text-muted mt-4 text-base sm:text-lg">
            Начните прямо сейчас — первые уроки доступны сразу после оплаты
          </p>
        </Reveal>

        <Reveal delay={0.14} className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#pricing"
            className="flex min-h-14 w-full max-w-xl items-center justify-center rounded-full bg-gradient-to-r from-[#C9A96E] to-[#E8C98A] px-8 text-base font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
            Получить доступ — 179 990 ₽
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 items-center justify-center rounded-full border border-[#C9A96E] px-7 text-sm text-[#E8C98A] transition-colors hover:bg-[#C9A96E] hover:text-black"
          >
            Задать вопрос в Telegram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
