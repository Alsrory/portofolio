import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "وجدي السروري | Wajdi Alsarory – Laravel & React Developer",
  description: "أنا وجدي السروري، مطوّر Laravel وReact بخبرة في تطوير تطبيقات الويب الحديثة. Explore modern full-stack projects using Laravel, Next.js, and REST APIs.",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" overflow-x-hidden  scroll-smooth selection:bg-primary selection:text-white">
      
      <body className={cn(" ainer text-muted-foreground overflow-x-hidden ",inter.className)}>
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
