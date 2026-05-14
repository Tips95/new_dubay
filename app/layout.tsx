import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stepdream.academy"),
  title: "StepDream Academy — Обучение брокеров международной недвижимости",
  description:
    "Премиальная программа подготовки брокеров: 18 модулей, наставники, выездные туры и доступ к международным объектам.",
  openGraph: {
    title: "StepDream Academy",
    description:
      "Стань топ-брокером международной недвижимости с программой StepDream Academy.",
    type: "website",
    images: [
      {
        url: "https://picsum.photos/seed/stepdream-og/1600/900",
        width: 1600,
        height: 900,
        alt: "StepDream Academy",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-background text-text min-h-screen">{children}</body>
    </html>
  );
}
