"use client";

import Reveal from "@/components/Reveal";
import { PROGRAM_CARDS } from "@/lib/constants";

export default function ProgramGrid() {
  return (
    <section
      id="program"
      className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-10"
    >
      <Reveal>
        <p className="section-label">ПРОГРАММА</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display-title mt-4 text-3xl sm:text-5xl">
          Полный арсенал топового брокера
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {PROGRAM_CARDS.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.05}>
            <article className="group bg-card hover:shadow-[0_0_30px_rgba(201,169,110,0.16)] border border-[#2A2A2A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A96E]">
              <div className="mb-4 text-2xl">{card.emoji}</div>
              <h3 className="display-title text-2xl leading-tight">{card.title}</h3>
              <p className="text-muted mt-3 text-sm">{card.description}</p>
              <div className="mt-5 h-px w-0 bg-[#C9A96E] transition-all duration-300 group-hover:w-12" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
