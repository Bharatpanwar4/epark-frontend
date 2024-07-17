'use client'
import { Button } from "@/src/lib/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { setTheme } = useTheme()
  return (
   <div className="flex items-center justify-around pt-8">

    <Button onClick={() => setTheme("light")}>
          Light
        </Button>
        <Button onClick={() => setTheme("dark")}>
          Dark
        </Button>
        <Button onClick={() => setTheme("system")}>
          System
        </Button>
   </div>
  );
}
