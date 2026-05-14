import { PARTNERS_MARQUEE } from "@/lib/constants";

export default function SocialProofBar() {
  return (
    <section className="border-y border-white/10 bg-[#111111] py-4">
      <div className="relative overflow-hidden">
        <div className="marquee text-muted flex min-w-max gap-8 text-sm">
          <span>{PARTNERS_MARQUEE}</span>
          <span>{PARTNERS_MARQUEE}</span>
        </div>
      </div>
    </section>
  );
}
