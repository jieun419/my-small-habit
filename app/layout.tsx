import type { Metadata } from "next";

import { Noto_Sans_KR } from "next/font/google";

import ClientLayout from "./clientLayout";

import "@/styles/globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Small Habit",
  description: "My Small Habit",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${notoSansKR.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
