import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/gistbee-logo.png" height={40} width={40} alt="Logo" />
      <p className={cn("font-bold text-2xl", font.className)}>Gistbee</p>
    </div>
  );
};
