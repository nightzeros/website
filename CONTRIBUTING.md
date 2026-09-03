# Contributing

Thanks for helping with the NightZeros website.

This repo is the studio site only. Product code lives in [nightzeros/chatai](https://github.com/nightzeros/chatai).

## Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Copy `.env.example` to `.env` only if you need webmaster verification tags.

## Before you open a PR

- Match existing copy and layout. Read [BRAND.md](BRAND.md).
- Don’t invent products, customers, emails, or certifications.
- Keep pages consistent: home, ChatAI, projects, open source, about, security.
- If you change UI, check the flow in the browser (not just a screenshot).
- Run `pnpm build` and confirm it succeeds.

## Copy

Use NightZeros voice: short, specific, no hype. Project numbers stay in `NZ/00N` form. The brand statement is “Build beyond the obvious.”

## Issues

- Website bugs and copy: open an issue in this repo.
- ChatAI bugs: [nightzeros/chatai](https://github.com/nightzeros/chatai).
- Security: see [SECURITY.md](SECURITY.md) — do not file public issues for unpatched vulns.
