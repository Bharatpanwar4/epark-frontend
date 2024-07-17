'use client'
import { Button } from "@/src/lib/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { setTheme } = useTheme()
  return (
   <div className="flex items-center justify-center">
    <Button variant={'outline'} className="bg-black dark:bg-white text-white" onClick={() => setTheme("light")}>ss</Button>
   </div>
  );
}
