# Sanity + SvelteKit Page Builder

A minimal page builder using Sanity Studio and SvelteKit. Content editors compose pages from blocks (Hero, CTA, etc.) in the studio, and the frontend dynamically renders them.

## Setup

### Studio

```bash
cd studio
pnpm install
pnpm dev        # http://localhost:3333
```

### Frontend

```bash
cd web
cp .env.example .env
pnpm install
pnpm dev        # http://localhost:5173
```

Visit `/{slug}` to see pages created in the studio.

## Adding a New Block

1. **Schema** — Create an object type in `studio/schemaTypes/` and add it to `index.ts` and `pageType.ts`'s modules array
2. **Component** — Create a Svelte component in `web/src/lib/components/` that accepts a `data` prop
3. **Register** — Add the `_type` → component mapping in `BlockRenderer.svelte`
