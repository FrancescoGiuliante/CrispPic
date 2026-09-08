import { ToolFrame } from "@/components/layout/ToolFrame";

/**
 * Shell for every tool page (home, /compress, /resize, /crop, /convert).
 * The frame itself is shared with the keyword landing routes under /[slug];
 * see `ToolFrame` for the layout contract.
 */
export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <ToolFrame>{children}</ToolFrame>;
}
