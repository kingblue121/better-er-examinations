import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Better er Exams | Past Papers Made Easy er",
  keywords: "examinations.ie, exams, leaving cert, junior cert, past papers, no mock papers",
  description: "The best way to search for past leaving cert exam papers and marking schemes sourced from examinations.ie's material archive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
