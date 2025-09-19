# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with [Lume](https://lume.land/), a static site generator for Deno. The site showcases projects, skills, and professional information with a dark theme aesthetic and animated effects.

## Development Commands

### Core Development
- `deno task serve` - Start development server with live reload at `http://localhost:3000`
- `deno task build` - Build static site to `_site` directory
- `deno task lume` - Access Lume CLI directly

### Production Deployment
The site automatically deploys to [Deno Deploy](https://deno.com/deploy) on pushes to the `main` branch via GitHub Actions.

## Architecture

### Build System
- **Static Site Generator**: Lume v3.0.4 with JSX support
- **Styling**: TailwindCSS with custom noise overlay effects
- **Optimization**: HTML minification, CSS processing with LightningCSS, JS minification with Terser
- **Runtime**: Deno with React JSX runtime (ssx)

### Project Structure
```
src/
├── _components/        # Reusable React components
│   ├── blocks/         # Low-level components (Head, Scripts, etc.)
│   └── *.tsx           # Page sections (hero, about, projects, etc.)
├── _data.ts            # Central data store with resume information
├── _includes/          # Layout components
├── pages/              # Page definitions
├── styles.css          # Global styles with Tailwind imports
├── utils/              # Utility functions
├── images/             # Static assets including effects
├── javascript/         # Client-side scripts
└── documents/          # PDFs and other documents
```

### Key Components
- **Data Management**: All portfolio content is centralized in `src/_data.ts` with TypeScript types
- **Component Architecture**: Modular React components in `src/_components/` with reusable blocks
- **Layout System**: Single layout in `src/_includes/layout.tsx` with head and script management
- **Styling**: Custom CSS with Tailwind base, noise overlay effects, and accessibility considerations

### Data Flow
1. Portfolio data is defined in `src/_data.ts` as a const object
2. Pages import and use this data via Lume's data system
3. Components receive data as props with proper TypeScript typing
4. Global types are extended in the `Lume.Data` namespace

## Development Notes

### Component Patterns
- Components are functional React components with TypeScript
- Props follow the data structure from `src/_data.ts`
- Layout uses a single main layout wrapper
- Reusable block components for common functionality

### Styling Approach
- TailwindCSS for utility classes
- Custom CSS for effects (noise overlay, animations)
- Dark theme with gray text on black background
- Accessibility considerations (prefers-reduced-motion)

### Asset Organization
- Static assets in `src/images/`, `src/javascript/`, `src/documents/`
- Effects and animations in dedicated subfolders
- Resume PDF as downloadable document

### Deployment Configuration
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- Automatic deployment to Deno Deploy
- Production server runs via `serve.ts` on port 8000