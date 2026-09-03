export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Something went wrong — NightZeros</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0f0f12" />
    <style>
      body { font: 15px/1.5 ui-sans-serif, system-ui, sans-serif; background: #0f0f12; color: #f4f4f5; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      .mark { display: inline-grid; place-items: center; width: 2rem; height: 2rem; border: 1px solid rgba(255,255,255,.12); border-radius: 0.375rem; background: #17171c; font: 600 0.7rem/1 ui-monospace, monospace; margin-bottom: 1.25rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; letter-spacing: -0.02em; }
      p { color: #a1a1aa; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #f4f4f5; color: #0f0f12; }
      .secondary { background: transparent; color: #f4f4f5; border-color: rgba(255,255,255,.12); }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="mark" aria-hidden="true">N0</div>
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Back to NightZeros</a>
      </div>
    </div>
  </body>
</html>`;
}
