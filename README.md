# Portfolio Website

A modern personal portfolio built with Next.js, TypeScript, and a component-driven UI architecture.

## Overview

This project is a production-ready portfolio application focused on clean presentation, smooth interactions, and maintainable structure.

## Tech Stack

- Framework: Next.js 16
- Language: TypeScript
- UI: React 19 + Radix UI primitives
- Styling: Tailwind CSS v4
- Animations: Framer Motion + GSAP + Lenis
- Validation and Forms: Zod + React Hook Form
- Analytics: Vercel Analytics

## Project Structure

```text
app/                # App Router entry points, layout, and pages
components/         # Reusable sections and UI components
hooks/              # Shared React hooks
lib/                # Utilities and helper functions
public/             # Static assets
styles/             # Global style layers
resume.tex          # LaTeX source for resume
```

## Prerequisites

- Node.js 20+
- pnpm 9+

## How to Run This Project (Local)

1. Clone the repository and move into the project directory.

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open the app in your browser:

- http://localhost:3000

## Run in Production Mode (Local Verification)

Use this flow to validate what will run in production:

```bash
pnpm build
pnpm start
```

By default, the production server runs on port 3000.

## Environment Variables

If you add integrations that require secrets (APIs, email services, analytics keys), create a `.env.local` file in the project root.

Example:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Notes:

- Keep secrets out of source control.
- Prefix only browser-safe variables with `NEXT_PUBLIC_`.

## Available Scripts

- `pnpm dev` - Start local development server
- `pnpm build` - Create production build
- `pnpm start` - Run production server
- `pnpm lint` - Run ESLint checks

## Build and Deploy

This project is optimized for deployment on Vercel.

1. Build locally to verify production output:

```bash
pnpm build
```

2. Run lint checks before deployment:

```bash
pnpm lint
```

3. Deploy through your preferred platform (Vercel recommended).

## Customization

- Update page content and sections in `app/` and `components/`.
- Adjust global styles in `app/globals.css` and `styles/globals.css`.
- Add or replace static assets in `public/`.

## Quality Notes

- Uses TypeScript for type safety.
- Uses modular components for scalability and maintainability.
- Includes linting via ESLint for code consistency.

## Important Aspects

- Performance: Keep media optimized and avoid heavy client-side work in initial render paths.
- Accessibility: Use semantic HTML and keyboard-friendly components (Radix primitives help here).
- SEO: Define strong metadata in the app router and keep content structure clear.
- Maintainability: Keep section-level logic in `components/` and shared utilities in `lib/`.
- Reliability: Run `pnpm lint` and `pnpm build` before every release.

## Troubleshooting

- If dependencies fail to install, confirm Node and pnpm versions match prerequisites.
- If styles do not load as expected, check imports in `app/globals.css` and `styles/globals.css`.
- If production behaves differently from dev, reproduce with `pnpm build` and `pnpm start`.

## License

This project is for personal portfolio use. Add a license if you plan to open-source it.
