import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Websites Profissionais",
  description: "Desenvolvimento de interfaces exclusivas, landing pages e sites de alta performance.",
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