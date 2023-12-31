import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { NextThemeProvider } from "@/lib/providers/NextThemeProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Art Gallery",
  description: "AI Art Gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen pt-10 dark:bg-black")}>
        <NextThemeProvider>
          <Header />
          <div className="container max-w-7xl">{children}</div>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
