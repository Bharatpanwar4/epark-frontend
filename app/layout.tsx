import { ThemeProvider } from "@/src/lib/ui/theme-provider";
import Route from "@/src/utils/Route";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{
     children: React.ReactNode;
  }> ){
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className=" ">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Route children={children}/>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

