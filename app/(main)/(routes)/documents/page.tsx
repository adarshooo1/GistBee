"use client";
import React from "react";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });
    toast.promise(promise, {
      loading: "Hold on Bee, Gist almost created!",
      success: "Gist created successfully!",
      error: "Whoops! Something went wrong!.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty-Image"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty-Image"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Gistbee
      </h2>
      <Button
        onClick={onCreate}
        className="transition-transform transform hover:scale-105 active:scale-95 shadow-sm"
      >
        <PlusCircle className="h-4 w-4 mr-1" />
        <p className="ml-1">Create a gist</p>
      </Button>
    </div>
  );
};

export default DocumentPage;
