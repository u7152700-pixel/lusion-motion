/**
 * Lusion Motion Film - Root Composition
 * Combines all editorial scenes into a cinematic sequence
 */

import { AbsoluteFill, Composition, Sequence, useVideoConfig } from "remotion";
import React from "react";
import { film, composition } from "./design-tokens";
import { IntroScene, HeroScene, PhilosophyScene } from "./components/scenes/EditorialScenes";
import { WorkScene, WorkSceneCollage } from "./components/scenes/WorkScene";
import { ProcessScene, ProcessSceneImageLed } from "./components/scenes/ProcessScene";
import { ProofScene, ProofSceneTypographic } from "./components/scenes/ProofScene";
import { CTAScene, CTASceneImageLed } from "./components/scenes/CTAScene";

/**
 * Main Film Composition
 * 30 seconds @ 30fps = 900 frames
 */
export const LusionFilm: React.FC = () => {
  const { width, height, fps, durationInFrames } = useVideoConfig();
  
  // Verify config matches design tokens
  if (width !== composition.viewport.width || height !== composition.viewport.height) {
    console.warn(`Viewport mismatch: config ${width}x${height} vs tokens ${composition.viewport.width}x${composition.viewport.height}`);
  }
  if (fps !== film.fps) {
    console.warn(`FPS mismatch: config ${fps} vs tokens ${film.fps}`);
  }
  if (durationInFrames !== film.durationInFrames) {
    console.warn(`Duration mismatch: config ${durationInFrames} vs tokens ${film.durationInFrames}`);
  }
  
  return (
    <>
      {/* Background canvas - persists throughout */}
      <AbsoluteFill
        style={{
          backgroundColor: "#FAF8F5",
          position: "absolute",
          zIndex: -100,
        }}
      />
      
      {/* Scene Sequence */}
      <Sequence from={film.sections.intro.start} durationInFrames={film.sections.intro.end - film.sections.intro.start}>
        <IntroScene />
      </Sequence>
      
      <Sequence from={film.sections.hero.start} durationInFrames={film.sections.hero.end - film.sections.hero.start}>
        <HeroScene />
      </Sequence>
      
      <Sequence from={film.sections.philosophy.start} durationInFrames={film.sections.philosophy.end - film.sections.philosophy.start}>
        <PhilosophyScene />
      </Sequence>
      
      <Sequence from={film.sections.work.start} durationInFrames={film.sections.work.end - film.sections.work.start}>
        {/* Use collage variant for more editorial feel */}
        <WorkSceneCollage />
      </Sequence>
      
      <Sequence from={film.sections.process.start} durationInFrames={film.sections.process.end - film.sections.process.start}>
        {/* Use grid layout for expertise */}
        <ProcessScene />
      </Sequence>
      
      <Sequence from={film.sections.proof.start} durationInFrames={film.sections.proof.end - film.sections.proof.start}>
        {/* Use typographic variant for awards */}
        <ProofSceneTypographic />
      </Sequence>
      
      <Sequence from={film.sections.cta.start} durationInFrames={film.sections.cta.end - film.sections.cta.start}>
        {/* Use standard CTA scene */}
        <CTAScene />
      </Sequence>
    </>
  );
};

/**
 * Root Composition - registers the film
 */
export const root: React.FC = () => {
  return (
    <Composition
      id="LusionFilm"
      component={LusionFilm}
      width={composition.viewport.width}
      height={composition.viewport.height}
      fps={film.fps}
      durationInFrames={film.durationInFrames}
      defaultProps={{}}
    />
  );
};

export default root;