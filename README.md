<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  <strong>Transform your ideas into 3D models using AI</strong>
  <br/>
  An AI-powered application that creates stunning 3D models from text prompts or images using the Hyper3D Rodin API
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
  <a href="#-project-structure"><strong>Project Structure</strong></a> ·
  <a href="#-deployment"><strong>Deployment</strong></a>
</p>

<br/>

## ✨ Features

- **Text-to-3D Generation** - Transform text descriptions into detailed 3D models
- **Image-to-3D Generation** - Upload reference images to guide the AI generation process
- **Multiple Export Formats** - Download models in GLB, USDZ, FBX, OBJ, or STL formats
- **Adjustable Quality Settings** - Fine-tune output quality based on your needs
- **Real-time 3D Preview** - Interactive 3D viewer powered by Three.js
- **Advanced Options** - Customize generation parameters for precise control
- **Responsive Design** - Optimized for desktop and mobile devices
- **Dark Mode Support** - Modern UI with theme switching capabilities

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.x or higher)
- **pnpm** (recommended) or npm/yarn

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
   # or
   yarn install
   ```

3. **Configure API (Optional)**
   
   The project uses a public API key by default. For production use or rate-limited scenarios, you can update the API key in `app/api/rodin/route.ts`:
   
   ```typescript
   const API_KEY = "your-api-key-here"
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

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## 📖 Usage

### Creating Your First 3D Model

1. **Enter a text prompt** describing the 3D model you want to create
   - Example: "A medieval castle with towers and walls"
   
2. **Upload reference images** (optional)
   - Drag and drop or click to upload images that guide the generation
   
3. **Adjust settings** via the options dialog
   - Select output format (GLB, USDZ, FBX, OBJ, STL)
   - Choose quality level
   - Configure advanced parameters
   
4. **Generate your model**
   - Click the submit button to start the AI generation process
   - Monitor progress in real-time
   
5. **Preview and download**
   - View your generated model in the interactive 3D viewer
   - Rotate, zoom, and inspect the model
   - Download in your preferred format

## 🛠 Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components

### 3D Rendering
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for react-three-fiber

### Form & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form library
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### API
- **[Hyper3D Rodin API](https://hyperhuman.deemos.com/)** - AI-powered 3D model generation

## 📁 Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   ├── rodin/        # Hyper3D API integration
│   │   ├── status/       # Model generation status
│   │   ├── download/     # Model download handler
│   │   └── proxy-download/ # Download proxy
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── rodin.tsx         # Main Rodin component
│   ├── form.tsx          # Generation form
│   ├── model-viewer.tsx  # 3D model viewer
│   ├── options-dialog.tsx # Settings dialog
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/
│   ├── api-service.ts    # API client functions
│   ├── form-schema.ts    # Zod validation schemas
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🌐 Deployment

### Deploy to Vercel

The easiest way to deploy this application is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy!

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- **Netlify** - Configure build command: `pnpm build`, publish directory: `.next`
- **Railway** - Automatically detected
- **Render** - Configure build command: `pnpm build`, start command: `pnpm start`
- **AWS/GCP/Azure** - Use Docker or platform-specific deployment methods

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)

## 🙏 Acknowledgments

- Built with [v0](https://v0.dev) by Vercel
- Powered by [Hyper3D Rodin API](https://hyperhuman.deemos.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

---

<p align="center">Made with ❤️ by Chris Tate</p>
