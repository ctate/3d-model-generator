<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  Transform text and images into stunning 3D models with AI-powered generation.
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
  <a href="#-configuration"><strong>Configuration</strong></a> ·
  <a href="#-deployment"><strong>Deployment</strong></a>
</p>
<br/>

## 📖 About

**3D Model Generator** is a cutting-edge web application that harnesses the power of AI to democratize 3D content creation. Built on the [Hyper3D Rodin API](https://hyperhuman.deemos.com/), this tool enables anyone—from hobbyists to professionals—to generate high-quality 3D models from simple text descriptions or reference images.

Whether you're a game developer, 3D artist, product designer, or creative enthusiast, this tool streamlines your workflow by eliminating the need for complex 3D modeling software and technical expertise.

## ✨ Features

### Generation Modes
- **🎨 Text-to-3D**: Create 3D models from natural language descriptions
- **🖼️ Image-to-3D**: Transform 2D images into 3D models
- **🔄 Hybrid Mode**: Combine text prompts with reference images for precise results

### Customization Options
- **Quality Settings**: Choose from extra-low, low, medium, or high quality
- **Multiple Export Formats**: GLB, USDZ, FBX, OBJ, STL
- **Material Types**: PBR (Physically Based Rendering) or Shaded
- **Tier Selection**: Regular or Sketch mode
- **Advanced Options**: 
  - T-Pose generation for character models
  - Image fusion or concatenation modes
  - Hyper quality mode for enhanced results

### User Experience
- **Real-time 3D Preview**: Interactive model viewer with Three.js
- **Progress Tracking**: Live status updates during generation
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes for comfortable viewing
- **One-Click Download**: Easy export of generated models

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm
- A Hyper3D Rodin API key (or use the public demo key)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables** (optional)
   
   Create a `.env.local` file in the root directory:
   ```env
   # Optional: Add your own API key
   RODIN_API_KEY=your_api_key_here
   ```
   
   > **Note**: The app includes a public demo API key for testing. For production use, obtain your own API key from [Hyper3D](https://hyperhuman.deemos.com/).

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Usage

### Basic Workflow

1. **Input Your Idea**
   - Type a text description in the prompt field (e.g., "a red sports car")
   - Or upload one or more reference images
   - Or combine both for best results

2. **Configure Settings** (Optional)
   - Click "Advanced Options" to access additional settings
   - Select output format (GLB, USDZ, FBX, OBJ, STL)
   - Adjust quality level based on your needs
   - Choose material type (PBR or Shaded)

3. **Generate Model**
   - Click the submit button to start generation
   - Monitor progress through the status indicator
   - Generation typically takes 1-5 minutes depending on settings

4. **Preview & Download**
   - View your model in the interactive 3D viewer
   - Rotate, zoom, and inspect from all angles
   - Download the model in your selected format

### Tips for Best Results

- **Detailed Prompts**: More specific descriptions yield better results
  - ❌ "a chair"
  - ✅ "a modern leather office chair with chrome wheels"

- **Quality Images**: Use clear, well-lit reference images with the subject clearly visible

- **Combine Methods**: Use both text and images for maximum control over the output

- **Experiment with Settings**: Different quality levels and modes produce varying results

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Accessible component library

### 3D Visualization
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for R3F

### Form & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Form state management
- **[Zod](https://zod.dev/)** - Schema validation

### Styling & UI
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon set
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### API Integration
- **[Hyper3D Rodin API](https://hyperhuman.deemos.com/)** - AI-powered 3D generation

## ⚙️ Configuration

### API Routes

The application uses Next.js API routes to proxy requests to the Hyper3D Rodin API:

- `/api/rodin` - Submit generation jobs
- `/api/status` - Check job status
- `/api/download` - Download generated models
- `/api/proxy-download` - Proxy model file downloads

### Customizing the API Key

To use your own Hyper3D API key, modify `app/api/rodin/route.ts`:

```typescript
const API_KEY = process.env.RODIN_API_KEY || "your_default_key"
```

Then add your key to `.env.local`:

```env
RODIN_API_KEY=your_actual_api_key
```

### Modifying Generation Settings

Default form values can be customized in `lib/form-schema.ts`:

```typescript
export const formSchema = z.object({
  quality: z.enum(["high", "medium", "low", "extra-low"]).default("medium"),
  geometry_file_format: z.enum(["glb", "usdz", "fbx", "obj", "stl"]).default("glb"),
  // ... other settings
})
```

## 📦 Project Structure

```
├── app/
│   ├── api/              # API routes for Rodin integration
│   │   ├── download/     # Model download endpoint
│   │   ├── proxy-download/  # File proxy endpoint
│   │   ├── rodin/        # Job submission endpoint
│   │   └── status/       # Status check endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── rodin.tsx         # Main application component
│   ├── form.tsx          # Generation form
│   ├── model-viewer.tsx  # 3D model display
│   └── ...               # Other components
├── lib/
│   ├── api-service.ts    # API client functions
│   ├── form-schema.ts    # Zod validation schemas
│   └── utils.ts          # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables (if using custom API key)
4. Deploy!

### Build for Production

```bash
pnpm build
pnpm start
```

### Environment Variables for Production

```env
RODIN_API_KEY=your_production_api_key
NODE_ENV=production
```

## 🐛 Troubleshooting

### Generation Fails

- **Check API Key**: Ensure your API key is valid and has sufficient credits
- **Verify Input**: Make sure you've provided either a text prompt or images
- **Image Format**: Use common formats (JPG, PNG, WebP) for uploads
- **File Size**: Keep images under 10MB for best performance

### Model Won't Display

- **Browser Compatibility**: Use a modern browser with WebGL support
- **Console Errors**: Check browser console for detailed error messages
- **Format Issues**: Try downloading in a different format (GLB is most compatible)

### Performance Issues

- **Lower Quality**: Use "medium" or "low" quality settings for faster generation
- **Clear Cache**: Clear browser cache and reload the application
- **Network**: Ensure stable internet connection for API requests

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is available for personal and commercial use. Please check the Hyper3D Rodin API [terms of service](https://hyperhuman.deemos.com/) for API usage restrictions.

## 🙏 Acknowledgments

- [Hyper3D](https://hyperhuman.deemos.com/) for the powerful Rodin API
- [v0.dev](https://v0.dev/) for the initial design inspiration
- [shadcn](https://twitter.com/shadcn) for the amazing UI component library

## 👤 Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)
- Built with [v0.dev](https://v0.dev/)

---

<p align="center">
  Made with ❤️ using Next.js and Hyper3D Rodin API
</p>
