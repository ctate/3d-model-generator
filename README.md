<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  An AI-powered 3D model generation application powered by Hyper3D Rodin API. Transform text prompts and images into high-quality 3D models instantly.
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
  <a href="#deployment"><strong>Deployment</strong></a>
</p>
<br/>

## Features

**AI-Powered Generation**
- 🎨 **Text-to-3D**: Generate 3D models from descriptive text prompts
- 🖼️ **Image-to-3D**: Convert 2D images into 3D models with AI
- ⚡ **Real-time Preview**: Interactive 3D visualization with Three.js
- 🎯 **Quality Control**: Adjustable quality settings for optimal results

**Export & Compatibility**
- 📦 Multiple format support: GLB, USDZ, FBX, OBJ, STL
- 💾 Direct download with progress tracking
- 🔄 Batch processing support

**User Experience**
- 📱 Responsive design for desktop and mobile
- 🎛️ Advanced options for fine-tuning generation
- 🌙 Modern, intuitive UI with Shadcn/UI components
- ⏱️ Status tracking for generation progress

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm, npm, or yarn package manager
- Hyper3D Rodin API key ([Get one here](https://hyperhuman.deemos.com/rodin))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vercel/sandbox
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

## Usage

### Basic Generation

1. **Enter a prompt**: Describe the 3D model you want to create in natural language
   - Example: "A medieval castle with stone walls and towers"

2. **Upload images** (optional): Add reference images to guide the generation
   - Supports common image formats (JPG, PNG, etc.)
   - Multiple images can be uploaded for better context

3. **Adjust settings**: 
   - **Quality**: Choose between fast preview or high-quality output
   - **Format**: Select your preferred export format (GLB, USDZ, FBX, OBJ, STL)
   - **Advanced options**: Fine-tune generation parameters

4. **Generate**: Click the submit button to start the AI generation process

5. **Preview & Download**: View your model in the 3D viewer and download when ready

### API Endpoints

The application exposes several API endpoints:

- `POST /api/rodin` - Submit generation requests to Hyper3D Rodin
- `GET /api/status` - Check generation status
- `GET /api/download` - Download generated models
- `GET /api/proxy-download` - Proxy download with progress tracking

## Tech Stack

**Framework & Core**
- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

**3D Rendering**
- [Three.js](https://threejs.org/) - 3D graphics library
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) - Useful helpers for react-three-fiber

**Styling & UI**
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn/UI](https://ui.shadcn.com/) - Re-usable component library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide React](https://lucide.dev/) - Icon library

**Forms & Validation**
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation

**API Integration**
- [Hyper3D Rodin API](https://hyperhuman.deemos.com/rodin) - AI 3D model generation

## Project Structure

```
├── app/
│   ├── api/           # API routes
│   │   ├── rodin/     # Rodin API integration
│   │   ├── status/    # Status checking
│   │   └── download/  # File downloads
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/        # React components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── public/           # Static assets
└── styles/           # Global styles
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this application is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<repository-url>)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Add your environment variables:
   - `RODIN_API_KEY`
4. Deploy!

### Environment Variables

Make sure to set the following environment variables in your deployment platform:

| Variable | Description | Required |
|----------|-------------|----------|
| `RODIN_API_KEY` | Your Hyper3D Rodin API key | Yes |

## Development

### Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

### Code Quality

This project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier-compatible formatting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created by Chris Tate ([@ctatedev](https://x.com/ctatedev))

## Acknowledgments

- [Hyper3D](https://hyperhuman.deemos.com/) for the Rodin API
- [Vercel](https://vercel.com/) for hosting and deployment
- [v0.dev](https://v0.dev/) for the initial project structure
