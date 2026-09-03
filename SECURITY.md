# Security Policy

## Reporting a vulnerability

If you find a security issue in Econ Nexus, please report it privately to
`asadaamir496@gmail.com` rather than opening a public issue. We aim to
acknowledge reports within 72 hours.

## How secrets are handled in this repository

This repository is public. **No real credentials are committed.**

- `.env` is git-ignored. `.env.example` contains placeholder values only.
- All private keys (service role keys, Firecrawl, OpenAI, Resend, analytics
  keys) live in the Lovable Cloud encrypted secret store and are injected as
  environment variables into edge functions at runtime. They never appear in
  the codebase or in the browser bundle.
- Only the Supabase **publishable/anon** key reaches the frontend. It is safe
  to expose: it grants no privileges beyond what Row Level Security allows.
- Service role keys and the database password are not retrievable from this
  project and are never logged, returned, or echoed by any function.

## Application security controls

- **Row Level Security** is enabled on every table in the `public` schema, with
  explicit `GRANT`s per role. Owner-scoped tables (`profiles`, `chat_history`,
  `assignment_usage`, `user_roles`) restrict access to `auth.uid()`.
- **Role-based access control** uses a separate `user_roles` table with a
  `SECURITY DEFINER` `has_role()` helper — roles are never stored on profiles.
- `SECURITY DEFINER` functions have `EXECUTE` revoked from `PUBLIC`, `anon`,
  and `authenticated`; they are callable only from server-side code.
- **Edge functions** validate the caller's JWT before touching privileged data
  and gate admin-only endpoints (e.g. the research scraper) behind role checks.
- **Prompt-injection and secret-exfiltration filters** run on chatbot input to
  block attempts to extract API keys or service credentials.
- **Input sanitisation, Zod validation, and rate limiting** are applied to
  search, chat, and contact surfaces (`src/lib/security.ts`).
- A **Content Security Policy** in `index.html` restricts connections to the
  backend, the AI gateway, and same-origin resources.

## Running locally

```sh
cp .env.example .env   # then fill in your own project's publishable values
npm i
npm run dev
```

Never commit a populated `.env`.
