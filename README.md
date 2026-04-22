# Arbitrary Systems Site

Marketing site for [arbitrarysystems.io](https://arbitrarysystems.io), built with Next.js App Router.

## Stack

- Next.js 16
- React 19
- TypeScript
- ESLint 9

## Local development

```bash
npm install
npm run dev
```

Use `npm run dev:host` if you want the dev server reachable on your local network.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Or run the full preflight:

```bash
npm run check
```

## Content map

- Homepage: `src/app/page.tsx`
- Shared company and product copy: `src/lib/content.ts`
- Shared metadata helpers: `src/lib/metadata.ts`
- Global visual system: `src/app/globals.css`
- Site chrome: `src/components/site-header.tsx` and `src/components/site-footer.tsx`

## Brand assets

- Primary website logo: `public/branding/logo-mark.jpg`
- App and browser icons: `public/icon.png`, `public/apple-icon.png`

## Deployment routine

Recommended flow:

1. Work locally with `npm run dev`.
2. Run `npm run check` before pushing.
3. Push changes to `main` after review.
4. Let the hosting provider build from the repository using `npm run build`.

If the production host is Vercel, the default Next.js settings are sufficient:

- Build command: `npm run build`
- Install command: `npm install`
- Output: default Next.js output
