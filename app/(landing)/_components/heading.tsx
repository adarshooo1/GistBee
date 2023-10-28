"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold">
        Your 💡<span className="underline">Ideas</span>, 📃
        <span className="underline"> Docs</span>, & 💼
        <span className="underline">Work</span>. Unified.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        GistBee's productive & collaborative workspace for <br />
        Students, Teachers and Working Professional.
      </h3>
      <Button variant="black">
        Enter GistBee
        <ArrowRight className=" h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
