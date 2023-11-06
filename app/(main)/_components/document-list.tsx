"use client";

import { useState } from "react";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { FileIcon, PackageOpen } from "lucide-react";
import { Item } from "./item";

interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
}

export const DocumentList = ({
  parentDocumentId,
  level = 0,
}: DocumentListProps) => {
  const params = useParams();
  const router = useRouter();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const onExpand = (documentId: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [documentId]: !prevExpanded[documentId],
    }));
  };
  const documents = useQuery(api.documents.getSidebar, {
    parentDocument: parentDocumentId,
  });

  // console.log(documents);

  //Received Done

  const onRedirect = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  if (documents === undefined) {
    return (
      <>
        <Item.Skeleton level={level} />
        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    );
  }

  return (
    <>
      <p
        style={{
          paddingLeft: level ? `${level * 12 + 25}px` : undefined,
        }}
        className={cn(
          "hidden text-sm font-medium text-muted-foreground/80",
          expanded && "last:block",
          level === 0 && "hidden"
        )}
      >
        <div className="flex items-center justify-between px-4">
          <span className="truncate">no gist inside</span>{" "}
          <span>
            <PackageOpen className="w-4 h-4" />
          </span>
        </div>
      </p>
      {documents.map((document) => {
        return (
          <div key={document._id}>
            <Item
              id={document._id}
              onClick={() => onRedirect(document._id)}
              label={document.title}
              icon={FileIcon}
              documentIcon={document.icon}
              active={params.documentId === document._id}
              level={level}
              onExpand={() => onExpand(document._id)}
              expanded={expanded[document._id]}
            />
            {expanded[document._id] && (
              <DocumentList parentDocumentId={document._id} level={level + 1} />
            )}
          </div>
        );
      })}
    </>
  );
};
