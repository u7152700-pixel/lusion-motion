/**
 * Design tokens with proper Remotion easing functions
 */

export const colors = {
  canvas: "#FAF8F5",
  canvasWarm: "#F5F0EB",
  ink: "#1A1A1A",
  inkSoft: "#2D2D2D",
  inkMuted: "#4A4A4A",
  taupe: "#8B7D6B",
  taupeLight: "#B8A996",
  warmGrey: "#9A9A9A",
  stone: "#A8A096",
  beige: "#D4C4B0",
  champagne: "#E8DCC8",
  brandGold: "#FFEDD7",
  brandGoldDark: "#E8D4C0",
  brandDark: "#1A1411",
  white: "#FFFFFF",
  black: "#000000",
  background: "#FAF8F5",
  foreground: "#1A1A1A",
  muted: "#8B7D6B",
  accent: "#FFEDD7",
  border: "#E8DCC8",
};

export const typography = {
  display: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  editorial: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  mono: '"SF Mono", "Fira Code", monospace',
  size: {
    micro: "11px",
    small: "13px",
    meta: "14px",
    body: "16px",
    lead: "20px",
    subheading: "24px",
    heading: "40px",
    display: "72px",
    hero: "120px",
    massive: "200px",
    architectural: "320px",
  },
  weight: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },
  tracking: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.05em",
    wider: "0.1em",
    widest: "0.2em",
    editorial: "0.15em",
  },
  leading: {
    tight: 1.05,
    snug: 1.15,
    normal: 1.3,
    relaxed: 1.5,
    loose: 1.75,
  },
};

export const spacing = {
  unit: 8,
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
  "4xl": 96,
  "5xl": 128,
  "6xl": 192,
  "7xl": 256,
};

// Proper easing functions for Remotion
export const easing = {
  cinematic: (t: number) => 0.76 * t * t * t + 0 * t * t + 0.24 * t + 0, // approximate cubic-bezier(0.76, 0, 0.24, 1)
  cinematicOut: (t: number) => 1 - Math.pow(1 - t, 3), // approximate
  cinematicIn: (t: number) => t * t * t,
  gentle: (t: number) => 0.25 * t * t * t + 0.46 * t * t + 0.45 * t + 0.94 * t, // approximate
  sharp: (t: number) => 0.4 * t * t * t + 0 * t * t + 0.2 * t + 1 * t, // approximate
};

export const motion = {
  easing,
  duration: {
    instant: 0.15,
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    slower: 1.5,
    cinematic: 2.0,
    epic: 3.0,
  },
  parallax: {
    background: 0.8,
    base: 1.0,
    foreground: 1.05,
    typography: 1.1,
    meta: 1.2,
  },
};

export const composition = {
  viewport: {
    width: 1920,
    height: 1080,
    aspectRatio: 16/9,
  },
  safeMargin: 120,
  bleedMargin: 40,
  grid: {
    columns: 12,
    gutters: 24,
    maxWidth: 1440,
  },
  scale: {
    micro: 1,
    small: 1.5,
    medium: 2.5,
    large: 4,
    massive: 7,
    architectural: 12,
  },
};

export const zIndex = {
  background: 0,
  imagery: 10,
  imageryForeground: 20,
  typography: 30,
  typographyLarge: 40,
  meta: 50,
  ui: 100,
  overlay: 200,
};

export const film = {
  fps: 30,
  durationInFrames: 900,
  durationInSeconds: 30,
  sections: {
    intro: { start: 0, end: 90 },
    hero: { start: 90, end: 210 },
    philosophy: { start: 210, end: 330 },
    work: { start: 330, end: 510 },
    process: { start: 510, end: 630 },
    proof: { start: 630, end: 750 },
    cta: { start: 750, end: 900 },
  },
};

export const content = {
  brand: "LUSION",
  hero: {
    headline: "We create 3D visual storytelling and interactive web experiences that help brands stand out",
    subtext: "SCROLL TO EXPLORE",
  },
  philosophy: {
    headline: "Bold Ideas,\nBrought to Life",
    body: "We combine design, motion, 3D, and development to create digital experiences that feel visually striking and technically seamless. From campaign launches to immersive brand worlds, we build work that captures attention and invites interaction.",
    cta: "Our Approach",
  },
  work: {
    label: "Featured Work",
    sublabel: "A selection of immersive digital experiences created for ambitious brands and forward thinking teams.",
    projects: [
      { name: "ORYZO AI", tags: "CONCEPT • WEB • DESIGN • DEVELOPMENT • 3D • ANIMATION" },
      { name: "ATLAS MOTION", tags: "CONCEPT • WEB • DESIGN • DEVELOPMENT • 3D • ANIMATION" },
      { name: "DEVIN AI", tags: "WEB • DESIGN • DEVELOPMENT • 3D" },
      { name: "OF THE OAK", tags: "WEB • DESIGN • DEVELOPMENT • 3D • ANIMATION" },
      { name: "EVERSWAP", tags: "CONCEPT • WEB • DESIGN • DEVELOPMENT • 3D • ANIMATION" },
      { name: "PORSCHE DREAM MACHINE", tags: "CONCEPT • 3D ILLUSTRATION • MOGRAPH • VIDEO" },
      { name: "SYNTHETIC HUMAN", tags: "WEB • DESIGN • DEVELOPMENT • 3D" },
      { name: "DDD 2024", tags: "WEB • DESIGN • DEVELOPMENT • 3D" },
      { name: "SPAACE", tags: "WEB • DESIGN • DEVELOPMENT • 3D • WEB3" },
      { name: "CHOO CHOO WORLD", tags: "CONCEPT • WEB • GAME DESIGN • 3D" },
    ],
  },
  process: {
    headline: "Where Creative Ideas Become Immersive Experiences",
    body: [
      "We do not chase trends or produce work that looks like everyone else. We focus on creating visually distinctive digital experiences that reflect your brand, engage your audience, and make people remember what they saw.",
      "Our process blends creative direction, 3D craft, and interactive development to build tailored digital journeys that feel original, polished, and built for impact.",
    ],
    tunnelText: "Step into a new world and let your imagination run wild",
    expertise: {
      STRATEGY: ["Digital Experience Strategy", "Technology Strategy", "Creative Direction", "Discovery", "Research"],
      CREATIVE: ["Art Direction", "UX/UI Design", "Motion Design", "Interactive Design", "Illustration"],
      TECH: ["WebGL Development", "Front End Development", "Unity/Unreal", "Interactive Installations", "AR and VR Experiences"],
      PRODUCTION: ["Procedural Modeling", "3D Asset Creation", "3D Optimization", "Animation", "3D Pipeline Development"],
    },
  },
  proof: {
    awards: "58",
    stats: {
      "Awwwards": { "Site of the Year": 1, "Developer Site of the Year": 1, "Site of the Month": 10, "Site of the Day": 16, "Honorable Mention": 16 },
      "FWA": { "Site of the Year": 1, "Site of the Month": 2, "Site of the Day": 17 },
      "CSSDA": { "Site of the Year": 1, "Agency Site of the Year": 1 },
      "Webby Awards": { "Webby Winner": 2, "Webby Nominee": 2 },
      "Lovie Awards": { "Lovie Winner": 1 },
      "Drum Awards": { "The Drum Awards for Design": 1 },
      "CommArts": { "Best-in-show Interactive": 1 },
    },
    talks: 5,
    articles: 3,
  },
  cta: {
    headline: "Is Your Big Idea Ready to Go Wild?",
    subtext: "Let's work together",
    contact: {
      address: "Suite 2, 9 Marsh Street, Bristol, BS1 4AA, United Kingdom",
      email: "hello@lusion.co",
      business: "business@lusion.co",
    },
    social: ["Twitter / X", "Instagram", "Linkedin"],
  },
  footer: {
    copyright: "©2026 LUSION Creative Studio",
    rnd: "R&D: labs.lusion.co",
    built: "Built by Lusion with ❤️",
  },
};

export const easings = easing;
export const durations = motion.duration;
export const parallax = motion.parallax;