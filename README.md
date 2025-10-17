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
  <a href="#overview"><strong>Overview</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#quick-start"><strong>Quick Start</strong></a> ·
  <a href="#usage"><strong>Usage</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>

---

## Overview

3D Model Generator is an AI-powered web application that democratizes 3D content creation. Whether you're describing an object in words or providing reference images, the app instantly generates high-quality 3D models ready for use in games, visualizations, or 3D printing.

## Features

- **Text-to-3D Generation**: Create 3D models from natural language descriptions
- **Image-to-3D Generation**: Convert images into 3D models with AI
- **Multiple Export Formats**: Save as GLB, USDZ, FBX, OBJ, or STL
- **Real-Time Preview**: View and rotate your model in the browser
- **Quality Settings**: Adjust generation parameters for your needs
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Advanced Controls**: Fine-tune generation with detailed options

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (or npm)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd sandbox

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your Hyper3D Rodin API key to .env.local
```

### Development

```bash
# Start the development server
pnpm dev

# Open your browser
# Navigate to http://localhost:3000
```

### Production Build

```bash
# Build for production
pnpm build

# Start the production server
pnpm start
```

## Usage

1. **Enter a Description**: Write a detailed text prompt or upload an image
2. **Configure Settings**: Choose output format, quality level, and other parameters
3. **Generate**: Click "Generate" to create your 3D model
4. **Preview**: Inspect your model with the interactive 3D viewer
5. **Export**: Download your model in your preferred format

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 with React 19
- **3D Rendering**: [Three.js](https://threejs.org/) with [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) and [@react-three/drei](https://drei.docs.pmnd.rs/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **API**: [Hyper3D Rodin API](https://hyper3d.io/) for model generation
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) for toast messages

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

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_API_URL=your_api_url
HYPER3D_API_KEY=your_hyper3d_api_key
```

## License

Created by [Chris Tate](https://x.com/ctatedev)
