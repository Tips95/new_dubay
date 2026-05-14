"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Reveal from "@/components/Reveal";
import { DESTINATIONS } from "@/lib/constants";

export default function Destinations() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-10">
      <Reveal>
        <h2 className="display-title text-3xl sm:text-5xl">Выездные смотровые туры</h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="text-muted mt-4 max-w-3xl">
          Живые показы объектов, нетворкинг с застройщиками, практика на месте
        </p>
      </Reveal>

      <motion.div
        drag="x"
        dragConstraints={{ left: -800, right: 0 }}
        className="mt-10 flex cursor-grab gap-4 overflow-x-auto pb-3 active:cursor-grabbing snap-x snap-mandatory"
      >
        {DESTINATIONS.map((item) => (
          <article
            key={item.name}
            className="group relative h-[420px] min-w-[280px] overflow-hidden rounded-2xl border border-white/10 snap-center sm:min-w-[330px]"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={900}
              height={1200}
              unoptimized
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="display-title text-2xl">
                {item.flag} {item.name}
              </p>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
