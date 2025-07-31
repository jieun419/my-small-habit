import type { Metadata } from "next";

import { Roboto } from "next/font/google";

import ClientLayout from "./clientLayout";

import "@/styles/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "My Small Habit - 나의 작은 습관",
  description: "습관을 주기적으로, 완벽하게 지키지 않아도, 하루에 하나만 해도 괜찮아요",
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${roboto.className} sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
