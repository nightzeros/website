/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SITE_VERIFICATION?: string;
  readonly VITE_BING_SITE_VERIFICATION?: string;
  /** Public ChatAI assistant id for the site-wide bubble */
  readonly VITE_CHATAI_ASSISTANT_ID?: string;
  /** ChatAI origin that hosts /widget/chat.js (default https://app.nightzeros.com) */
  readonly VITE_CHATAI_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
