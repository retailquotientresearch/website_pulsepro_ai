"use client";
import { useMemo } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import * as lowlight from "lowlight";
import { cn } from "@/lib/utils";

type Props = {
  value: string | object | null | undefined; // JSON from TipTap or HTML string
  className?: string;
};

// Attempt to detect JSON tiptap content
function parseContent(value: Props["value"]) {
  if (!value) return null;
  if (typeof value === "string") {
    try {
      const maybe = JSON.parse(value);
      if (maybe && typeof maybe === "object" && maybe.type === "doc") return maybe;
    } catch {
      return value; // plain HTML
    }
    return value; // plain HTML
  }
  return value; // object assumed tiptap JSON
}

export function RichTextRenderer({ value, className }: Props) {
  const parsed = useMemo(() => parseContent(value), [value]);
  const isJson = parsed && typeof parsed === "object" && !(parsed instanceof String);

  const editor = useEditor({
    editable: false,
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Underline,
  Link.configure({ openOnClick: true }),
      Image,
      Heading.configure({ levels: [1, 2, 3, 4] }),
      CodeBlockLowlight.configure({ lowlight }),
    ],
    content: isJson ? parsed : "",
  }, [isJson, parsed]);

  if (!parsed) return null;

  return (
    <div className={cn("prose prose-indigo max-w-none", className)}>
      {isJson ? (
        <EditorContent editor={editor} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: parsed as string }} />
      )}
    </div>
  );
}
