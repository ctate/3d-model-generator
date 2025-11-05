<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  A 3D model generation application powered by the Hyper3D Rodin API.
</p>

<p align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#about"><strong>About</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#configuration"><strong>Configuration</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#project-structure"><strong>Project Structure</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
</p>
<br/>

## About

3D Model Generator provides an end-to-end workflow for creating, previewing, and downloading AI-generated 3D assets from natural language prompts or reference imagery. It orchestrates the experience around Hyper3D's Rodin API so that artists, designers, and developers can experiment with 3D model creation without leaving the browser.

## Demo

- Explore the community build on [Vercel v0](https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w)
- Preview assets with the integrated `three.js` viewer before downloading the final files

## Getting Started

### Prerequisites

- Node.js 18.18+ (or 20+)
- `pnpm` 9+ (recommended) or another Node package manager

### Installation

```bash
git clone <your-fork-url>
cd 3d-model-generator
pnpm install
```

### Local development

```bash
pnpm dev
```

The app starts on `http://localhost:3000`. Any changes under `app/` or `components/` hot-reload automatically.

### Production build

```bash
pnpm build
pnpm start
```

Use `pnpm lint` to run Next.js linting before committing changes.

## Configuration

The app interacts with Hyper3D's Rodin endpoints through Next.js API routes located in `app/api/*`.

- **API key**: replace the placeholder `API_KEY` constant in `app/api/rodin/route.ts`, `app/api/status/route.ts`, and `app/api/download/route.ts` with your Hyper3D key. Avoid committing private keys.
- **Environment variables**: for a cleaner setup, you can move the API key into `.env.local` and access it via `process.env`. (Example: `process.env.HYPER3D_API_KEY`).
- **CORS & downloads**: `app/api/proxy-download/route.ts` streams file responses so downloads work consistently across browsers.

## Features

- Prompt-based and image-conditioned 3D model requests
- Fine-grained quality, format, and lighting controls via the form UI
- Job status polling with progress feedback and error surfaces
- Built-in viewer powered by `three.js` / `@react-three/fiber`
- Multi-format downloads (GLB, USDZ, FBX, OBJ, STL)
- Responsive layout with dark/light theme support

## Tech Stack

- Next.js 15 & React 19 with the App Router
- Three.js, `@react-three/fiber`, and `@react-three/drei` for rendering
- Tailwind CSS and shadcn/ui for component primitives
- Zod & `react-hook-form` for schema-driven validation and forms
- TypeScript end to end

## Project Structure

```
app/                # Next.js app router, pages, layouts, API routes
components/         # Reusable UI and scene components
hooks/              # Custom hooks for media queries, toasts, etc.
lib/                # Form schemas, API helpers, general utilities
public/             # Static assets used across the app
styles/             # Global Tailwind entrypoint
```

Notable entry points:

- `app/page.tsx` wires form state, job orchestration, and viewer layout
- `components/model-viewer.tsx` is the primary `three.js` canvas
- `components/form.tsx` defines the input options surfaced to users

## Contributing

1. Fork the repository and create a feature branch.
2. Ensure `pnpm lint` passes and include relevant tests or screenshots for UI tweaks.
3. Submit a pull request with a clear description of changes and testing notes.

## Author

- Chris Tate ([@ctatedev](https://x.com/ctatedev))
