import { useEffect } from "react";
import { LINKS } from "./links";

const SCRIPT_ATTR = "data-nz-chatai-widget";

/**
 * Loads the hosted ChatAI bubble once for the whole site.
 * No-ops when VITE_CHATAI_ASSISTANT_ID is unset.
 */
export function ChatAIWidget() {
  useEffect(() => {
    const assistantId = (import.meta.env.VITE_CHATAI_ASSISTANT_ID as string | undefined)?.trim();
    if (!assistantId) return;
    if (typeof document === "undefined") return;
    if (document.querySelector(`script[${SCRIPT_ATTR}]`)) return;

    const apiUrl = (
      (import.meta.env.VITE_CHATAI_API_URL as string | undefined)?.trim() || LINKS.app
    ).replace(/\/$/, "");

    const script = document.createElement("script");
    script.src = `${apiUrl}/widget/chat.js`;
    script.async = true;
    script.dataset.assistantId = assistantId;
    script.setAttribute(SCRIPT_ATTR, "1");
    document.body.appendChild(script);

    return () => {
      // Keep the script across SPA navigations; only remove on full unmount of root.
      // Root rarely unmounts — leave the bubble in place.
    };
  }, []);

  return null;
}
