# Lusion Motion Film

Premium editorial motion film for Lusion.co — built with Remotion.

## Overview

This project creates a 30-second cinematic brand film that transforms the Lusion website content into a premium editorial motion experience, following the reference style guide for:
- Architectural typography
- Cinematic camera movement
- Editorial composition
- Restrained luxury aesthetic

## Quick Start

```bash
# Install dependencies
npm install

# Start Remotion Studio (interactive preview)
npm run start

# Render final video (MP4)
npm run build

# Render ProRes for post-production
npm run build:prores
```

## Project Structure

```
src/
├── design-tokens.ts          # Colors, typography, motion, content
├── root.tsx                  # Main composition (30s @ 30fps)
├── components/
│   ├── primitives/           # Reusable building blocks
│   │   ├── CameraTrack.tsx   # Virtual camera + parallax
│   │   ├── EditorialHeading.tsx  # Large-scale typography
│   │   ├── ImagePanel.tsx    # Editorial image compositions
│   │   ├── MetaLabel.tsx     # Small metadata typography
│   │   ├── RuleLine.tsx      # Thin editorial rules
│   │   ├── SectionNumber.tsx # Graphic numbering (01, 02...)
│   │   └── MaskedReveal.tsx  # Clip-path reveal animations
│   └── scenes/               # Composed editorial scenes
│       ├── EditorialScenes.tsx  # Intro, Hero, Philosophy
│       ├── WorkScene.tsx       # Featured work collage
│       ├── ProcessScene.tsx    # Expertise pillars
│       ├── ProofScene.tsx      # Awards/stats
│       └── CTAScene.tsx        # Final CTA
└── webpack-override.ts       # Font loading config
```

## Film Structure (30 seconds)

| Section | Time | Frames | Content |
|---------|------|--------|---------|
| Intro | 0-3s | 0-90 | Brand wordmark |
| Hero | 3-7s | 90-210 | "We create 3D visual storytelling..." |
| Philosophy | 7-11s | 210-330 | "Bold Ideas, Brought to Life" |
| Work | 11-17s | 330-510 | Featured projects collage |
| Process | 17-21s | 510-630 | Strategy/Creative/Tech/Production |
| Proof | 21-25s | 630-750 | 58+ awards, stats |
| CTA | 25-30s | 750-900 | "Is Your Big Idea Ready to Go Wild?" |

## Visual Language (from Reference)

- **Canvas**: Warm off-white (#FAF8F5)
- **Typography**: Aeonik, thin weights, generous tracking
- **Motion**: Cubic-bezier(0.76, 0, 0.24, 1) — cinematic ease
- **Camera**: Viewport travels through large editorial canvas
- **Parallax**: Subtle multi-layer (0.8x - 1.25x)
- **Transitions**: Spatial, masked reveals, clip-paths
- **Scale**: Extreme contrast (micro → architectural)

## Customization

### Colors & Typography
Edit `src/design-tokens.ts`:
- `colors` — palette (canvas, ink, taupe, brand accents)
- `typography` — font stacks, scale, weights, tracking
- `motion` — easing, durations, parallax factors

### Content
Edit `content` object in `src/design-tokens.ts`:
- All text, stats, project names extracted from lusion.co
- Never invents fake data — only uses real website content

### Scene Timing
Adjust `film.sections` in `src/design-tokens.ts` to rebalance section durations.

### Fonts
Place Aeonik font files in `public/fonts/`:
- `Aeonik-Thin.woff2`
- `Aeonik-ExtraLight.woff2`
- `Aeonik-Light.woff2`
- `Aeonik-Regular.woff2`
- `Aeonik-Medium.woff2`

Update `webpack-override.ts` if font filenames differ.

## Rendering

```bash
# Development preview
npm run start          # Opens Remotion Studio at http://localhost:3000

# Production renders
npm run build          # MP4 (H.264) - out/video.mp4
npm run build:prores   # ProRes HQ - out/video.mov (for color grading)

# Frame-by-frame for debugging
npx remotion render src/root.tsx LusionFilm out/frame.png --frame=450
```

## Output Specs

- **Resolution**: 1920×1080 (16:9)
- **Frame Rate**: 30 fps
- **Duration**: 30 seconds (900 frames)
- **Format**: MP4 (H.264) or ProRes 422 HQ
- **Color Space**: sRGB (Rec.709)

## Performance Tips

- Reduce `concurrency` in `package.json` if rendering fails: `--concurrency=2`
- Use `npm run preview` for quick iteration on specific scenes
- Large images: optimize with `sharp` or use lower-res placeholders during development

## License

Proprietary — Lusion Creative Studio