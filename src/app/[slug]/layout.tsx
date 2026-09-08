import { ToolFrame } from "@/components/layout/ToolFrame";

/**
 * Keyword landing pages live outside the `(tool)` route group — a dynamic
 * segment cannot sit inside it and still own the top-level URL — so they
 * bring the same shell with them rather than a variation of it.
 */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <ToolFrame>{children}</ToolFrame>;
}
