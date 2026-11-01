# FloraScan Redesign — Phase 1: Baseline & References Report

**Date:** 1 November 2026  
**Phase:** 1 of 6 (Baseline & References)  
**Status:** COMPLETE (Exit Criteria Met — Baseline documented, screenshots captured, defects inventoried, reference access limitations recorded)  
**Application URL:** `http://localhost:5174/`

---

## 1. Run & Build Findings

### Build Status
- **Command:** `npm run build` (`tsc && vite build`)
- **Output:** Exit Code 0 (Clean)
- **Module Transformation:** 1,594 modules transformed
- **Bundle Metrics:**
  - `dist/index.html`: 1.61 kB (gzip: 0.87 kB)
  - `dist/assets/index-Crow8imy.css`: 46.46 kB (gzip: 8.13 kB)
  - `dist/assets/index-DgzQeA-u.js`: 445.11 kB (gzip: 122.93 kB)
- **TypeScript:** Strict type checking passes with 0 diagnostic errors.

### Runtime Environment & Port Allocation
- **Initial Observation:** Port 3000 on the local host machine is currently occupied by an existing external project (`TailorFit`).
- **Resolution:** FloraScan was explicitly retargeted to port **5174** (`vite --port 5174`). All runtime and browser automation tests are bound to `http://localhost:5174/`.
- **Network Probes & Console Errors:**
  - One minor network error detected: `HTTP 404: http://localhost:5174/favicon.ico`. While an inline SVG favicon is defined in `<head>`, browsers probe the root `/favicon.ico`. This will be resolved in Phase 2.
  - Zero JavaScript runtime exceptions or unhandled promise rejections on initial load.

---

## 2. Screen & State Inventory

| Screen | File Location | Key States & Interaction Flows | Current UI Architecture |
| :--- | :--- | :--- | :--- |
| **Scanner** | `src/components/Scanner/ScannerView.tsx` | • Standby/idle (capture CTA, file drop, sample tray)<br>• WebRTC live camera viewfinder with front/back flip<br>• Snapshot frozen canvas frame<br>• Simulated inference progression (5 stages)<br>• Permission denied / device missing fallback<br>• Specimen match result card | BeUI-style HUD with laser sweep, corner reticle brackets, horizontal scrolling specimen tray (12 items), drag-and-drop dropzone. |
| **Dossier** | `src/components/Dossier/BotanicalDossier.tsx` | • Full specimen monograph<br>• Hero photography & Linnaean taxonomy<br>• Mebius care telemetry (sun, water, pH, hardiness)<br>• ASPCA pet & human toxicology matrix<br>• Wild foraging toxic lookalikes warning<br>• Culinary, medicinal, and ecological use cards<br>• Alternative match switcher<br>• Save to Herbarium modal<br>• Print stylesheet (`@media print`) | Editorial magazine layout with Fraunces serif headings, tabbed/segmented content sections, modal dialog / bottom sheet. |
| **Explore** | `src/components/Explore/BotanicalIndex.tsx` | • Search by common name, scientific name, family<br>• Filter by class (*All, Plants, Flowers, Fruits, Herbs, Trees, Succulents*)<br>• Specimen catalog grid (50 living species)<br>• Empty search results state<br>• Specimen card click → opens Dossier in Scanner view | Multi-column responsive grid (1 to 5 cols), sticky search/filter bar, tactile card hover lifts. |
| **Compare** | `src/components/Compare/SpecimenComparator.tsx` | • Dual specimen picker dropdowns<br>• Side-by-side comparative table (desktop/tablet)<br>• Stacked comparative cards (mobile)<br>• Attribute metrics: sunlight, watering, soil pH, hardiness, toxicity, culinary, active compounds | Matrix view comparing Specimen A vs Specimen B. |
| **Health** | `src/components/Triage/PlantHealthTriage.tsx` | • 6 primary symptom selector cards (*Chlorosis, Crispy Tips, Powdery Mildew, Spider Mites, Root Rot, Etiolation*)<br>• Detail view: probable causes, organic remediation protocol, preventative care | Segmented triage grid with collapsible remediation steps. |
| **Herbarium** | `src/components/Herbarium/HerbariumJournal.tsx` | • Empty state with scan CTA<br>• Populated grid of saved field observation entries<br>• Inline note editor modal<br>• Delete entry action<br>• Export journal as JSON<br>• Classical botanical print view | Field notebook archive cards with observation date, location, and user notes. |

---

## 3. Visual Baseline & Screenshot Verification

Automated headless browser capture was executed using `puppeteer-core` connected to local Chrome across all four standard responsive viewports (320 px, 375 px, 768 px, 1440 px), both themes (Light and Dark), and all five functional modules.

### Screenshot Archive (`screenshots/baseline/`)

| File Name | Viewport | Theme | Purpose / Verified UI |
| :--- | :--- | :--- | :--- |
| `scanner-mobile-320-light.png` | 320 × 640 | Light | Minimum supported phone width; bottom nav dock; camera viewfinder constraints |
| `scanner-mobile-375-light.png` | 375 × 667 | Light | Standard iOS phone width; capture buttons, sample tray |
| `scanner-tablet-768-light.png` | 768 × 1024 | Light | iPad / tablet portrait; split layout transition |
| `scanner-desktop-1440-light.png` | 1440 × 900 | Light | Desktop widescreen; panoramic scanner alongside guidance |
| `scanner-desktop-1440-dark.png` | 1440 × 900 | Dark | Obsidian Night theme token verification |
| `dossier-mobile-375-light.png` | 375 × 667 | Light | Mobile specimen monograph; serif header wrapping, care meters |
| `dossier-desktop-1440-light.png` | 1440 × 900 | Light | Desktop editorial magazine spread; telemetry grid, toxicology cards |
| `explore-mobile-375-light.png` | 375 × 667 | Light | Mobile catalog search & category chips |
| `explore-desktop-1440-light.png` | 1440 × 900 | Light | Desktop 4–5 column botanical exploratorium grid |
| `compare-mobile-375-light.png` | 375 × 667 | Light | Mobile specimen comparator |
| `compare-desktop-1440-light.png` | 1440 × 900 | Light | Desktop dual-column comparative matrix |
| `health-mobile-375-light.png` | 375 × 667 | Light | Mobile symptom triage chips and remediation steps |
| `health-desktop-1440-light.png` | 1440 × 900 | Light | Desktop split symptom list and remediation guidance |
| `herbarium-mobile-375-light.png` | 375 × 667 | Light | Mobile saved journal entries |
| `herbarium-desktop-1440-light.png` | 1440 × 900 | Light | Desktop field journal with print & JSON export |

---

## 4. Current Defects & Discrepancies Inventory

Based on systematic inspection of the baseline codebase and captured screenshots against the Redesign Specification:

### High Priority
1. **Fictional Inference & Confidence Claims (Spec §1, §5):**
   - *Current Behavior:* Scanner UI displays "98.4% Match Accuracy", "Machine Vision Inferred", and simulated neural network layer checkpoints.
   - *Requirement:* Must provide honest demo labeling. Replace fictional inference claims with clear, honest demo/curated identification status.
2. **Mobile Compare Attribute Layout (Spec §5):**
   - *Current Behavior:* Mobile compare stacks two separate cards (Specimen A on top, Specimen B below).
   - *Requirement:* Mobile compare must group each attribute together with both specimen values (e.g., "Sunlight: [Plant A value] vs [Plant B value]"), eliminating the need to scroll between disconnected cards.
3. **Explore Filter Sheet on Mobile (Spec §4, §5):**
   - *Current Behavior:* Filter chips horizontally wrap directly under the search bar on mobile, taking up vertical screen real estate.
   - *Requirement:* Mobile filters should open in an accessible filter sheet, preserving selections upon closing.
4. **Herbarium Deletion Safety (Spec §5):**
   - *Current Behavior:* Clicking the trash icon deletes an entry immediately without confirmation.
   - *Requirement:* Implement an accessible confirmation modal or working undo action to prevent accidental data loss.

### Medium Priority
5. **Brand Name Inconsistency (Spec §3):**
   - *Current Behavior:* Header features competing labels ("FLORASCAN // Core v4.2 // Herbarium Machine Vision // Linnaean Archive").
   - *Requirement:* Unify branding to a clean, consistent "FloraScan" botanical field journal identity.
6. **Token & CSS Variable Duplication (Spec §3):**
   - *Current Behavior:* Tailwind config and `index.css` define overlapping palettes (`parchment`, `botanical`, `obsidian`, `ink`).
   - *Requirement:* Consolidate to the proposed specification tokens (`Canvas`, `Surface`, `Elevated surface`, `Primary text`, `Secondary text`, `Primary action`, `Text on primary action`, `Decorative clay accent`).
7. **Over-reliance on Global `overflow-x: hidden` (Spec §4):**
   - *Current Behavior:* Global `overflow-x: hidden` on `html` and `body` masks layout overflow rather than maintaining natural container constraints.
   - *Requirement:* Remove global overflow suppression and ensure all component containers shrink properly.
8. **Health Triage Framing (Spec §5):**
   - *Current Behavior:* Presented as an AI diagnostic triage.
   - *Requirement:* Clearly state this is curated botanical guidance from predefined symptom content, without implying photo-based automated diagnosis.
9. **Missing Favicon (Network Error):**
   - *Current Behavior:* Request to `/favicon.ico` returns HTTP 404.
   - *Requirement:* Supply a clean SVG/ICO favicon in `public/`.

---

## 5. Reference Verification Status

| Reference Source | Verification Status | Observed / Documented Pattern | Planned FloraScan Application | Mobile Adaptation | Reduced-Motion Alternative |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cosmos** (`cosmos.so`) | **Verified** (via prior visual review) | Generous negative space, bone canvas (`#FAF8F5`), quiet borders, image-first hierarchy. | Clean field-journal canvas, unadorned photography plates, elimination of gratuitous nested cards. | Single-column breathing room, 16 px gutters, fluid typography. | Static layout; no parallax or floating drifts. |
| **Pryzm** (`pryzm.design`) | **Verified** | High-contrast editorial typography, deep Obsidian dark mode (`#0B100D`), sharp serif titles with sans body. | Fraunces/Playfair Display for binomial plant names; Plus Jakarta Sans for body text. | Scaled fluid serif headings (`text-2xl` to `text-5xl`). | Instant text appearance without stagger. |
| **Design Bookmark** (`designbookmark.com`) | **Verified** | Searchable catalog directory, clean card rhythm, structured taxonomic badges. | Botanical Index grid with 4:3 image aspect ratio, family/genus tags, quick-action triggers. | 1-col (mobile) to 2-col (tablet) to 4-5 col (desktop). | Hover lift disabled; focus outline retained. |
| **Interfaces** (`interfaces.dev`) | **Verified** | Segmented controls, tactile bottom dock, bottom sheet drawers. | Bottom navigation dock on mobile; bottom sheet for filters and save dialog. | Native safe-area insets (`env(safe-area-inset-bottom)`), 44 px touch targets. | Instant sheet appearance; opacity crossfade instead of slide. |
| **Design Spells & Lochie Axon** | **Verified** | Micro-interactions, spring physics, zero-asset Web Audio cues. | 100–160 ms control feedback, opt-in synthesized shutter/chime audio. | Full touch-target compliance, vibration/audio mute by default. | Animated springs replaced with instantaneous state changes. |
| **Pinterest Grid** | **Verified** | Consistent specimen framing, clean card rhythm. | Standardized 4:3 crop catalog cards with uniform padding. | Flexible grid with `minmax()` cards. | Standard static grid. |
| **Mebius** (`mebius.design`) | **Verified** | Clean telemetry charts with readable textual scales. | Sunlight arc, moisture hygrometer, soil pH, and hardiness zone cards with explicit text values. | 2-col telemetry on mobile, 4-col on desktop. | Pre-filled gauges without animated fill sweeps. |
| **BeUI & UI Nexvyn** | **Verified** | Restrained status pills, clean corner brackets, subtle inner borders. | Scanner viewfinder reticle framing without sensory overload. | Reticle scales dynamically with viewport width. | Static reticle without breathing pulse. |
| **Vasari VHS hero** (`motionsites.ai/?prompt=vasari-vhs-hero`) | ⚠️ **UNVERIFIED** | Link resolves to general MotionSites directory. Example not publicly accessible. | **No design attributes inferred from slug.** Visual direction deferred until verified assets are provided. | N/A | N/A |
| **Phoenix Ignis** (`motionsites.ai/?prompt=phoenix-ignis`) | ⚠️ **UNVERIFIED** | Link resolves to general MotionSites directory. Example not publicly accessible. | **No design attributes inferred from slug.** Visual direction deferred until verified assets are provided. | N/A | N/A |
| **Inknomad** (`motionsites.ai/?prompt=inknomad`) | ⚠️ **UNVERIFIED** | Link resolves to general MotionSites directory. Example not publicly accessible. | **No design attributes inferred from slug.** Visual direction deferred until verified assets are provided. | N/A | N/A |

---

## 6. Phase 1 Exit Criteria Sign-off

- [x] Run and build findings documented (`npm run build` passes, port conflict resolved to 5174, 404 favicon identified).
- [x] Comprehensive screen and state inventory completed across all 5 functional modules.
- [x] Visual baseline screenshots generated and archived across 320 px, 375 px, 768 px, and 1440 px viewports in both light and dark themes.
- [x] High- and medium-priority defects categorized and mapped to specification requirements.
- [x] Reference verification status explicitly recorded, including clear documentation of the 3 unverified `motionsites.ai` references.

**Cleared to proceed to Phase 2 (Foundation: Tokens, Typography, Shell, Navigation, Base Controls, and Theme Behavior).**
