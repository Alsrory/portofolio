import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "وجدي السروري | مطوّر Laravel وReact - أعمالي ومشاريعي",
  description: "الموقع الشخصي لوجدي السروري، مطوّر Back-End متخصص في Laravel وReact وNext.js. استعرض أعمالي ومشاريعي وخبراتي في تطوير الويب الحديث.",
  icons: {
    icon: "/n.svg",
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
