"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";
import Cover from "@/components/cover";

interface DocumentIdPage {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPage) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  if (document === undefined) {
    return <div>Not Found</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
        TOOBAR
      </div>
    </div>
  );
};

export default DocumentIdPage;
