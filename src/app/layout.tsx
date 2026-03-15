import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PetHealthAI - 24小时毛孩贴身守护精灵",
  description:
    "毫米波与多模态大模型赋能宠物健康管理新范式。让每一位宠物主真正地安心。",
  keywords: ["宠物健康", "AI", "毫米波雷达", "PetHealthAI", "PetMind"],
  openGraph: {
    title: "PetHealthAI - 24小时毛孩贴身守护精灵",
    description: "毫米波与多模态大模型赋能宠物健康管理新范式",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
