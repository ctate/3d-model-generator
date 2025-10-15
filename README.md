<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  <strong>AI-powered 3D model generation from text and images</strong>
</p>

<p align="center">
  Create stunning 3D models in seconds using the power of Hyper3D Rodin API
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
  <a href="#-deployment"><strong>Deployment</strong></a> ·
  <a href="#-contributing"><strong>Contributing</strong></a>
</p>
<br/>

## 🌟 Features

### Core Functionality
- **Text-to-3D Generation** - Describe your vision and watch it come to life in 3D
- **Image-to-3D Generation** - Upload reference images to guide model creation
- **Real-time 3D Preview** - Interactive viewer powered by Three.js and React Three Fiber
- **Multiple Export Formats** - Support for GLB, USDZ, FBX, OBJ, and STL formats

### Advanced Options
- **Quality Settings** - Choose from low, medium, high, or ultra quality
- **Material Types** - Select between PBR and Lite materials
- **Pose Control** - Optional T-pose generation for character models
- **Condition Modes** - Concat or Average modes for multi-image processing
- **Hyper Mode** - Enhanced generation using advanced algorithms

### User Experience
- **Responsive Design** - Optimized for both desktop and mobile devices
- **Dark Mode UI** - Beautiful, modern interface with smooth animations
- **Job Status Tracking** - Monitor generation progress in real-time
- **Easy Downloads** - One-click download of generated models

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **pnpm** (recommended) or npm
- **Hyper3D Rodin API Key** - Get yours at [Hyper3D](https://www.hyper3d.ai/)

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

## 📖 Usage

### Basic Workflow

1. **Enter a Prompt**
   - Type a detailed description of the 3D model you want to create
   - Example: "A red dragon with scales and wings"

2. **Upload Images (Optional)**
   - Click the upload area to add reference images
   - Supports multiple images for better context

3. **Configure Options**
   - Click the settings icon to access advanced options
   - Adjust quality, format, and other parameters
   - Choose your preferred export format

4. **Generate Model**
   - Click the submit button to start generation
   - Monitor the status as the model is being created
   - Generation typically takes 1-5 minutes depending on quality settings

5. **View and Download**
   - Preview your model in the interactive 3D viewer
   - Rotate, zoom, and inspect from all angles
   - Download in your selected format

### Available Export Formats

| Format | Best For | File Size |
|--------|----------|-----------|
| **GLB** | Web applications, AR/VR | Small |
| **USDZ** | iOS AR experiences | Medium |
| **FBX** | Animation, game engines | Medium |
| **OBJ** | 3D modeling software | Small |
| **STL** | 3D printing | Small |

### Quality Settings

- **Low** - Fast generation, basic detail (recommended for testing)
- **Medium** - Balanced quality and speed (recommended for most use cases)
- **High** - Detailed models, longer generation time
- **Ultra** - Maximum detail, longest generation time (premium feature)

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Accessible component library

### 3D Rendering
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[React Three Drei](https://github.com/pmndrs/drei)** - Helper components for R3F

### Form & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### API Integration
- **[Hyper3D Rodin API](https://www.hyper3d.ai/)** - AI-powered 3D generation

## 📁 Project Structure

```
.
├── app/
│   ├── api/              # API routes
│   │   ├── rodin/        # Model generation endpoint
│   │   ├── status/       # Job status checking
│   │   └── download/     # Model download endpoint
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── rodin.tsx         # Main application component
│   ├── form.tsx          # Input form component
│   ├── model-viewer.tsx  # 3D model viewer
│   └── ...               # Other components
├── lib/
│   ├── api-service.ts    # API client functions
│   ├── form-schema.ts    # Form validation schemas
│   └── utils.ts          # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Global styles
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<repository-url>)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your `HYPER3D_API_KEY` environment variable
4. Deploy!

### Manual Deployment

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

### Environment Variables

Make sure to set the following environment variables in your deployment platform:

```env
HYPER3D_API_KEY=your_api_key_here
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **[Hyper3D](https://www.hyper3d.ai/)** - For providing the Rodin API
- **[v0.dev](https://v0.dev/)** - For the initial project scaffolding
- **[Vercel](https://vercel.com/)** - For hosting and deployment

## 👤 Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)
- GitHub: [Your GitHub Profile]

## 🐛 Issues & Support

Found a bug or have a feature request? [Open an issue](../../issues) on GitHub.

For questions or support, reach out on [Twitter](https://x.com/ctatedev).

---

<p align="center">Made with ❤️ by <a href="https://x.com/ctatedev">Chris Tate</a></p>
