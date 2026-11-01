# FloraScan — Botanical Field Journal & Plant Identification

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> **FloraScan** is a modern editorial botanical field journal and plant identification web application. It pairs the timeless elegance of classical botanical herbarium monographs (*Kew, Curtis's Botanical Magazine*) with real-time optical scanning, veterinary and human toxicological matrices, and a personal field notebook.

---

## Key Features

- **Optical Specimen Scanner**: Real-time WebRTC camera viewfinder with device camera switching (front/back), snapshot freezing, drag-and-drop photo upload, and an optical machine-vision framing reticle.
- **12-Specimen Reference Tray**: 1-click test laboratory shelf for instant specimen inspection without requiring a physical camera.
- **Editorial Monograph Dossier**: High-resolution photography plates, Linnaean binomial nomenclature, IUCN Red List conservation status, and structured taxonomy.
- **Readable Telemetry**: Sunlight exposure, watering frequency, soil substrate pH, and USDA hardiness zone metrics.
- **Veterinary & Human Toxicology Matrix**: ASPCA clinical toxicity tiers for Cats, Dogs, and Children, emergency poison control hotline directory, and wild foraging toxic lookalike warnings.
- **Botanical Catalog & Exploratorium**: Multi-column responsive catalog of 50+ curated living taxa with real-time search and taxonomic category filtering.
- **Specimen Comparator**: Side-by-side comparative table (desktop) and grouped attribute pairing (mobile) with quick swap controls.
- **Plant Health & Cultural Triage**: Plain-language symptom identification (*Chlorosis, Crispy Tips, Powdery Mildew, Spider Mites, Root Rot, Etiolation*) with ordered organic remediation protocols.
- **Personal Field Herbarium Journal**: Local field observation notebook with date stamps, location tags, inline notes editing, JSON backup export, and printable classical monograph plates (`@media print`).
- **Zero-Asset Procedural Audio**: In-browser Web Audio API sound synthesis (shutter clicks, focus pips, discovery chimes) with opt-in muting.
- **Dual-Mode Theming**: *Herbarium Parchment* light theme and *Obsidian Night* dark theme with responsive typography.

---

## Tech Stack

- **Framework**: React 18 + Vite 6 + TypeScript
- **Styling**: Tailwind CSS with CSS Custom Property semantic design tokens
- **Typography**: Editorial Serif (*Fraunces* / *Playfair Display*) + Clean Sans (*Plus Jakarta Sans*) + Monospace (*JetBrains Mono*)
- **Icons**: Lucide React
- **Sound**: Web Audio API (procedural browser synthesis)
- **Deployment**: Optimized for Vercel, Netlify, and static hosting

---

## Getting Started

### Prerequisites

- Node.js 18+ (tested on v24)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/haysal-ship-it/florascan-botanical-herbarium.git

# Navigate into the project directory
cd florascan-botanical-herbarium

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5174/` in your browser.

### Production Build

```bash
# Compile and bundle for production
npm run build

# Preview the production build locally
npm run preview
```

---

## Deployment to Vercel

### Option 1: One-Click Import via Vercel Dashboard
1. Go to [Vercel](https://vercel.com/new).
2. Connect your GitHub account and import `haysal-ship-it/florascan-botanical-herbarium`.
3. Vercel automatically detects the Vite framework settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

### Option 2: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## License

MIT © FloraScan
