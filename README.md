<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  Transform text and images into stunning 3D models with AI
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
  <a href="#deployment"><strong>Deployment</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
</p>
<br/>

## Features

### Core Capabilities
- **Text-to-3D Generation**: Create 3D models from natural language descriptions
- **Image-to-3D Generation**: Convert 2D images into 3D models
- **Real-time 3D Preview**: Interactive model viewer powered by Three.js
- **Multi-format Export**: Download models in GLB, USDZ, FBX, OBJ, or STL formats

### Customization Options
- **Quality Settings**: Choose between different quality levels for faster generation or higher detail
- **Advanced Parameters**: Fine-tune generation with custom settings
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**
- **Hyper3D Rodin API Key** ([Get one here](https://hyperhuman.deemos.com/rodin))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/3d-model-generator.git
cd 3d-model-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
# Create a .env.local file in the root directory
cp .env.example .env.local
```

Add your Hyper3D Rodin API key:
```env
NEXT_PUBLIC_RODIN_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Basic Workflow

1. **Enter a Prompt**
   - Type a detailed description of the 3D model you want to create
   - Example: "A low-poly medieval castle with turrets and a drawbridge"

2. **Upload Reference Images** (Optional)
   - Add one or more images to guide the generation
   - Supports common image formats (PNG, JPG, WEBP)

3. **Configure Settings**
   - Select output format (GLB recommended for web use)
   - Adjust quality level based on your needs
   - Toggle advanced options for more control

4. **Generate Model**
   - Click the generate button to start the process
   - Wait for the AI to create your 3D model (typically 30-60 seconds)

5. **Preview & Download**
   - Interact with the 3D preview using mouse/touch controls
   - Download the model in your chosen format
   - Use the model in 3D software, games, or AR experiences

### Tips for Best Results

- **Be specific**: Detailed prompts yield better results
- **Use references**: Images help guide style and structure
- **Start simple**: Try basic shapes before complex models
- **Experiment**: Different settings produce different results

## Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/UI](https://ui.shadcn.com/)** - High-quality React components

### 3D & Graphics
- **[Three.js](https://threejs.org/)** - 3D rendering engine
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[React Three Drei](https://github.com/pmndrs/drei)** - Useful helpers for R3F

### API & Services
- **[Hyper3D Rodin API](https://hyperhuman.deemos.com/rodin)** - AI-powered 3D model generation

### Form & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Form state management
- **[Zod](https://zod.dev/)** - Schema validation

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── page.tsx           # Home page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   └── ...               # Custom components
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Global styles
```

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables

Make sure to set these environment variables in your deployment platform:

```env
NEXT_PUBLIC_RODIN_API_KEY=your_api_key_here
```

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- **Netlify**
- **Railway**
- **AWS Amplify**
- **Digital Ocean App Platform**
- **Render**

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Powered by [Hyper3D Rodin API](https://hyperhuman.deemos.com/rodin)
- Built with [v0](https://v0.dev) by Vercel
- Created by Chris Tate ([@ctatedev](https://x.com/ctatedev))

## Support

If you encounter any issues or have questions:
- Open an issue on [GitHub](https://github.com/yourusername/3d-model-generator/issues)
- Follow [@ctatedev](https://x.com/ctatedev) on X for updates

---

<p align="center">Made with ❤️ by <a href="https://x.com/ctatedev">Chris Tate</a></p>
