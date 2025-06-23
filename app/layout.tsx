import type { Metadata } from "next";

import { Noto_Sans_KR } from "next/font/google";

import "@/styles/globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Small Habit",
  description: "My Small Habit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${notoSansKR.variable} antialiased`}>{children}</body>
    </html>
  );
}
