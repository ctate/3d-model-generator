<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  <strong>Transform text and images into stunning 3D models with AI</strong>
  <br />
  Powered by Hyper3D Rodin API
</p>

<p align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-getting-started"><strong>Getting Started</strong></a> ·
  <a href="#-usage"><strong>Usage</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-contributing"><strong>Contributing</strong></a>
</p>

<br/>

## ✨ Features

### Core Capabilities
- 🎨 **Text-to-3D Generation** - Describe any object and watch it come to life in 3D
- 🖼️ **Image-to-3D Conversion** - Upload reference images to guide the generation process
- 🔄 **Hybrid Mode** - Combine text prompts with images for more precise results
- 👁️ **Real-time 3D Preview** - Interactive viewer powered by Three.js with orbit controls

### Advanced Options
- 📊 **Quality Settings** - Choose from high, medium, low, or extra-low quality based on your needs
- 📦 **Multiple Export Formats** - Download models in GLB, USDZ, FBX, OBJ, or STL formats
- 🎭 **Material Options** - Select between PBR (Physically Based Rendering) or Shaded materials
- 🧍 **T-Pose Mode** - Generate character models in T-pose for animation workflows
- ⚡ **Hyper Mode** - Enable faster generation with optimized settings
- 🎯 **Quality Tiers** - Regular or Sketch mode depending on your use case

### User Experience
- 📱 **Fully Responsive** - Optimized for both desktop and mobile devices
- 🌓 **Dark Theme** - Modern, eye-friendly interface
- 📈 **Real-time Status Updates** - Track generation progress with live status indicators
- 💾 **Direct Downloads** - One-click download of generated models

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or later
- pnpm (recommended) or npm
- A Hyper3D Rodin API key ([Get one here](https://developer.hyper3d.ai))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/3d-model-generator.git
   cd 3d-model-generator
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   HYPER3D_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
pnpm build
pnpm start
```

## 📖 Usage

### Basic Generation

1. **Enter a text prompt** describing what you want to create:
   ```
   "A red dragon with wings spread"
   "Modern office chair with armrests"
   "Cartoon character of a happy dog"
   ```

2. **(Optional) Upload reference images** to guide the generation

3. **Click "Generate"** and wait for the AI to create your model

4. **Preview** your model in the interactive 3D viewer

5. **Download** in your preferred format

### Advanced Configuration

Click the **"Options"** button to access advanced settings:

- **Condition Mode**: 
  - `concat` - Sequential processing of inputs
  - `fuse` - Blended processing of inputs

- **Quality**: Higher quality = longer generation time
  - `high` - Best quality, slowest
  - `medium` - Balanced (recommended)
  - `low` - Faster generation
  - `extra-low` - Fastest, lower detail

- **Geometry Format**: Export format for your model
  - `GLB` - Standard for web and AR (recommended)
  - `USDZ` - Apple ecosystem (AR Quick Look)
  - `FBX` - Animation and game engines
  - `OBJ` - Universal compatibility
  - `STL` - 3D printing

- **Material**: Rendering style
  - `PBR` - Realistic materials with proper lighting
  - `Shaded` - Simple shaded look

- **Tier**: Generation approach
  - `Regular` - Standard detailed output
  - `Sketch` - Faster, simpler geometry

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Three.js](https://threejs.org/)** - 3D rendering engine
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful Three.js helpers

### UI Components
- **[Shadcn/UI](https://ui.shadcn.com/)** - Accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives
- **[Lucide React](https://lucide.dev/)** - Icon library

### Form Management
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[Zod](https://zod.dev/)** - Schema validation

### API
- **[Hyper3D Rodin API](https://developer.hyper3d.ai)** - AI-powered 3D generation

## 📁 Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   ├── download/     # Model download endpoint
│   │   ├── proxy-download/ # CORS proxy for models
│   │   ├── rodin/        # Rodin API integration
│   │   └── status/       # Job status polling
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # Shadcn UI components
│   ├── form.tsx          # Main form component
│   ├── model-viewer.tsx  # Three.js 3D viewer
│   ├── options-dialog.tsx # Advanced options
│   └── ...               # Other components
├── lib/
│   ├── api-service.ts    # API client functions
│   ├── form-schema.ts    # Zod validation schemas
│   └── utils.ts          # Utility functions
└── hooks/                # Custom React hooks
```

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `HYPER3D_API_KEY` | Your Hyper3D Rodin API key | Yes |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **[Hyper3D](https://hyper3d.ai)** for the amazing Rodin API
- **[v0.dev](https://v0.dev)** for the initial project scaffold
- **[Vercel](https://vercel.com)** for hosting and deployment

## 👤 Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)
- GitHub: [@ctatedev](https://github.com/ctatedev)

## 📚 Resources

- [Hyper3D Official Website](https://hyper3d.ai)
- [Hyper3D API Documentation](https://developer.hyper3d.ai)
- [Next.js Documentation](https://nextjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs)

---

<p align="center">
  Made with ❤️ by Chris Tate
</p>
