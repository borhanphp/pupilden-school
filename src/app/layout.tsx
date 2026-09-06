import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e-Learning Rangamati — Digital Learning for Every School",
  description:
    "Bringing digital learning to every corner of Rangamati. Connecting teachers and students with quality digital education, learning resources, and technology-enabled classrooms across 100 schools in Chittagong Hill Tracts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
