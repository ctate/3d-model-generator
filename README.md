<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  AI-powered 3D model generation from text prompts or images, powered by Hyper3D Rodin API
</p>

<p align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#usage"><strong>Usage</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>

---

## Features

- **Text-to-3D generation**: Create models from descriptive prompts
- **Image-to-3D generation**: Generate models from reference images
- **Multiple export formats**: GLB, USDZ, FBX, OBJ, STL
- **Quality customization**: Adjustable quality settings for generation
- **Real-time preview**: View models as they're generated
- **Responsive design**: Works seamlessly on desktop and mobile
- **Advanced options**: Fine-tune generation parameters for precise results

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- Hyper3D Rodin API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-model-generator
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file with your API keys:
```bash
NEXT_PUBLIC_HYPER3D_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to get started.

## Usage

1. **Enter a prompt** or upload an image to describe your 3D model
2. **Customize settings** like quality and output format
3. **Click Generate** to create your 3D model
4. **Preview** the model in real-time with interactive controls
5. **Download** your model in your preferred format

## Tech Stack

- **Frontend**: React 19 + Next.js 15
- **3D Rendering**: Three.js with React Three Fiber
- **UI Components**: Shadcn/UI + Radix UI
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form + Zod
- **API**: Hyper3D Rodin

## Author

- Chris Tate ([@ctatedev](https://x.com/ctatedev))
