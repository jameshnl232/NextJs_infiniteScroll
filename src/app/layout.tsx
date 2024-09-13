import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Hero from "@/components/Hero";


const lora = Lora({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infinite Scroll",
  description: "Infinite Scroll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${lora.className}  `}
      >
        <Hero />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
