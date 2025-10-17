<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  Transform your ideas into 3D reality with AI-powered model generation
</p>

<p align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#overview"><strong>Overview</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#usage"><strong>Usage</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#api-configuration"><strong>API Configuration</strong></a> ·
  <a href="#deployment"><strong>Deployment</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>
<br/>

## Overview

3D Model Generator is a modern web application that harnesses the power of AI to democratize 3D content creation. Whether you're a game developer, product designer, educator, or 3D printing enthusiast, this tool lets you create professional 3D models from simple text descriptions or reference images—no 3D modeling expertise required.

Built with Next.js and powered by the Hyper3D Rodin API, the application provides an intuitive interface for generating, previewing, and downloading 3D assets in multiple industry-standard formats.

## Features

### Core Capabilities
- **Text-to-3D Generation**: Create 3D models from natural language descriptions
- **Image-to-3D Generation**: Upload reference images to guide model creation
- **Real-time 3D Preview**: Interactive Three.js-based viewer with orbit controls
- **Multi-format Export**: Download models in GLB, USDZ, FBX, OBJ, or STL formats

### Advanced Options
- **Quality Settings**: Choose from draft, standard, or high-quality output
- **Customizable Parameters**: Fine-tune generation settings for optimal results
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Modern UI**: Clean, accessible interface built with Shadcn/UI components

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm, npm, or yarn package manager
- Hyper3D Rodin API key ([Get one here](https://hyperhuman.deemos.com/))

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
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_RODIN_API_KEY=your_api_key_here
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

## Usage

### Basic Workflow

1. **Describe Your Model**
   - Enter a detailed text prompt describing the 3D model you want to create
   - Example: "A medieval wooden treasure chest with iron reinforcements"

2. **Add Reference Images** (Optional)
   - Upload one or more reference images to guide the generation
   - Supports common image formats (PNG, JPG, WEBP)

3. **Configure Settings**
   - Select your desired output quality level
   - Choose your preferred file format
   - Adjust advanced parameters if needed

4. **Generate**
   - Click the generate button and wait for processing
   - Generation typically takes 30-90 seconds depending on quality settings

5. **Preview & Download**
   - View your model in the interactive 3D preview
   - Rotate, zoom, and inspect from all angles
   - Download in your selected format when satisfied

### Tips for Best Results

- Be specific and descriptive in your text prompts
- Include details about materials, colors, and style
- Use reference images that clearly show the desired form
- Start with draft quality for quick iterations
- Use high quality for final production assets

## Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/) - Radix UI primitives with Tailwind
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **3D Rendering**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) - WebGL rendering
- **3D Helpers**: [@react-three/drei](https://github.com/pmndrs/drei) - Useful Three.js abstractions

### Development
- **Language**: TypeScript
- **Form Handling**: React Hook Form + Zod validation
- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js configuration

### API
- **3D Generation**: [Hyper3D Rodin API](https://hyperhuman.deemos.com/) - AI-powered 3D model generation

## API Configuration

The application uses the Hyper3D Rodin API for 3D model generation. You'll need to:

1. Sign up for a Rodin API key at [hyperhuman.deemos.com](https://hyperhuman.deemos.com/)
2. Add your API key to `.env.local` as `NEXT_PUBLIC_RODIN_API_KEY`
3. Review the [Rodin API documentation](https://hyperhuman.deemos.com/rodin) for rate limits and usage guidelines

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_RODIN_API_KEY` | Your Hyper3D Rodin API key | Yes |

## Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js application is using the [Vercel Platform](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/3d-model-generator)

1. Click the "Deploy" button above
2. Connect your GitHub repository
3. Add your `NEXT_PUBLIC_RODIN_API_KEY` environment variable
4. Deploy

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:

- **Netlify**: Use the Next.js build plugin
- **Railway**: Connect your repo and add environment variables
- **Docker**: Use the included Next.js Docker setup

See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # Shadcn/UI components
│   └── ...             # Custom components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## Contributing

Contributions are welcome! If you'd like to improve the 3D Model Generator:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [v0.dev](https://v0.dev) by Vercel
- 3D generation powered by [Hyper3D Rodin](https://hyperhuman.deemos.com/)
- UI components from [Shadcn/UI](https://ui.shadcn.com/)

## Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)
- GitHub: [@ctatedev](https://github.com/ctatedev)

---

<p align="center">Made with ❤️ by <a href="https://x.com/ctatedev">Chris Tate</a></p>
