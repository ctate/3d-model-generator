<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  Transform your ideas into 3D models with AI - powered by Hyper3D Rodin API
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
  <a href="#contributing"><strong>Contributing</strong></a>
</p>
<br/>

## Features

- **Text-to-3D Generation** - Create 3D models from natural language descriptions
- **Image-to-3D Generation** - Upload reference images to guide model creation
- **Real-time 3D Preview** - Interactive viewer powered by Three.js
- **Multiple Export Formats** - Download in GLB, USDZ, FBX, OBJ, or STL
- **Quality Controls** - Adjust generation settings for optimal results
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Advanced Options** - Fine-tune generation parameters for precise control

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Hyper3D Rodin API key ([get one here](https://hyperhuman.deemos.com/))

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
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

   Add your Hyper3D Rodin API key to `.env.local`:
   ```env
   NEXT_PUBLIC_RODIN_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Usage

### Creating a 3D Model

1. **Enter a prompt** - Describe the 3D model you want to create (e.g., "a wooden chair with armrests")
2. **Upload images** (optional) - Add reference images to guide the generation process
3. **Configure settings**:
   - **Quality**: Choose between draft, standard, or high quality
   - **Format**: Select your preferred export format (GLB, USDZ, FBX, OBJ, STL)
   - **Advanced options**: Adjust parameters like topology, texture resolution, etc.
4. **Generate** - Click the submit button and wait for the AI to create your model
5. **Preview & Download** - View your model in the 3D viewer and download when ready

### Tips for Best Results

- Be specific in your text prompts (include details about shape, color, style, materials)
- Use clear, well-lit reference images
- Start with standard quality for faster iteration, then use high quality for final renders
- GLB format is recommended for web use, USDZ for AR experiences

## Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19](https://react.dev/) - Latest React with concurrent features
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: [Shadcn/UI](https://ui.shadcn.com/) - Accessible component library
- **3D Rendering**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)

### Backend & APIs
- **3D Generation**: [Hyper3D Rodin API](https://hyperhuman.deemos.com/) - AI-powered 3D model generation
- **Form Handling**: React Hook Form + Zod for validation

### Development
- **Language**: TypeScript
- **Package Manager**: npm/yarn
- **Linting**: ESLint

## Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   └── ...             # Custom components
├── lib/                # Utility functions and helpers
├── public/             # Static assets
└── styles/             # Global styles
```

## API Configuration

This application uses the Hyper3D Rodin API for 3D model generation. To use the API:

1. Sign up at [hyperhuman.deemos.com](https://hyperhuman.deemos.com/)
2. Generate an API key from your dashboard
3. Add the key to your `.env.local` file
4. The API is called server-side to keep your key secure

For more information, see the [Hyper3D Rodin API documentation](https://hyperhuman.deemos.com/docs).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the MIT License.

## Author

Created by Chris Tate ([@ctatedev](https://x.com/ctatedev))

## Acknowledgments

- Powered by [Hyper3D Rodin API](https://hyperhuman.deemos.com/)
- Built with [v0](https://v0.dev/) by Vercel
- UI components from [Shadcn/UI](https://ui.shadcn.com/)
