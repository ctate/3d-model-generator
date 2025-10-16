<div align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  </a>

  <h1>🎨 3D Model Generator</h1>
  
  <p>
    <strong>Transform your ideas into 3D reality with AI</strong>
  </p>
  
  <p>
    An advanced 3D model generation application powered by Hyper3D Rodin API.<br/>
    Create stunning 3D models from text prompts or images in seconds.
  </p>

  <p>
    <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
    </a>
  </p>

  <p>
    <a href="#-features"><strong>Features</strong></a> •
    <a href="#-getting-started"><strong>Getting Started</strong></a> •
    <a href="#-usage"><strong>Usage</strong></a> •
    <a href="#-tech-stack"><strong>Tech Stack</strong></a> •
    <a href="#-deployment"><strong>Deployment</strong></a> •
    <a href="#-contributing"><strong>Contributing</strong></a> •
    <a href="#-license"><strong>License</strong></a>
  </p>
</div>

<br/>

## ✨ Features

### Core Functionality
- 🎯 **Text-to-3D Generation** - Create 3D models from natural language descriptions
- 🖼️ **Image-to-3D Generation** - Transform 2D images into 3D models
- 👁️ **Real-time 3D Preview** - Interactive visualization powered by Three.js
- ⚡ **Fast Processing** - Leverages Hyper3D Rodin's cutting-edge AI technology

### Export Options
- 📦 Multiple file format support:
  - **GLB** - Optimized for web and AR
  - **USDZ** - Native iOS AR support
  - **FBX** - Industry-standard 3D interchange
  - **OBJ** - Universal 3D format
  - **STL** - 3D printing ready

### Customization
- 🎚️ **Quality Settings** - Choose between different quality levels
- 🔧 **Advanced Options** - Fine-tune generation parameters
- 🎨 **Responsive Design** - Seamless experience on desktop and mobile
- 🌓 **Theme Support** - Built-in dark/light mode

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm, npm, or yarn package manager
- Hyper3D Rodin API key ([Get one here](https://hyperhuman.deemos.com/rodin))

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
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Creating a 3D Model

1. **Text-to-3D**
   - Enter a descriptive prompt (e.g., "a cute cartoon robot with big eyes")
   - Optionally upload reference images
   - Click "Generate" and wait for processing

2. **Image-to-3D**
   - Upload one or more reference images
   - Add an optional text prompt for guidance
   - Adjust settings if needed
   - Generate your model

3. **Customize Settings**
   - Click the options button to access advanced settings
   - Adjust quality, format, and generation parameters
   - Preview changes in real-time

4. **Download Your Model**
   - Once generation is complete, preview your model
   - Select your preferred format
   - Download and use in your projects

### Tips for Best Results

- 📝 **Be descriptive** - More details lead to better results
- 🖼️ **Use clear images** - High-quality reference images work best
- ⚙️ **Experiment** - Try different quality settings and parameters
- 🔄 **Iterate** - Generate multiple variations to find the perfect model

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Shadcn/ui](https://ui.shadcn.com/)** - Beautiful component library

### 3D Rendering
- **[Three.js](https://threejs.org/)** - WebGL 3D library
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for react-three-fiber

### Form & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form management
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### API
- **[Hyper3D Rodin API](https://hyperhuman.deemos.com/rodin)** - AI-powered 3D generation

## 📁 Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   ├── download/     # Model download endpoint
│   │   ├── proxy-download/ # Proxy for external downloads
│   │   ├── rodin/        # Rodin API integration
│   │   └── status/       # Generation status checking
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # Shadcn UI components
│   ├── form.tsx          # Main form component
│   ├── model-viewer.tsx  # 3D model viewer
│   ├── rodin.tsx         # Main Rodin component
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/
│   ├── api-service.ts    # API service layer
│   ├── form-schema.ts    # Form validation schemas
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## 🌐 Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/3d-model-generator)

1. Click the button above or visit [vercel.com/new](https://vercel.com/new)
2. Import your repository
3. Add your `RODIN_API_KEY` environment variable
4. Deploy!

### Other Platforms

This app can also be deployed to:
- **Netlify** - Configure environment variables and build settings
- **AWS Amplify** - Use the Next.js SSR template
- **Self-hosted** - Run `pnpm build` and `pnpm start`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)
- GitHub: [@ctatedev](https://github.com/ctatedev)

## 🙏 Acknowledgments

- [Hyper3D Rodin](https://hyperhuman.deemos.com/rodin) for the amazing 3D generation API
- [v0.dev](https://v0.dev/) for the initial project scaffolding
- [Vercel](https://vercel.com) for hosting and deployment platform
- The open-source community for the amazing tools and libraries

---

<div align="center">
  <p>Built with ❤️ using Next.js and Three.js</p>
  <p>
    <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">View Demo</a> •
    <a href="https://github.com/yourusername/3d-model-generator/issues">Report Bug</a> •
    <a href="https://github.com/yourusername/3d-model-generator/issues">Request Feature</a>
  </p>
</div>
