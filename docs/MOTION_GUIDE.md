# FloraScan — Motion, Physics & Sensory Architecture

**Status:** Implemented & Verified in Production Redesign (November 2026)  
**Guidelines Reference:** WCAG 2.2 AA / AAA Motion & Sensory Accessibility  
**Audio Model:** Zero-asset procedural browser synthesis via Web Audio API (Opt-in; muted by default)

---

## 1. Spring Physics & Token Matrix

All interactive animations are driven by spring physics tokens defined in `src/lib/motion.ts`.

| Token Name | Stiffness | Damping | Mass | Target Duration | Interaction Scope |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `tactile` | 400 | 25 | 0.8 | 100–160 ms | Button presses, theme toggle, audio switch, chip selections |
| `spatial` | 280 | 30 | 1.0 | 180–240 ms | Dialog modals, mobile sheets, tab panel transitions |
| `bouncy` | 500 | 18 | 0.6 | 120–180 ms | Badges, success indicators, bookmark pips |
| `reticleLock` | 350 | 22 | 0.9 | 200–260 ms | Viewfinder corner brackets aligning on specimen |
| `tabIndicator` | 380 | 30 | 1.0 | 160–220 ms | Sliding active indicator on navigation bars |

---

## 2. Reduced-Motion Compliance (`prefers-reduced-motion`)

FloraScan strictly respects user accessibility preferences:
- **Global CSS Suppression:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- **Scanner Viewfinder:** Sweeping laser beam and breathing corner bracket animations are instantly disabled; the framing box remains static.
- **Sheets & Dialogs:** Replaces spatial translateY slides with instantaneous or subtle opacity fades.
- **Data Meters:** Displays final values directly without animated count-up sweeps.

---

## 3. Procedural Web Audio Sound Engine (`src/lib/soundEngine.ts`)

FloraScan synthesizes all sound effects procedurally without downloading external MP3/WAV assets.
- **Opt-In Policy:** Audio is muted by default (`florascan_sound_muted: 'true'`) unless the user explicitly activates sound via the header button.
- **No Reliance on Sound:** Audio is purely supplemental; all states (matches, errors, saves) are visually indicated.
- **Browser Autoplay Compliance:** Connects to `AudioContext` only after user gesture.
- **Sound Profile:**
  - `playTap()`: 40 ms sine micro-switch tap (820 Hz → 360 Hz).
  - `playShutter()`: Dual-stage camera shutter snap (white noise burst + mechanical resonance).
  - `playRadarPing()`: Resonant bandpass sine blip (1420 Hz → 1080 Hz).
  - `playFocusLock()`: Dual-frequency optical acquire pips (1250 Hz then 1880 Hz).
  - `playSuccessChime()`: Pentatonic F-Major crystal arpeggio (F5, A5, C6, E6, G6).
  - `playErrorThud()`: Damped mechanical refusal thud (170 Hz → 45 Hz).
