<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  An AI-powered 3D model generation application that transforms text and images into high-quality 3D models using the Hyper3D Rodin API.
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
  <a href="#api-reference"><strong>API</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
</p>
<br/>

## Features

### Core Capabilities
- **Text-to-3D Generation** - Create 3D models from natural language descriptions
- **Image-to-3D Generation** - Transform 2D images into 3D models with AI
- **Real-time 3D Preview** - Interactive Three.js viewer with orbit controls
- **Multi-format Export** - Download models in GLB, USDZ, FBX, OBJ, or STL formats

### Customization Options
- Adjustable quality settings (Low, Medium, High, Ultra)
- Advanced generation parameters
- Custom resolution and topology control
- Material and texture optimization

### User Experience
- Responsive design for desktop and mobile devices
- Intuitive drag-and-drop interface
- Progress tracking for generation tasks
- Gallery view of generated models

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm, npm, or yarn package manager
- Hyper3D Rodin API key ([Get one here](https://hyperhuman.deemos.com/rodin))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-model-generator
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
# Create a .env.local file in the root directory
echo "HYPER3D_API_KEY=your_api_key_here" > .env.local
```

4. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Usage

### Basic Text-to-3D Generation

1. Enter a descriptive prompt in the text field (e.g., "a red sports car" or "medieval castle")
2. Select your desired output format and quality settings
3. Click "Generate" and wait for the AI to create your model
4. Preview the model in the 3D viewer
5. Download the model file when ready

### Image-to-3D Generation

1. Click the upload area or drag and drop reference images
2. Add a text prompt to guide the generation (optional)
3. Adjust quality and format settings
4. Generate and download your 3D model

### Advanced Options

Access advanced settings to fine-tune:
- Mesh topology and polygon count
- Texture resolution
- Material properties
- Generation seed for reproducibility

## Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Shadcn/UI](https://ui.shadcn.com/)** - Accessible component library

### 3D Rendering
- **[Three.js](https://threejs.org/)** - WebGL 3D library
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for React Three Fiber

### Form & State Management
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[Zod](https://zod.dev/)** - Schema validation
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

### AI & API
- **[Hyper3D Rodin API](https://hyperhuman.deemos.com/rodin)** - AI-powered 3D generation

## API Reference

### Hyper3D Rodin Integration

The application uses the Hyper3D Rodin API for 3D model generation. Key endpoints:

- **POST /generate** - Create a 3D model from text/images
- **GET /status/:taskId** - Check generation status
- **GET /download/:modelId** - Download generated model

See the [official documentation](https://hyperhuman.deemos.com/rodin/docs) for full API details.

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   └── [feature]/        # Feature-specific components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Powered by [Hyper3D Rodin API](https://hyperhuman.deemos.com/rodin)
- Built with [v0 by Vercel](https://v0.dev)
- UI components from [Shadcn/UI](https://ui.shadcn.com/)

## Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)
- GitHub: [@ctatedev](https://github.com/ctatedev)

---

<p align="center">Made with ❤️ using AI and modern web technologies</p>
