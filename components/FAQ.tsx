"use client";

import Reveal from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-10">
      <Reveal>
        <h2 className="display-title text-center text-3xl sm:text-5xl">
          Частые вопросы
        </h2>
      </Reveal>

      <Reveal
        delay={0.12}
        className="mt-10 rounded-2xl border border-white/10 bg-[#131313] px-5 sm:px-8"
      >
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
