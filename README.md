<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
</a>

<h1 align="center">3D Model Generator</h1>

<p align="center">
  An AI-powered 3D model generation application powered by <strong>Hyper3D Rodin API</strong>
</p>

<p align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#quick-start"><strong>Quick Start</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#usage"><strong>Usage</strong></a>
</p>

---

## Features

- **Text-to-3D Generation**: Create 3D models from detailed text descriptions
- **Image-to-3D Generation**: Generate 3D models from reference images
- **Multiple Formats**: Export as GLB, USDZ, FBX, OBJ, or STL
- **Real-time Preview**: Visualize your 3D model instantly with interactive controls
- **Quality Control**: Adjustable generation settings for fine-tuned results
- **Responsive Design**: Seamlessly works on desktop and mobile devices

## Quick Start

### Prerequisites

- Node.js 18+ and pnpm

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd 3d-model-generator
pnpm install
```

### Environment Setup

Create a `.env.local` file with your Hyper3D Rodin API credentials:

```env
NEXT_PUBLIC_HYPER3D_API_KEY=your_api_key_here
```

### Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

## Usage

1. **Enter a Prompt**: Describe the 3D model you want to generate or upload a reference image
2. **Configure Settings**: Choose output format, quality level, and other parameters
3. **Generate**: Click the generate button and wait for processing
4. **Preview**: Inspect your model in the interactive 3D viewer
5. **Download**: Export your model in your preferred format

## Tech Stack

- **Frontend**: React 19, Next.js 15
- **3D Rendering**: Three.js with React Three Fiber and Drei
- **Styling**: Tailwind CSS with Shadcn/UI components
- **Forms**: React Hook Form with Zod validation
- **UI**: Radix UI components library
- **API**: Hyper3D Rodin API for model generation

## License

Created by Chris Tate ([@ctatedev](https://x.com/ctatedev))
