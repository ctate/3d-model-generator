<a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
  <img alt="3D Model Generator" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss3-WrQOPkN8S95aSRruDF4fqnOc19oYGy.png">
  <h1 align="center">3D Model Generator</h1>
</a>

<p align="center">
  An AI-powered 3D model generation application built with Next.js and powered by Hyper3D Rodin API.
</p>

<p align="center">
  <a href="https://v0.dev/community/3-d-model-generator-powered-by-hyper3-d-rodin-bTIhXEOJa8w">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#-about"><strong>About</strong></a> ·
  <a href="#-getting-started"><strong>Getting Started</strong></a> ·
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-usage"><strong>Usage</strong></a> ·
  <a href="#-author"><strong>Author</strong></a>
</p>

---

## 📋 About

3D Model Generator is an accessible AI-powered application that lets you create high-quality 3D models from text descriptions or images. Whether you're a designer, developer, or creator, this tool brings your ideas to life without requiring advanced 3D modeling skills.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and pnpm (or npm)
- API key for Hyper3D Rodin (get one at [Hyper3D](https://hyper3d.io))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_API_KEY=your_hyper3d_api_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✨ Features

- **Text-to-3D Generation** - Describe your model in words and watch it come to life
- **Image-to-3D Generation** - Upload reference images to guide model creation
- **Multiple Export Formats** - Download in GLB, USDZ, FBX, OBJ, or STL
- **Quality Control** - Adjustable quality settings to match your needs
- **Real-time Preview** - Visualize your 3D model before downloading
- **Responsive Design** - Seamlessly works on desktop, tablet, and mobile
- **Advanced Customization** - Fine-tune generation parameters for precise results

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 with React 19
- **3D Rendering**: [Three.js](https://threejs.org/) with [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with animations
- **Components**: [Shadcn/UI](https://ui.shadcn.com/) - Radix UI primitives
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **API**: Hyper3D Rodin API for 3D generation

## 📖 Usage

1. **Enter a description** - Write what you'd like to create (e.g., "a futuristic chair")
2. **Add reference images** (optional) - Upload images to guide the generation
3. **Configure settings** - Choose quality level, output format, and other parameters
4. **Generate** - Click generate and wait for your model to be created
5. **Preview & Download** - View your 3D model in real-time and download in your preferred format

## 👨‍💻 Author

- **Chris Tate** ([@ctatedev](https://x.com/ctatedev))

---

<p align="center">
  Built with ❤️ using modern web technologies
</p>
