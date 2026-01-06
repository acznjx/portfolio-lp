import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Landing Pages / Desenvolvedor Frontend",
  description: "Desenvolvimento de interfaces exclusivas e landing pages de alta performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}