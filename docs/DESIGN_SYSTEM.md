# FloraScan — Design System & UI Architecture Specification

**Status:** Implemented & Verified in Production Redesign (November 2026)  
**Aesthetic Archetype:** Modern Botanical Field Journal & Archival Monograph  
**Theme Model:** Dual-mode semantic CSS custom properties with Tailwind utility mapping  
**Typography:** Editorial Serif (*Fraunces* / *Playfair Display*) + Clean Sans (*Plus Jakarta Sans*) + Technical Monospace (*JetBrains Mono*)

---

## 1. Executive Design Vision & Synthesis

**FloraScan** pairs the warmth and craft of an archival naturalist’s field journal with the clarity and speed of modern web UI. It avoids decorative clutter, competing studio codenames, and fictional AI claims, focusing instead on expressive botanical photography, clear typographic hierarchy, honest demonstration labeling, and accessible responsive interaction.

### Aesthetic Influences & Verification Matrix

| Inspiration Source | Verified Status | Core Visual & Interaction Motif | FloraScan Implementation |
| :--- | :---: | :--- | :--- |
| **[Cosmos.so](https://www.cosmos.so/login)** | **Verified** | Curation, airy negative space, bone canvas (`#FAF8F5`), quiet borders | Clean field-journal canvas, unadorned photography plates, elimination of gratuitous nested cards. |
| **[Pryzm.design](https://pryzm.design/)** | **Verified** | High-contrast editorial typography, deep Obsidian dark mode (`#0B100D`), sharp serif titles with sans body | Fraunces/Playfair Display for binomial plant names; Plus Jakarta Sans for body copy. |
| **[Design Bookmark](https://designbookmark.com/)** | **Verified** | Searchable catalog directory, clean card rhythm, structured taxonomic badges | Botanical Index grid with 4:3 image ratio, family/genus tags, and clear search input. |
| **[Interfaces.dev](https://interfaces.dev/)** | **Verified** | Segmented controls, tactile bottom dock, bottom sheet drawers | Responsive bottom navigation dock on mobile; modal sheets for category filters and observation notes. |
| **[Design Spells](https://designspells.com/?tag=animation)** & **[Lochie Axon](https://lochieaxon.com/)** | **Verified** | Micro-interactions, spring physics, zero-asset Web Audio cues | 100–160 ms control feedback, opt-in synthesized shutter/chime audio (muted by default). |
| **[Pinterest Grid](https://www.pinterest.com/search/pins/?q=tictac%20game&rs=typed)** | **Verified** | Consistent specimen framing, collection rhythm | Standardized 4:3 catalog cards with uniform padding and clear typography. |
| **[Mebius.design](https://www.mebius.design/freebies/charts)** | **Verified** | Clean telemetry charts with readable textual scales | Sunlight, moisture, soil pH, and hardiness zone cards with explicit text values instead of arbitrary gauges. |
| **[BeUI](https://beui.dev/components/agents)** & **[UI Nexvyn](https://ui.nexvyn.dev/)** | **Verified** | Restrained status pills, clean corner brackets, subtle inner borders | Scanner viewfinder reticle framing without sensory overload; honest demonstration status ticker. |
| **Vasari VHS hero, Phoenix Ignis, Inknomad** (`motionsites.ai`) | ⚠️ **UNVERIFIED** | Motion template directory prompts; links resolve to general directory | **No design attributes inferred from slug.** Visual direction deferred until verified assets are provided. |

---

## 2. Semantic Token System

All color tokens resolve through CSS custom properties defined in `src/index.css` and mapped to Tailwind utilities in `tailwind.config.js`.

| Token | Light Value | Dark Value (`[data-theme='dark']`) | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--color-canvas` | `#FAF8F5` | `#0B100D` | Primary application background |
| `--color-surface` | `#F3EFE6` | `#131B16` | Panel, well, and container surfaces |
| `--color-surface-elevated` | `#FFFFFF` | `#1B2720` | Elevated cards, dialogs, and sheets |
| `--color-surface-muted` | `#EBE5D8` | `#16201A` | Inset wells and secondary chips |
| `--color-text-primary` | `#17201B` | `#F2F5F3` | Headings, primary body copy |
| `--color-text-secondary` | `#4A5B52` | `#B3C4B8` | Metadata, subtitles, supporting copy |
| `--color-text-tertiary` | `#6B7D73` | `#7D9285` | Timestamps, micro-labels, disabled cues |
| `--color-action-primary` | `#2D5A43` | `#B9D8C3` | Primary buttons, active indicators |
| `--color-action-primary-hover`| `#234835` | `#CFE5D6` | Hover state for primary action |
| `--color-action-primary-text` | `#FFFFFF` | `#102018` | Text on primary action background |
| `--color-accent-clay` | `#A66D52` | `#CE9D80` | Specimen B comparator, decorative clay accents |
| `--color-border-subtle` | `#E2DBD0` | `#223128` | Hairline dividers and card borders |
| `--color-border-strong` | `#C8BEAF` | `#374E41` | Focused boundaries and active borders |
| `--color-focus` | `#2D5A43` | `#B9D8C3` | Keyboard focus ring |
| `--color-success` | `#246E4A` | `#4ADE80` | Non-toxic badges, confirmed states |
| `--color-caution` | `#B45309` | `#FBBF24` | Moderate alerts, sunlight warnings |
| `--color-error` | `#B91C1C` | `#F87171` | Toxic lookalikes, poison alerts |

---

## 3. Typography Foundations

- **Editorial Serif:** `Fraunces` (fallback `Playfair Display`, `Georgia`, `serif`).
  - Used for scientific binomial nomenclature (*Monstera deliciosa* Liebm.), monograph article titles, and major headings.
  - Heading scale: fluid `clamp(2rem, 4vw + 1rem, 3.5rem)`.
- **Primary Sans-Serif:** `Plus Jakarta Sans` (fallback `system-ui`, `sans-serif`).
  - Used for body copy, cultivation guides, triage instructions, and buttons.
  - Body copy: 16 px base, 1.55 line height, max reading measure `65ch`.
- **Technical Monospace:** `JetBrains Mono` (fallback `monospace`).
  - Used for taxonomic reference IDs, USDA hardiness zones, pH readings, and clinical triage tags.

---

## 4. UI Component Library (`src/components/ui/`)

1. **`Button`**: Accessible button supporting `primary`, `secondary`, `outline`, `ghost`, and `danger` variants, with minimum 44 × 44 px touch targets and visible focus rings.
2. **`Badge`**: Compact status pill supporting `default`, `success`, `caution`, `danger`, `clay`, and `outline` variants.
3. **`Notice`**: Semantic banner alert for emergency toxicology notices, wild foraging warnings, and camera access guidance.
4. **`Dialog`**: Accessible modal with focus trap, Escape key closing, backdrop dismiss, and focus restoration to the trigger element.
5. **`Sheet`**: Accessible drawer/bottom sheet on mobile for taxonomic filters and observation details.
