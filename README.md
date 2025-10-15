<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  Create 3D models from text prompts and reference images using the Hyper3D Rodin API.
</p>

<p align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

## Overview

3D Model Generator is a Next.js app that lets anyone generate 3D assets from natural language prompts and optional reference images. It forwards requests through server routes to the Hyper3D Rodin API and previews the resulting model in a web viewer powered by Three.js and React Three Fiber.

## Features

- Text-to-3D and image-to-3D generation
- Real-time 3D preview (GLB priority; others supported for download)
- Multiple output formats (GLB, USDZ, FBX, OBJ, STL)
- Simple job status polling and model download
- Responsive UI built with Tailwind and shadcn/ui

## Tech Stack

- Next.js 15 (App Router) and React 19
- Three.js, React Three Fiber, and @react-three/drei
- Tailwind CSS and shadcn/ui
- API integration with Hyper3D Rodin

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- pnpm (recommended; a `pnpm-lock.yaml` is provided)

### Install and run

```bash
pnpm install
pnpm dev
```

The app runs on http://localhost:3000.

### Scripts

- `pnpm dev` – Run the development server
- `pnpm build` – Build the production bundle
- `pnpm start` – Start the production server
- `pnpm lint` – Lint the project

## Configuration

This repository currently uses a public demo API key hardcoded in the API route files for convenience. For production use, replace it with your own key and store it in environment variables.

Recommended variables (create a `.env.local`):

```bash
# Server-side only
HYPER3D_API_KEY=your_api_key_here
HYPER3D_API_BASE_URL=https://hyperhuman.deemos.com/api/v2
```

Then update the server routes to read from `process.env` (files listed below). Example snippet:

```ts
// const API_KEY = "vibecoding"
const API_KEY = process.env.HYPER3D_API_KEY as string
const BASE = process.env.HYPER3D_API_BASE_URL ?? "https://hyperhuman.deemos.com/api/v2"
```

## API Routes (Server)

- `app/api/rodin/route.ts` – Submit a new generation job to Hyper3D
- `app/api/status/route.ts` – Poll job status
- `app/api/download/route.ts` – Get downloadable asset URLs for a finished job
- `app/api/proxy-download/route.ts` – Proxy file downloads to avoid CORS issues in the browser

The client code calls these routes from `lib/api-service.ts`.

## App Structure

- `app/page.tsx` – Main page mounting the generator UI
- `components/rodin.tsx` – Orchestrates job submission, status polling, and download
- `components/form.tsx` – Prompt and image upload form
- `components/model-viewer.tsx` – Canvas and controls for displaying models
- `components/model-component.tsx` – GLB loading and scene fit
- `styles/`, `tailwind.config.ts` – Styling and design system

## Using the App

1. Enter a short prompt describing the model
2. (Optional) Upload up to 5 reference images
3. Submit to start generation and watch status
4. Preview the GLB in the viewer
5. Download assets in your preferred format

Tips
- If a model does not preview, ensure a GLB file is available; other formats still download.
- Downloads open via the proxy route to avoid CORS issues when hitting external URLs.

## Deployment

The app is designed for Vercel but works on any Next.js-compatible host.

1. Set environment variables in your hosting provider
2. Build and deploy the app
3. Verify server routes can reach `HYPER3D_API_BASE_URL`

On Vercel, add `HYPER3D_API_KEY` (and optionally `HYPER3D_API_BASE_URL`) in Project Settings → Environment Variables.

## Troubleshooting

- Model preview blank or errors: Confirm the selected file is `.glb`. Check browser console for loading errors.
- Download fails: The proxy route helps with CORS; verify the URL and that the job is completed.
- 401/403 from API: Ensure your `HYPER3D_API_KEY` is valid and not rate-limited.

## Credits

- Built with Next.js, Three.js, and shadcn/ui
- Powered by the Hyper3D Rodin API

## Author

- Chris Tate ([@ctatedev](https://x.com/ctatedev))
