"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

/**
 * Cookie consent, for GDPR/ePrivacy.
 *
 * The rule this implements: no non-essential third-party script is fetched
 * before the visitor has explicitly said yes. Because of that, consent is
 * *not* a preference the page reacts to after the fact — it gates whether
 * `GoogleAnalytics` and `AdSenseScript` are rendered at all (see
 * `ConsentedScripts`), so a declining visitor never sends a byte to Google.
 *
 * Only two states are ever stored. "Unknown" is deliberately not persisted:
 * the absence of a stored value *is* the unknown state, which keeps the
 * banner showing until a real choice is made and makes the storage format
 * impossible to get into a half-decided state.
 */

export type ConsentStatus = "granted" | "denied";

export const CONSENT_STORAGE_KEY = "crisppic-consent";

type Ctx = {
  /** The stored choice, or null while it is unknown (not yet read, or never made). */
  status: ConsentStatus | null;
  /** True once the client has read localStorage — nothing consent-dependent renders before this. */
  ready: boolean;
  /** Whether the banner is on screen right now. */
  bannerOpen: boolean;
  accept: () => void;
  decline: () => void;
  /** Re-opens the banner from the footer link, so a choice can be changed. */
  openPreferences: () => void;
  /** Only offered when a choice already exists — an undecided banner has no dismiss. */
  closeBanner: () => void;
};

const ConsentContext = createContext<Ctx | null>(null);

function readStored(): ConsentStatus | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    // Private-mode / blocked storage: treat as undecided rather than crashing.
    return null;
  }
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  // Server and first client render must agree, so both start undecided and
  // not ready — the banner and the third-party scripts appear only after the
  // effect below has read the real answer.
  const [status, setStatus] = useState<ConsentStatus | null>(null);
  const [ready, setReady] = useState(false);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only init; see comment above
    setStatus(readStored());
    setReady(true);
  }, []);

  const store = useCallback((next: ConsentStatus) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable; the in-memory choice still holds for this visit.
    }
  }, []);

  const accept = useCallback(() => {
    store("granted");
    setStatus("granted");
    setReopened(false);
  }, [store]);

  const decline = useCallback(() => {
    const wasGranted = readStored() === "granted";
    store("denied");
    setStatus("denied");
    setReopened(false);
    // Withdrawing consent after the scripts were already injected: React can
    // unmount the <Script> tags but cannot un-run them, so the only honest
    // way to stop them is a fresh document.
    if (wasGranted) window.location.reload();
  }, [store]);

  const value = useMemo<Ctx>(
    () => ({
      status,
      ready,
      bannerOpen: ready && (status === null || reopened),
      accept,
      decline,
      openPreferences: () => setReopened(true),
      closeBanner: () => setReopened(false),
    }),
    [status, ready, reopened, accept, decline]
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): Ctx {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within a ConsentProvider");
  return ctx;
}
