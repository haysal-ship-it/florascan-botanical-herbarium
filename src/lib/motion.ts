import { Transition } from "framer-motion";

/**
 * Spring physics tokens calibrated for tactile botanical micro-interactions
 * Inspired by Design Spells, Lochie Axon, and BeUI/Nexvyn
 */
export const MOTION_SPRINGS = {
  // Snappy tactile feedback for buttons, toggles, icon clicks (100–160ms effective duration)
  tactile: {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 0.8,
  } as Transition,

  // Smooth spatial transitions for sheets, drawers, dossier expands (180–240ms)
  spatial: {
    type: "spring",
    stiffness: 280,
    damping: 30,
    mass: 1.0,
  } as Transition,

  // Playful bounce for badges, notifications, success indicators
  bouncy: {
    type: "spring",
    stiffness: 500,
    damping: 18,
    mass: 0.6,
  } as Transition,

  // Reticle brackets snapping to specimen target
  reticleLock: {
    type: "spring",
    stiffness: 350,
    damping: 22,
    mass: 0.9,
  } as Transition,

  // Sliding pill tab indicator
  tabIndicator: {
    type: "spring",
    stiffness: 380,
    damping: 30,
  } as Transition,
};

export const MOTION_EASINGS = {
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  easeInOutQuart: [0.76, 0, 0.24, 1] as const,
  gentleFloat: [0.45, 0.05, 0.55, 0.95] as const,
};

/**
 * Check if the user environment prefers reduced motion
 */
export const isReducedMotionPreferred = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Gentle ambient drift for floating spores / glowing botanical particles
export const AMBIENT_DRIFT_VARIANTS = {
  animate: {
    y: [-8, 8, -8],
    x: [-4, 5, -4],
    opacity: [0.35, 0.85, 0.35],
    transition: {
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
