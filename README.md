<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  AI-powered 3D model creation from text prompts or images, powered by Hyper3D Rodin API.
</p>

<p align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#usage"><strong>Usage</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>

---

## Features

- **Text-to-3D generation** — Create models from text descriptions
- **Image-to-3D generation** — Generate models from reference images
- **Multiple formats** — Export as GLB, USDZ, FBX, OBJ, or STL
- **Real-time preview** — Visualize 3D models instantly
- **Adjustable quality** — Fine-tune generation parameters
- **Responsive design** — Works seamlessly on desktop and mobile

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm (or npm/yarn)
- Hyper3D Rodin API key

### Installation

1. Clone the repository and install dependencies:
   ```bash
   pnpm install
   ```

2. Create a `.env.local` file in the root directory and add your API key:
   ```
   NEXT_PUBLIC_RODIN_API_KEY=your_api_key_here
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Usage

1. **Enter a prompt** — Describe the 3D model you want to create
2. **Upload images** (optional) — Add reference images to guide generation
3. **Adjust settings** — Customize quality, format, and other parameters
4. **Generate** — Submit to create your 3D model
5. **Download** — Export your model in your preferred format

## Tech Stack

- **Framework** — [Next.js](https://nextjs.org/) 15 & [React](https://react.dev/) 19
- **3D Rendering** — [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Styling** — [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **API** — [Hyper3D Rodin API](https://hyper3d.ai/)
- **Forms** — [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── public/           # Static assets
├── styles/           # Global styles
└── tailwind.config.ts # Tailwind configuration
```

## Author

- Chris Tate ([@ctatedev](https://x.com/ctatedev))
