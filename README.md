# Muzi Liu - Portfolio Website

A modern, elegant portfolio website showcasing game development projects, algorithm engineering experience, and research work.

## ✨ Features

- **Bilingual Support**: Seamless switching between Chinese (中文) and English
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-triggered animations and micro-interactions using Framer Motion
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Static Export**: Fast, SEO-friendly static site generation
- **Elegant UI**: Sophisticated minimalist design with refined typography

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: DM Sans & Playfair Display (Google Fonts)
- **Deployment**: GitHub Pages

## 📦 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles
├── components/
│   ├── animations/        # Animation wrapper components
│   ├── layout/            # Navigation & Footer
│   ├── sections/          # Page sections (Hero, About, Games, etc.)
│   └── ui/                # Reusable UI components
├── contexts/              # React contexts (Language)
├── data/                  # Content data (games, experience, research, skills)
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npx serve out
```

The development server will be available at `http://localhost:3000`.

## 🎨 Design System

### Typography
- **Display Font**: Playfair Display (headings, hero)
- **Body Font**: DM Sans (body text, UI elements)

### Colors
- **Primary**: Blue gradient (#0D72EB to #3895FA)
- **Neutral**: Sophisticated gray scale
- **Accents**: Coral, Amber, Emerald

### Animations
- Scroll-triggered fade-in and slide-up effects
- Hover states with lift and shadow transitions
- Orchestrated page load sequences
- Smooth section navigation

## 📄 Content Management

All content is managed through TypeScript files in `src/data/`:

- `content.ts` - Personal information and bio
- `games.ts` - Game projects with achievements
- `experience.ts` - Work experience timeline
- `research.ts` - Research projects and publications
- `skills.ts` - Skills by category

Content is bilingual (Chinese/English) using the `BilingualText` type.

## 🚢 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the `main` branch.

### Manual Deployment

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
```

## 📝 License

© 2024 Muzi Liu. All rights reserved.

## 🤝 Contact

- **Email**: liumuzi@link.cuhk.edu.hk
- **GitHub**: [muziliu](https://github.com/muziliu)
- **LinkedIn**: [muziliu](https://linkedin.com/in/muziliu)
