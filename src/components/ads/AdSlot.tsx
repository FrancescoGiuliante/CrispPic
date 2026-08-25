/**
 * Placeholder ad slot.
 *
 * Renders nothing until an AdSense (or other network) client ID is
 * configured via NEXT_PUBLIC_ADSENSE_CLIENT — so the layout ships now,
 * but no ad code loads (and no empty boxes show) until the site is
 * approved and monetization is actually turned on.
 *
 * Rules this component exists to enforce (see project brief §14):
 * - Never placed between an upload step and its result/download.
 * - Never an interstitial, popup, or auto-expanding unit.
 * - Reserves a fixed height so activating it later causes no layout shift.
 *
 * Usage: <AdSlot placement="below-tool" />
 */

const AD_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

type AdSlotProps = {
  placement: "below-tool" | "sidebar" | "below-content";
  className?: string;
};

const RESERVED_HEIGHT: Record<AdSlotProps["placement"], string> = {
  "below-tool": "min-h-[100px]",
  sidebar: "min-h-[250px]",
  "below-content": "min-h-[90px]",
};

export function AdSlot({ placement, className = "" }: AdSlotProps) {
  if (!AD_CLIENT) return null;

  return (
    <div
      className={`w-full ${RESERVED_HEIGHT[placement]} flex items-center justify-center ${className}`}
      data-ad-placement={placement}
      aria-hidden="true"
    >
      {/* Ad network script/unit wires up here once AD_CLIENT is set. */}
    </div>
  );
}
