import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Reads the same mark used everywhere else (favicon, navbar) rather than
 * redrawing a second, divergent version of it here — this is the one asset
 * most likely to be seen by someone who has never opened the site (a link
 * preview on WhatsApp, Slack, X), so it is the last place a mismatched logo
 * should show up.
 */
function markDataUri(): string {
  const bytes = readFileSync(join(process.cwd(), "public", "logo-icon.png"));
  return `data:image/png;base64,${bytes.toString("base64")}`;
}

export default function OpengraphImage() {
  const mark = markDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbfbfd",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og requires a plain <img>, not next/image */}
          <img src={mark} width={84} height={84} alt="" />
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#131316" }}>{SITE_NAME}</div>
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#52525b" }}>{SITE_TAGLINE}</div>
        <div style={{ display: "flex", marginTop: 44, gap: 16 }}>
          {["Compress", "Resize", "Crop", "Convert"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                background: "white",
                border: "1px solid #e6e6ea",
                fontSize: 22,
                color: "#3f3f46",
              }}
            >
              {label}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#8b8b95",
          }}
        >
          100% private — processed entirely in your browser
        </div>
      </div>
    ),
    { ...size }
  );
}
