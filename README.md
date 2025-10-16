<div align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png" width="100%">
  </a>

  # 🎨 3D Model Generator

  ### Transform text and images into stunning 3D models with AI

  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>

  <br />

  [![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
  [![Three.js](https://img.shields.io/badge/Three.js-latest-black?style=flat-square&logo=three.js)](https://threejs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

  <br />

  [Features](#-features) •
  [Demo](#-demo) •
  [Getting Started](#-getting-started) •
  [Usage](#-usage) •
  [Tech Stack](#-tech-stack) •
  [API Reference](#-api-reference) •
  [Contributing](#-contributing)

</div>

---

## 🌟 Overview

**3D Model Generator** is a cutting-edge web application that leverages the power of AI to transform text descriptions and images into high-quality 3D models. Built with the [Hyper3D Rodin API](https://hyper3d.ai), this tool democratizes 3D content creation, making it accessible to designers, developers, game creators, and hobbyists alike—no 3D modeling expertise required.

### Why Use This?

- ⚡ **Fast Generation**: Create 3D models in minutes, not hours
- 🎯 **No 3D Skills Required**: Simple text or image input
- 🎨 **Professional Quality**: Export-ready models for games, AR/VR, and design
- 📱 **Fully Responsive**: Works seamlessly on desktop and mobile
- 🔧 **Customizable**: Multiple formats, quality settings, and advanced options

---

## ✨ Features

### Core Capabilities

- 🖼️ **Text-to-3D Generation**: Describe your vision in words and watch it materialize in 3D
- 📸 **Image-to-3D Generation**: Upload reference images to guide the AI
- 🔄 **Hybrid Mode**: Combine text prompts with images for precise control
- 👁️ **Real-time Preview**: Interactive 3D viewer powered by Three.js with orbit controls

### Advanced Options

- **Multiple Export Formats**: GLB, USDZ, FBX, OBJ, STL
- **Quality Settings**: Low, Medium, High, Ultra - optimize for speed or quality
- **Material Types**: PBR (Physically Based Rendering) for realistic surfaces
- **Mesh Processing**: 
  - Automatic mesh simplification
  - Quad mesh mode for better topology
  - Mesh smoothing for cleaner surfaces
- **T-Pose Option**: Perfect for character models and animation
- **Generation Tiers**: Regular and Premium quality tiers

### User Experience

- 🎯 **Intuitive Interface**: Clean, modern UI with minimal learning curve
- 📊 **Real-time Status Updates**: Track generation progress with live status indicators
- 💾 **Direct Downloads**: One-click download of generated models
- 🌓 **Dark Mode**: Sleek dark interface optimized for creativity
- 📱 **Mobile Optimized**: Touch-friendly controls and responsive layout

---

## 🎬 Demo

<div align="center">
  
**Try it live:** [3D Model Generator Demo](https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w)

</div>

### Example Generations

| Prompt | Preview | Format |
|--------|---------|--------|
| "A cute robotic cat" | 🤖 | GLB |
| "Medieval fantasy sword" | ⚔️ | FBX |
| "Modern office chair" | 🪑 | OBJ |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **pnpm** ([Install](https://pnpm.io/installation)) or npm/yarn

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
# or
yarn install
```

3. **Configure environment variables** (Optional)

The app uses a public API key by default. For production, create a `.env.local` file:

```env
# Optional: Add your own Hyper3D API key
NEXT_PUBLIC_HYPER3D_API_KEY=your_api_key_here
```

4. **Run the development server**

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📖 Usage

### Basic Workflow

1. **Enter a Text Prompt**
   - Describe the 3D model you want to create
   - Example: "A low-poly tree with autumn colors"

2. **Upload Images (Optional)**
   - Click the image upload area
   - Add reference images to guide the generation
   - Supports multiple images

3. **Configure Settings**
   - Click the settings icon to open advanced options
   - Adjust quality, format, and other parameters
   - See [Configuration Options](#configuration-options) below

4. **Generate**
   - Click "Generate Model" or press Enter
   - Watch the real-time status updates
   - Generation typically takes 1-3 minutes

5. **Preview & Download**
   - Interact with the 3D preview (rotate, zoom, pan)
   - Click "Download" to save the model
   - Models are ready for immediate use in your projects

### Configuration Options

| Option | Values | Description |
|--------|--------|-------------|
| **Quality** | Low, Medium, High, Ultra | Balance between speed and detail |
| **Format** | GLB, USDZ, FBX, OBJ, STL | Export format for different use cases |
| **Material** | PBR | Physically based rendering materials |
| **Condition Mode** | Concat | How to combine text and image inputs |
| **Use Hyper** | true/false | Enable enhanced processing |
| **T-Pose** | true/false | Generate characters in T-pose |
| **Tier** | Regular, Premium | Quality tier for generation |

### Tips for Best Results

- 📝 **Be Descriptive**: Include details about shape, style, and materials
- 🖼️ **Use Clear References**: Upload high-quality, well-lit reference images
- ⚖️ **Balance Quality**: Start with Medium quality for faster iterations
- 🎯 **Iterate**: Refine your prompts based on results
- 📐 **Consider Format**: Choose the format that matches your target platform

---

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15.2](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### 3D Graphics
- **[Three.js](https://threejs.org/)** - WebGL-based 3D rendering
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for R3F

### UI Components
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/UI](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Additional Libraries
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[class-variance-authority](https://cva.style/)** - Component variants

---

## 🔌 API Reference

### Hyper3D Rodin API

This application integrates with the [Hyper3D Rodin API](https://developer.hyper3d.ai) for 3D model generation.

#### Endpoints Used

**Generate 3D Model**
```
POST /api/rodin
```

**Check Generation Status**
```
GET /api/status?key={subscription_key}
```

**Download Model**
```
GET /api/download?uuid={task_uuid}
```

#### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prompt` | string | No* | Text description of the 3D model |
| `images` | File[] | No* | Reference images (max 4) |
| `quality` | string | Yes | low, medium, high, ultra |
| `geometry_file_format` | string | Yes | glb, usdz, fbx, obj, stl |
| `material` | string | Yes | PBR |
| `condition_mode` | string | Yes | concat |
| `tier` | string | Yes | Regular, Premium |

\* Either `prompt` or `images` (or both) must be provided

#### Response Format

```typescript
{
  uuid: string;
  jobs: {
    subscription_key: string;
  };
}
```

For detailed API documentation, visit [developer.hyper3d.ai](https://developer.hyper3d.ai).

---

## 📁 Project Structure

```
3d-model-generator/
├── app/
│   ├── api/                    # API routes
│   │   ├── rodin/             # Rodin API proxy
│   │   ├── status/            # Status checking
│   │   ├── download/          # Model download
│   │   └── proxy-download/    # CORS proxy
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── ui/                    # Shadcn UI components
│   ├── rodin.tsx              # Main app component
│   ├── form.tsx               # Input form
│   ├── model-viewer.tsx       # 3D viewer
│   ├── options-dialog.tsx     # Settings dialog
│   ├── status-indicator.tsx   # Status display
│   └── ...                    # Other components
├── hooks/
│   ├── use-media-query.ts     # Responsive hooks
│   ├── use-mobile.tsx         # Mobile detection
│   └── use-toast.ts           # Toast notifications
├── lib/
│   ├── api-service.ts         # API client functions
│   ├── form-schema.ts         # Zod validation schemas
│   └── utils.ts               # Utility functions
├── public/                    # Static assets
├── styles/                    # Additional styles
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── tailwind.config.ts         # Tailwind config
└── next.config.mjs            # Next.js config
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Write clean, documented TypeScript code
- Follow the existing code style and conventions
- Test your changes on both desktop and mobile
- Update documentation for new features
- Keep commits atomic and well-described

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **[Hyper3D](https://hyper3d.ai)** - For providing the incredible Rodin API
- **[v0.dev](https://v0.dev)** - For the initial project scaffolding
- **[Vercel](https://vercel.com)** - For seamless deployment platform
- The open-source community for amazing tools and libraries

---

## 👤 Author

**Chris Tate**

- Twitter: [@ctatedev](https://x.com/ctatedev)
- GitHub: [@ctatedev](https://github.com/ctatedev)

---

## 📞 Support

- 📧 **Issues**: [GitHub Issues](https://github.com/yourusername/3d-model-generator/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/3d-model-generator/discussions)
- 🌐 **API Support**: [Hyper3D Documentation](https://developer.hyper3d.ai)

---

<div align="center">

### ⭐ If you find this project useful, please consider giving it a star!

Made with ❤️ by [Chris Tate](https://x.com/ctatedev)

[Back to Top](#-3d-model-generator)

</div>
