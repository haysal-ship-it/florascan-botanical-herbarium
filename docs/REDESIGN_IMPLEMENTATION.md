# FloraScan redesign implementation specification

Date: 1 November 2026  
Status: Ready for implementation planning; reference verification and visual baseline pending  
Scope: Existing React web application, all screens, light and dark themes

## 1. Objective

Create a modern botanical field journal with expressive plant photography, editorial typography, and clear task-focused controls. Make scanning, exploring, comparing, diagnosing symptoms, and saving specimens usable from 320 px wide phones through large desktop displays.

This document defines the proposed redesign. It does not certify the current app's appearance, accessibility, build, or runtime behavior. No implementation or browser baseline has been completed as part of this document.

### Success criteria

- Every existing primary task remains available across supported widths.
- Navigation, image presentation, typography, and controls share one coherent system.
- No unintended page-level horizontal scrolling, clipped actions, or overlapping fixed elements.
- Keyboard, touch, reduced-motion, and light/dark experiences are explicitly verified.
- Existing saved journal entries survive the redesign.
- The interface accurately labels simulated identification.

### Scope boundaries

Include layout, styling, navigation presentation, responsive behavior, interaction states, accessible controls, motion, and image-loading improvements. Fix interaction defects encountered in redesigned flows.

Real image recognition, accounts, backend storage, cloud synchronization, new botanical content, and offline/PWA infrastructure are separate projects. Preserve the current data model and browser persistence unless a demonstrated UI requirement requires a compatible extension.

## 2. Reference strategy

The existing `DESIGN_SYSTEM.md` records the earlier inspiration sources. The interpretations below come from that document; they are not fresh observations of those websites.

| Reference | Intended contribution |
| --- | --- |
| Cosmos | Curation, image-led composition, generous spacing |
| Pryzm | Editorial type hierarchy and light/dark atmosphere |
| Design Bookmark | Searchable catalog organization and specimen grids |
| Interfaces | Navigation, sheets, and action placement |
| Design Spells and Lochie Axon | Small, responsive interaction details |
| Pinterest grid reference | Consistent specimen framing and collection rhythm |
| Mebius | Readable care-data presentation where actual data supports it |
| BeUI and UI Nexvyn | Clear status feedback and restrained surface treatments |

New references supplied by the user:

- [Vasari VHS hero](https://motionsites.ai/?prompt=vasari-vhs-hero)
- [Phoenix Ignis](https://motionsites.ai/?prompt=phoenix-ignis)
- [Inknomad](https://motionsites.ai/?prompt=inknomad)

**Verification status:** Web lookup could not retrieve these examples. The Vasari browser URL opened the general MotionSites gallery without exposing the requested example. No specific effects, palettes, or layouts have been attributed to these references.

Before finalizing art direction, inspect the actual examples or supplied screenshots/recordings. Record each useful observation as: source, observed detail, FloraScan application, mobile adaptation, reduced-motion alternative. Do not infer a design from its URL slug. Reference access does not block the baseline or component inventory, but final reference-based visual sign-off remains pending until examples are verified.

## 3. Visual system

### Composition

Use a warm field-journal canvas, large botanical images, confident headings, and quiet functional panels. Remove unnecessary nested cards and repeated decorative labels. Keep borders where they explain grouping. Use the same FloraScan name throughout; avoid competing studio/codename branding.

### Proposed tokens

These values are implementation starting points, subject to contrast checks and screenshot review.

| Token | Light | Dark |
| --- | --- | --- |
| Canvas | `#FAF8F5` | `#0B100D` |
| Surface | `#F3EFE6` | `#131B16` |
| Elevated surface | `#FFFFFF` | `#1B2720` |
| Primary text | `#17201B` | `#F2F5F3` |
| Secondary text | `#4A5B52` | `#B3C4B8` |
| Primary action | `#2D5A43` | `#B9D8C3` |
| Text on primary action | `#FFFFFF` | `#102018` |
| Decorative clay accent | `#A66D52` | `#CE9D80` |

Define separate semantic tokens for focus, error, caution, success, borders, and disabled states. Do not use the decorative accent as unverified small text. Consolidate CSS variables and Tailwind aliases so they resolve to one theme source. Verify the existing `data-theme` behavior against Tailwind dark variants before migration.

- Type: one existing editorial serif and one existing sans-serif, selected after auditing loaded fonts. Limit families to two; avoid adding a dependency solely for typography.
- Body: 16 px default, approximately 1.5–1.65 line height; metadata at least 12 px, with 14 px preferred for useful information.
- Main heading: fluid 32–64 px; section heading: fluid 24–36 px. Long names must wrap.
- Reading measure: approximately 60–70 characters.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64 px; fluid page gutters.
- Radii: 8 px controls, 16 px panels, up to 24 px major image containers. Pills only for genuinely compact selection/status controls.
- Touch targets: minimum 44 × 44 px, with separation between adjacent actions.

### Imagery

Audit existing image URLs, rights/attribution requirements, availability, and resolution before selecting replacements. Use consistent 4:3 catalog crops and intentional specimen focal points. Dossier images may use a taller crop. Preserve the complete user-uploaded image when identification framing matters. Supply informative alt text, intrinsic dimensions, loading fallbacks, and responsive sources when available. Load the primary visible image promptly; lazy-load below-fold images. Do not stretch images or present unrelated substitutes as the specimen.

## 4. Responsive layout contract

Use mobile-first rules and fluid grids. Widths below are initial composition thresholds; adjust only when real content demonstrates a problem and record the change.

| Width | Navigation and layout |
| --- | --- |
| 320–639 px | Compact header; five labeled primary destinations in bottom navigation; single-column task layouts; filters in a sheet |
| 640–767 px | Bottom navigation retained; two-column specimen grids when minimum card width permits |
| 768–1023 px | Bottom navigation retained; selective split layouts; two or three catalog columns according to available width |
| 1024–1279 px | Desktop navigation replaces bottom navigation; scanner/guidance split; expanded comparison layout |
| 1280 px+ | Centered content capped around 1440 px; controlled reading widths; grids expand without stretching individual cards |

Use 16 px minimum gutters on phones, approximately 24 px on tablets, and 32–48 px on desktop. Prefer grid `minmax()` and flexible children over rigid card widths. Children of flex/grid layouts must be allowed to shrink. Use `clamp()` for appropriate type and spacing values.

Fixed navigation must reserve equivalent content padding plus safe-area insets. Sticky actions must sit above the bottom navigation and remain usable with the software keyboard. Avoid simultaneous fixed bars when they consume excessive vertical space. Dialogs use available dynamic viewport height and internal scrolling. Landscape layouts must not rely on generous screen height.

Remove reliance on global `overflow-x: hidden` as an overflow fix. Explicitly contained horizontal sample trays may scroll, with visible access to all items and keyboard support.

## 5. Screen requirements

### Scanner — `src/components/Scanner/ScannerView.tsx`

- Primary hierarchy: concise task heading, capture/upload actions, image area, sample collection.
- Desktop: generous scanner alongside compact instructions; mobile: capture controls and preview first.
- States: idle, requesting permission, live camera, preview, demo processing, result, denied permission, unsupported camera, invalid file, read failure.
- Keep upload available when camera access fails. Retake and replace-image actions must be explicit.
- Connect the camera stream after the video element mounts; stop tracks on exit and replacement. Cancel processing timers on unmount or a new scan.
- Label sample/demo results clearly. Replace fictional inference claims and fabricated confidence presentation with honest demo status.
- Announce processing/result changes without announcing every animation frame. Preserve focus and avoid unexpected scrolling.

### Dossier — `src/components/Dossier/BotanicalDossier.tsx`

- Lead with plant image, common name, scientific name, and save/compare actions.
- Show a compact care summary, followed by care, safety, habitat, and uses.
- Keep relevant safety information visible; advanced detail may use accessible disclosure sections.
- Desktop: image/details split; mobile: image, identity, actions, summaries, then detail.
- Use readable textual values rather than ornamental gauges without meaningful scales.
- Saving has clear saved, pending-if-needed, and failure feedback; repeated saves follow the current product rules.

### Explore — `src/components/Explore/BotanicalIndex.tsx`

- Place search and result count before the grid; maintain clear selected filters and reset action.
- Reuse one specimen-card pattern with consistent image ratios and name hierarchy.
- Mobile filters open an accessible sheet; preserve selections when closing it.
- Provide distinct no-results and unavailable-image states. Preserve search/filter state when opening and returning from a specimen where practical.

### Compare — `src/components/Compare/SpecimenComparator.tsx`

- Keep both specimen selectors easy to reach and clearly distinguish the two selections.
- Desktop: aligned attribute rows with one column per plant.
- Mobile: each attribute contains both labeled values together; do not require users to remember values from separate long cards.
- Show missing values explicitly. Include an empty selection state and clear replacement actions.

### Health — `src/components/Triage/PlantHealthTriage.tsx`

- Present symptoms in plain language, followed by likely causes and ordered next steps.
- Clearly show selected symptom and offer a reset/change action.
- Desktop may use a symptom list beside detail; mobile places detail after selection with sensible focus behavior.
- Explain that this is symptom guidance from predefined content, without implying photo-based diagnosis.

### Herbarium — `src/components/Herbarium/HerbariumJournal.tsx`

- Show photograph, plant name, date, location, and a short note preview.
- Provide a purposeful empty state leading to scan or exploration.
- Notes editing needs labeled fields, save/cancel behavior, and persistence feedback.
- Deletion needs an accessible confirmation or working undo; preserve existing entries and storage keys.
- Handle unavailable/corrupt storage without crashing. Do not silently overwrite unreadable saved data.

## 6. Shared architecture and file map

Retain React, TypeScript, Vite, Tailwind, Lucide, and the installed motion library. Add dependencies only when a documented requirement justifies them.

| Location | Responsibility |
| --- | --- |
| `src/index.css`, `tailwind.config.js` | Semantic tokens, typography, responsive foundations, focus and reduced-motion rules |
| `src/App.tsx` | Shared layout, active view, preserved specimen/journal state, focus and navigation coordination |
| `src/components/Header.tsx` | Desktop navigation, compact mobile header, theme/audio controls |
| `src/components/MobileNavDock.tsx` | Labeled navigation, active state, safe-area handling |
| `src/components/Footer.tsx` | Compact supporting content without competing with primary tasks |
| `src/lib/motion.ts` | Shared transitions and reduced-motion behavior |
| `src/lib/soundEngine.ts` | Optional audio, muted by default, user preference handling |
| Proposed `src/components/ui/` | Reusable buttons, fields, sheets/dialogs, notices, empty states, and specimen cards as needed |

Extract shared components after implementing the representative screens, when real repetition is clear. Preserve existing botanical types and avoid changing data simply to fit a layout. Keep current tab navigation unless a separate routing requirement is agreed.

## 7. Motion and accessibility

- Control feedback: approximately 100–160 ms; panel transitions: 180–240 ms; restrained image/result transitions: 200–300 ms.
- Prefer opacity and transform. Do not animate layout-heavy effects across large lists.
- Motion must be interruptible; rapid navigation cannot leave stale overlays or results.
- Reduced motion removes large spatial movement and decorative loops while retaining immediate state feedback.
- Audio is opt-in and must never be required to understand a result.
- Use semantic headings, labels, buttons, and navigation. Indicate the active destination programmatically.
- Sheets/dialogs manage initial focus, contain focus, close with Escape, and return focus to the trigger.
- Target WCAG AA contrast: 4.5:1 normal text, 3:1 large text and essential control boundaries/states as applicable.
- Provide visible keyboard focus and non-color state cues. Honor 200% zoom and text expansion.

## 8. Delivery phases and gates

| Phase | Deliverables | Exit criteria |
| --- | --- | --- |
| 1. Baseline and references | Run/build findings, screen/state inventory, reference observations, phone/tablet/desktop screenshots | Current defects and reference-access limitations documented |
| 2. Foundation | Tokens, type, shell, navigation, base controls, theme behavior | Shell works at 320, 768, and 1440 px in both themes with keyboard access |
| 3. Representative flows | Scanner and Dossier fully styled, all relevant states | Capture/upload/demo/save flow verified; visual direction reviewed at phone and desktop widths |
| 4. Remaining screens | Explore, Compare, Health, Herbarium; shared components extracted | All primary tasks work and existing journal data survives |
| 5. Motion and resilience | Reduced motion, optional sound, failures, image loading, long-content handling | No blocked interactions, stale transitions, or hidden critical states |
| 6. Final verification | Build result, focused interaction checks, screenshot set, issue log | Acceptance checklist passes or remaining limitations are explicitly recorded |

Complete each phase before expanding visual changes across more screens. Update `DESIGN_SYSTEM.md`, `MOTION_GUIDE.md`, and `RESPONSIVE_AUDIT.md` to reflect the implemented result. Treat older audit scores as historical documentation, not proof that the redesign passed.

## 9. Verification plan

### Viewports and environments

Inspect all main views at 320, 375, 390, 640, 768, 1024, 1280, 1440, and 1920 px. Inspect one pixel below and above composition breakpoints, plus short landscape screens. Use browser resizing between samples to detect intermediate failures. Check both themes and 200% zoom.

Verify desktop Chromium and Firefox, and Safari/iOS and Android Chrome where available. Browser emulation supplements real-device checks; record real-device gaps explicitly, especially camera permissions, keyboard overlap, and safe areas.

### Interaction checks

- Switch every destination using mouse, keyboard, and touch where available.
- Camera permission granted/denied/unsupported; upload valid/invalid images; replace image; leave during processing.
- Browse, search, filter, clear filters, open dossier, and return.
- Compare two specimens with long names and missing attributes.
- Select/change symptoms and navigate the result using keyboard.
- Save a specimen, edit its note, reload, and confirm persistence; exercise deletion/cancel or undo.
- Toggle theme/audio, reload, and verify preferences.
- Open and close sheets with keyboard, backdrop where supported, and Escape; verify focus restoration.
- Check broken images, long notes, empty collections, storage failure, and reduced motion.

Use focused automated tests for persistence, navigation/state transitions, and regressions introduced by refactoring. Do not add tests that merely duplicate CSS values. Run `npm run build`; choose an interaction-test tool after inspecting existing tooling. Capture console errors during browser checks.

### Final acceptance checklist

- [ ] Every primary screen and specified state is implemented.
- [ ] No unintended page overflow or clipped text/actions across the test matrix.
- [ ] Navigation and sticky actions respect safe areas and available height.
- [ ] Contrast, keyboard access, focus behavior, and reduced motion pass checks.
- [ ] Plant names and notes wrap without breaking layouts.
- [ ] Images have intentional crops, alt text, dimensions, and failure handling.
- [ ] Demo identification is unmistakable and no fabricated inference claims remain.
- [ ] Existing journal entries and preferences remain usable after reload.
- [ ] Production build passes; relevant interaction checks pass.
- [ ] Screenshots cover each screen on mobile and desktop, representative tablet layouts, and both themes.
- [ ] Verified reference influences and any unverified references are documented accurately.
- [ ] Remaining limitations and unavailable device checks are recorded without claiming completion.

## 10. Implementation handoff

Start with Phase 1. Use this specification as the redesign scope, preserve current data and workflows, and make changes incrementally. Report delivered screens, validation evidence, and unresolved issues at each phase. Do not mark the redesign complete from a successful build alone; visual and interaction verification are required.
