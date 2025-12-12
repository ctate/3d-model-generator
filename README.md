<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  Transform your ideas into stunning 3D models with AI-powered generation
</p>

<p align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-getting-started"><strong>Getting Started</strong></a> ·
  <a href="#-how-to-use"><strong>How to Use</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-project-structure"><strong>Project Structure</strong></a> ·
  <a href="#-deployment"><strong>Deployment</strong></a> ·
  <a href="#-contributing"><strong>Contributing</strong></a>
</p>

<br/>

## 🎯 About

**3D Model Generator** is a cutting-edge AI-powered web application that democratizes 3D content creation. Built with Next.js and powered by the Hyper3D Rodin API, it enables anyone to create professional-quality 3D models from simple text descriptions or reference images—no 3D modeling expertise required.

Whether you're a game developer, product designer, educator, or creative enthusiast, this tool streamlines the 3D creation process from hours to minutes.

## ✨ Features

### Core Capabilities
- 🎨 **Text-to-3D Generation** - Create 3D models from natural language descriptions
- 🖼️ **Image-to-3D Generation** - Transform 2D images into 3D models
- 👁️ **Real-time 3D Preview** - Interactive Three.js viewer with orbit controls
- 📦 **Multiple Export Formats** - GLB, USDZ, FBX, OBJ, STL support
- ⚙️ **Quality Controls** - Adjustable generation quality settings
- 🎛️ **Advanced Options** - Fine-tune generation parameters

### User Experience
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🌓 **Dark Mode Support** - Built-in theme switching
- ⚡ **Real-time Progress** - Live status updates during generation
- 🔄 **Auto-polling** - Automatic status checking for long-running tasks
- 💾 **Direct Downloads** - One-click model downloads in your chosen format

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm
- Hyper3D Rodin API key ([Get one here](https://hyperhuman.deemos.com/rodin))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
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
   RODIN_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 📖 How to Use

### Creating Your First 3D Model

1. **Enter a Prompt**
   - Describe the 3D model you want to create
   - Example: "A detailed medieval knight helmet with ornate engravings"

2. **Upload Reference Images** (Optional)
   - Add one or more reference images to guide the generation
   - Supports common image formats (JPEG, PNG, WebP)

3. **Configure Settings**
   - Choose your desired output format (GLB, USDZ, FBX, OBJ, STL)
   - Adjust quality settings (Standard or High)
   - Optionally expand advanced options for fine-tuning

4. **Generate**
   - Click "Generate 3D Model"
   - Monitor real-time progress as your model is created
   - The process typically takes 1-5 minutes

5. **Preview & Download**
   - View your model in the interactive 3D viewer
   - Rotate, zoom, and inspect from all angles
   - Download in your chosen format

### Tips for Best Results

- **Be Specific** - Detailed prompts yield better results
- **Use References** - Images help guide style and proportions
- **Start Simple** - Test with simpler models before complex scenes
- **Iterate** - Refine your prompts based on results

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality component library

### 3D Rendering
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[React Three Drei](https://github.com/pmndrs/drei)** - Useful helpers for R3F

### Form & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### API Integration
- **[Hyper3D Rodin API](https://hyperhuman.deemos.com/rodin)** - AI-powered 3D generation

## 📁 Project Structure

```
3d-model-generator/
├── app/
│   ├── api/                      # API routes
│   │   ├── download/            # Model download endpoint
│   │   ├── proxy-download/      # Proxy for external downloads
│   │   ├── rodin/               # Rodin API integration
│   │   └── status/              # Generation status polling
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── auto-resize-textarea.tsx # Smart textarea component
│   ├── form.tsx                 # Main generation form
│   ├── image-upload-area.tsx    # Image upload interface
│   ├── loading-placeholder.tsx  # Loading states
│   ├── model-viewer.tsx         # 3D model viewer
│   ├── options-dialog.tsx       # Advanced options modal
│   ├── progress-bar.tsx         # Progress indicator
│   ├── rodin.tsx                # Rodin component wrapper
│   ├── scene-setup.tsx          # Three.js scene setup
│   └── status-indicator.tsx     # Status display
├── hooks/                       # Custom React hooks
│   ├── use-media-query.ts      # Responsive breakpoints
│   ├── use-mobile.tsx          # Mobile detection
│   └── use-toast.ts            # Toast notifications
├── lib/
│   ├── api-service.ts          # API client functions
│   ├── form-schema.ts          # Form validation schemas
│   └── utils.ts                # Utility functions
├── public/                      # Static assets
├── styles/                      # Additional styles
└── package.json                # Dependencies
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the "Deploy" button above
2. Connect your GitHub repository
3. Add your `RODIN_API_KEY` environment variable
4. Deploy!

### Manual Deployment

1. Build the application:
   ```bash
   pnpm build
   ```

2. Set environment variables on your hosting platform:
   ```
   RODIN_API_KEY=your_api_key_here
   ```

3. Deploy the `.next` folder to your hosting service

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RODIN_API_KEY` | Your Hyper3D Rodin API key | Yes |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow the existing TypeScript/React patterns
- Use meaningful component and variable names
- Add comments for complex logic
- Ensure all TypeScript types are properly defined

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Hyper3D Rodin](https://hyperhuman.deemos.com/rodin) for the amazing AI 3D generation API
- [v0.dev](https://v0.dev/) for component inspiration and design patterns
- [shadcn](https://twitter.com/shadcn) for the incredible UI component library

## 👨‍💻 Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)

---

<p align="center">Made with ❤️ using Next.js and AI</p>
