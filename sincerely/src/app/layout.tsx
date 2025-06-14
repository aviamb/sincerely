import type { Metadata } from "next";
import "./globals.css";
import { Chivo_Mono } from "next/font/google";
import Navbar from "./components/Navbar"

const chivo_Mono = Chivo_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--chivoMono-font",
});

export const metadata: Metadata = {
  title: "sincerely",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivo_Mono.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
