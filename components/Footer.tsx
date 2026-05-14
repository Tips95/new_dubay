import { Camera, Play, Send } from "lucide-react";

import { FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_auto] lg:px-10">
        <div>
          <p className="display-title text-lg tracking-[0.16em]">{FOOTER.logo}</p>
          <p className="text-muted mt-3 max-w-md text-sm">{FOOTER.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {FOOTER.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted hover:text-accent-light text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {[Camera, Send, Play].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-accent-light text-muted inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors"
              aria-label="Social link"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="text-muted border-t border-white/10 px-4 py-5 text-center text-xs">
        {FOOTER.copyright}
      </div>
    </footer>
  );
}
