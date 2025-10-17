<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
</a>

<h1 align="center">3D Model Generator</h1>

<p align="center">
  Create stunning 3D models from text prompts or images using AI-powered generation.
</p>

<p align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#about"><strong>About</strong></a> ·
  <a href="#quick-start"><strong>Quick Start</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#usage"><strong>Usage</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>

## About

3D Model Generator is an AI-powered application that transforms your creative ideas into high-quality 3D models. Whether you describe what you want with text or provide reference images, the application uses the Hyper3D Rodin API to generate professional 3D assets. No modeling experience required—just describe or show what you want to create.

## Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)
- API key for Hyper3D Rodin (if not included)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd my-v0-project

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your Hyper3D Rodin API key to .env.local

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start creating 3D models.

## Features

- **Text-to-3D Generation**: Describe any 3D model and watch it come to life
- **Image-to-3D Generation**: Upload reference images to guide model creation
- **Multiple Export Formats**: Download in GLB, USDZ, FBX, OBJ, or STL
- **Quality Controls**: Adjust quality settings for optimal results
- **Real-time Preview**: View your 3D models instantly with interactive controls
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Advanced Options**: Fine-tune generation parameters for precise control

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js** | React framework and server-side rendering |
| **React & React 19** | UI component library |
| **Three.js** | 3D rendering and visualization |
| **React Three Fiber** | Three.js abstraction for React |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Pre-built accessible UI components |
| **Hyper3D Rodin API** | AI-powered 3D model generation |
| **Lucide React** | Icon library |

## Usage

### Basic Workflow

1. **Enter a prompt**: Describe the 3D model you want to create in detail
2. **Add references** (optional): Upload reference images to guide generation
3. **Configure settings**: Choose output format, quality level, and other parameters
4. **Generate**: Submit your request and wait for the AI to create your model
5. **Preview & Download**: View the generated 3D model and download in your preferred format

### Example Prompts

- "A wooden chair with a leather seat and brass legs"
- "A futuristic spaceship with neon lights"
- "A ceramic vase with floral patterns"

## Build & Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Author

- **Chris Tate** ([@ctatedev](https://x.com/ctatedev))
