"use client";

import { useEffect } from "react";

/** Marks the extra history entry this hook pushes, so it can recognise its own. */
const DECOY_KEY = "__leaveGuard";

/**
 * Confirms before the user walks away from work that only exists in this tab.
 *
 * Everything the tool produces lives in memory — there is no upload and no
 * server copy — so a stray click on a nav link or a closed tab throws the
 * image away with no way back. While `active` is true this guards the three
 * ways out we can actually see:
 *
 *   - closing or reloading the tab, via `beforeunload` (the browser writes
 *     its own wording there; `message` is ignored by every current browser);
 *   - clicking an in-app link, via a capture-phase click listener that runs
 *     before Next's router sees the event;
 *   - the back/forward buttons, via a duplicate history entry that absorbs
 *     the first pop so we get a chance to ask.
 *
 * Leaving to another origin needs no interception: `beforeunload` covers it.
 */
export function useLeaveGuard(active: boolean, message: string) {
  useEffect(() => {
    if (!active) return;

    function onBeforeUnload(event: BeforeUnloadEvent) {
      event.preventDefault();
      // Legacy spelling, still required by some browsers to arm the prompt.
      event.returnValue = "";
    }

    function onClick(event: MouseEvent) {
      // Anything but a plain left click either opens elsewhere or was already
      // handled — either way this tab keeps its image.
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.hasAttribute("download") || (anchor.target && anchor.target !== "_self")) return;

      const next = new URL(anchor.href, window.location.href);
      // Cross-origin is beforeunload's job; a pure hash or same-URL click
      // never unmounts the tool.
      if (next.origin !== window.location.origin) return;
      if (next.pathname === window.location.pathname && next.search === window.location.search) return;

      if (window.confirm(message)) return;
      event.preventDefault();
      event.stopPropagation();
    }

    /**
     * The decoy carries the router's own state so Next still recognises the
     * entry as one of its own and re-renders the current route in place
     * instead of remounting the tool.
     */
    function pushDecoy() {
      window.history.pushState({ ...window.history.state, [DECOY_KEY]: true }, "");
    }

    function onPopState() {
      if (window.confirm(message)) {
        // The pop already consumed the decoy, so this second step lands on
        // the page the user actually asked for.
        window.removeEventListener("beforeunload", onBeforeUnload);
        window.history.back();
        return;
      }
      // Declined: put the decoy back so the next Back press asks again.
      pushDecoy();
    }

    pushDecoy();
    window.addEventListener("beforeunload", onBeforeUnload);
    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onClick, true);
      // Drop the decoy when the guard switches off in place (the user hit
      // "New image", say) so Back doesn't need two presses afterwards. After
      // a real navigation the top entry is the router's, not ours.
      if (window.history.state?.[DECOY_KEY]) window.history.back();
    };
  }, [active, message]);
}
