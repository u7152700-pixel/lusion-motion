/**
 * Scene Components - Individual editorial scenes
 * Each scene is a composed composition using primitives
 */

import { CameraTrack, CameraPresets, ParallaxLayer, EditorialHeading, MetaLabel, RuleLine, SectionNumber, MaskedReveal, CompositionReveal, RuleCross, RuleGrid } from "../primitives";
import React from "react";
import { film, composition, colors, easings, durations, typography, content, motion } from "../../design-tokens";

interface SceneProps {
  frameOffset?: number;
}

export const IntroScene: React.FC<SceneProps> = ({ frameOffset = 0 }) => {
  const { start, end } = film.sections.intro;
  const duration = end - start;
  
  return (
    <CameraTrack
      path={CameraPresets.zoomOut(start + frameOffset, duration * 0.8, 1.2)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: colors.canvas,
        }}
      />
      
      <RuleGrid
        columns={6}
        rows={4}
        cellWidth={320}
        cellHeight={270}
        color={colors.border}
        thickness={0.5}
        animateFrom={start + frameOffset}
        animateDuration={duration}
        stagger
      />
      
      <EditorialHeading
        text="LUSION"
        variant="architectural"
        x={composition.safeMargin}
        y={composition.viewport.height / 2 - 160}
        color={colors.ink}
        maskReveal
        maskDirection="left"
        animateFrom={start + frameOffset + 15}
        animateDuration={durations.cinematic * 30}
        tracking="editorial"
      />
      
      <EditorialHeading
        text="CREATIVE STUDIO"
        variant="outline"
        x={composition.safeMargin}
        y={composition.viewport.height / 2 + 40}
        color={colors.ink}
        maskReveal
        maskDirection="left"
        animateFrom={start + frameOffset + 45}
        animateDuration={durations.slow * 30}
        tracking="editorial"
      />
      
      <SectionNumber
        number={0}
        variant="ghost"
        size="massive"
        x={composition.viewport.width - composition.safeMargin - 200}
        y={composition.safeMargin}
        divider
        dividerLength={60}
        animateFrom={start + frameOffset + 30}
        animateDuration={durations.cinematic * 30}
      />
      
      <RuleCross
        size={32}
        thickness={1}
        color={colors.inkMuted}
        x={composition.safeMargin}
        y={composition.viewport.height - composition.safeMargin - 32}
        animateFrom={start + frameOffset + 20}
        animateDuration={durations.normal * 30}
      />
      
      <RuleLine
        orientation="horizontal"
        length={200}
        thickness={1}
        color={colors.border}
        x={composition.safeMargin}
        y={composition.viewport.height / 2 + 120}
        animateFrom={start + frameOffset + 60}
        animateDuration={durations.slow * 30}
        draw
        drawDirection="start"
      />
    </CameraTrack>
  );
};

export const HeroScene: React.FC<SceneProps> = ({ frameOffset = 0 }) => {
  const { start, end } = film.sections.hero;
  const duration = end - start;
  
  return (
    <CameraTrack
      path={CameraPresets.cinematicDrift(start + frameOffset, duration, -400, 100, 1.02)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: colors.canvas,
        }}
      />
      
      <SectionNumber
        number={1}
        total={6}
        variant="primary"
        size="large"
        x={composition.safeMargin}
        y={composition.safeMargin}
        divider
        dividerLength={80}
        animateFrom={start + frameOffset}
        animateDuration={durations.cinematic * 30}
      />
      
      <EditorialHeading
        text={content.hero.headline}
        variant="hero"
        x={composition.safeMargin}
        y={composition.viewport.height / 2 - 200}
        color={colors.ink}
        maskReveal
        maskDirection="left"
        animateFrom={start + frameOffset + 20}
        animateDuration={durations.cinematic * 30}
        stagger={false}
        tracking="editorial"
      />
      
      <MetaLabel
        label={content.hero.subtext}
        variant="label"
        animateFrom={start + frameOffset + 80}
        animateDuration={durations.slow * 30}
        style={{ position: "absolute", left: composition.safeMargin, top: composition.viewport.height / 2 + 180 }}
      />
      
      <ParallaxLayer factor={motion.parallax.typography}>
        <RuleCross
          size={48}
          thickness={1}
          color={colors.taupe}
          x={composition.viewport.width - composition.safeMargin - 48}
          y={composition.safeMargin}
          rotate={45}
          animateFrom={start + frameOffset + 10}
          animateDuration={durations.normal * 30}
        />
      </ParallaxLayer>
      
      <RuleLine
        orientation="vertical"
        length={400}
        thickness={1}
        color={colors.border}
        x={composition.safeMargin}
        y={composition.viewport.height / 2 - 200}
        animateFrom={start + frameOffset + 40}
        animateDuration={durations.slow * 30}
        draw
        drawDirection="start"
      />
    </CameraTrack>
  );
};

export const PhilosophyScene: React.FC<SceneProps> = ({ frameOffset = 0 }) => {
  const { start, end } = film.sections.philosophy;
  const duration = end - start;
  
  return (
    <CameraTrack
      path={CameraPresets.cinematicDrift(start + frameOffset, duration, -600, -50, 1.05)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: colors.canvas,
        }}
      />
      
      <SectionNumber
        number={2}
        total={6}
        variant="primary"
        size="large"
        x={composition.safeMargin}
        y={composition.safeMargin}
        divider
        dividerLength={80}
        animateFrom={start + frameOffset}
        animateDuration={durations.cinematic * 30}
      />
      
      <EditorialHeading
        text={content.philosophy.headline}
        variant="hero"
        x={composition.safeMargin}
        y={composition.viewport.height / 2 - 250}
        color={colors.ink}
        maskReveal
        maskDirection="left"
        animateFrom={start + frameOffset + 15}
        animateDuration={durations.cinematic * 30}
        stagger={false}
      />
      
      <MaskedReveal
        direction="left"
        animateFrom={start + frameOffset + 60}
        animateDuration={durations.slow * 30}
        easing={easings.cinematic}
      >
        <div
          style={{
            position: "absolute",
            left: composition.safeMargin,
            top: composition.viewport.height / 2 + 20,
            width: 700,
            fontFamily: typography.editorial,
            fontSize: typography.size.lead,
            fontWeight: typography.weight.regular,
            lineHeight: typography.leading.relaxed,
            color: colors.inkMuted,
            letterSpacing: "0.01em",
          }}
        >
          {content.philosophy.body}
        </div>
      </MaskedReveal>
      
      <MetaLabel
        label={content.philosophy.cta}
        variant="category"
        animateFrom={start + frameOffset + 100}
        animateDuration={durations.normal * 30}
        style={{ position: "absolute", left: composition.safeMargin, top: composition.viewport.height - composition.safeMargin - 40 }}
      />
      
      <SectionNumber
        number={2}
        variant="ghost"
        size="architectural"
        x={composition.viewport.width / 2 - 200}
        y={composition.viewport.height / 2 - 100}
        rotate={-90}
        opacity={0.08}
        animateFrom={start + frameOffset}
        animateDuration={duration}
      />
      
      <RuleLine
        orientation="horizontal"
        length={300}
        thickness={1}
        color={colors.border}
        x={composition.safeMargin}
        y={composition.viewport.height / 2 + 220}
        animateFrom={start + frameOffset + 50}
        animateDuration={durations.slow * 30}
        draw
        drawDirection="start"
      />
    </CameraTrack>
  );
};

export default { IntroScene, HeroScene, PhilosophyScene };