/**
 * Scene 4: FEATURED WORK (11-17s)
 * Project showcases with editorial collage layouts
 */

import { CameraTrack, CameraPresets, ParallaxLayer, EditorialHeading, MetaLabel, ImagePanel, ImageCollage, RuleLine, SectionNumber, MaskedReveal, CompositionReveal } from "../primitives";
import React from "react";
import { film, composition, colors, easings, durations, typography, content, motion } from "../../design-tokens";

interface SceneProps {
  frameOffset?: number;
}

export const WorkScene: React.FC<SceneProps> = ({ frameOffset = 0 }) => {
  const { start, end } = film.sections.work;
  const duration = end - start;
  const projects = content.work.projects;
  
  const projectDuration = duration / projects.length;
  
  return (
    <CameraTrack
      path={CameraPresets.cinematicDrift(start + frameOffset, duration, -1200, 200, 1.03)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: colors.canvas,
        }}
      />
      
      <SectionNumber
        number={3}
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
      
      <MetaLabel
        label={content.work.label}
        variant="label"
        animateFrom={start + frameOffset + 20}
        animateDuration={durations.slow * 30}
        style={{ position: "absolute", left: composition.safeMargin, top: composition.safeMargin + 80 }}
      />
      
      <MetaLabel
        label={content.work.sublabel}
        variant="category"
        animateFrom={start + frameOffset + 40}
        animateDuration={durations.slow * 30}
        style={{ position: "absolute", left: composition.safeMargin, top: composition.safeMargin + 130 }}
      />
      
      {projects.map((project, i) => {
        const projectStart = start + frameOffset + 60 + i * (projectDuration * 0.6);
        const xPos = composition.safeMargin + i * 320;
        const yPos = composition.viewport.height / 2 - 100 + (i % 2) * 200;
        
        return (
          <CompositionReveal
            key={project.name}
            type="clip"
            direction="left"
            animateFrom={projectStart}
            animateDuration={durations.cinematic * 30 * 0.8}
            delay={i * 8}
          >
            <ParallaxLayer factor={motion.parallax.foreground}>
              <div
                style={{
                  position: "absolute",
                  left: xPos,
                  top: yPos,
                  width: 280,
                  height: 360,
                }}
              >
                <ImagePanel
                  src={`https://picsum.photos/seed/${project.name.toLowerCase().replace(/\s+/g, '')}/600/800.jpg`}
                  alt={project.name}
                  variant="panel"
                  aspectRatio={3/4}
                  fit="cover"
                  reveal={true}
                  revealDirection="clip"
                  animateFrom={projectStart}
                  animateDuration={durations.cinematic * 30 * 0.6}
                  microMotion={true}
                  parallaxFactor={motion.parallax.foreground}
                />
                
                <MetaLabel
                  label={project.tags}
                  variant="category"
                  animateFrom={projectStart + durations.normal * 30}
                  animateDuration={durations.normal * 30}
                  style={{ position: "absolute", left: 0, top: 370 }}
                />
                
                <EditorialHeading
                  text={project.name}
                  variant="display"
                  x={0}
                  y={430}
                  color={colors.ink}
                  maskReveal
                  maskDirection="left"
                  animateFrom={projectStart + durations.normal * 30}
                  animateDuration={durations.slow * 30}
                  tracking="editorial"
                />
                
                <RuleLine
                  orientation="horizontal"
                  length={280}
                  thickness={0.5}
                  color={colors.border}
                  x={0}
                  y={490}
                  animateFrom={projectStart + durations.slow * 30}
                  animateDuration={durations.normal * 30}
                  draw
                  drawDirection="start"
                />
              </div>
            </ParallaxLayer>
          </CompositionReveal>
        );
      })}
      
      <SectionNumber
        number={3}
        variant="ghost"
        size="architectural"
        x={composition.viewport.width - composition.safeMargin - 400}
        y={composition.viewport.height - composition.safeMargin - 300}
        rotate={-90}
        opacity={0.06}
        animateFrom={start + frameOffset}
        animateDuration={duration}
      />
      
      <RuleLine
        orientation="vertical"
        length={600}
        thickness={0.5}
        color={colors.border}
        x={composition.viewport.width - composition.safeMargin - 60}
        y={composition.viewport.height / 2 - 300}
        animateFrom={start + frameOffset + 30}
        animateDuration={durations.cinematic * 30}
        draw
        drawDirection="center"
      />
    </CameraTrack>
  );
};

export const WorkSceneCollage: React.FC<SceneProps> = ({ frameOffset = 0 }) => {
  const { start, end } = film.sections.work;
  const duration = end - start;
  const projects = content.work.projects.slice(0, 6);
  
  return (
    <CameraTrack
      path={CameraPresets.verticalScroll(start + frameOffset, duration, 800)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: colors.canvas,
        }}
      />
      
      <SectionNumber
        number={3}
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
      
      <MetaLabel
        label={content.work.label}
        variant="label"
        animateFrom={start + frameOffset + 20}
        animateDuration={durations.slow * 30}
        style={{ position: "absolute", left: composition.safeMargin, top: composition.safeMargin + 80 }}
      />
      
      <ImageCollage
        images={projects.map((project, i) => ({
          src: `https://picsum.photos/seed/${project.name.toLowerCase().replace(/\s+/g, '')}/800/1000.jpg`,
          alt: project.name,
          x: composition.safeMargin + (i % 3) * 500 + (i % 2) * 100,
          y: composition.safeMargin + 180 + Math.floor(i / 3) * 550 + (i % 2) * 150,
          width: 450,
          height: 500,
          rotate: (i % 3 - 1) * 1.5,
          scale: 1,
          zIndex: 10 + i,
          reveal: true,
          revealDelay: i * 12,
        }))}
        containerWidth={composition.viewport.width}
        containerHeight={composition.viewport.height * 2}
        background="transparent"
        animateFrom={start + frameOffset + 60}
        staggerDelay={12}
      />
      
      {projects.map((project, i) => (
        <CompositionReveal
          key={`label-${project.name}`}
          type="fade"
          animateFrom={start + frameOffset + 120 + i * 12}
          animateDuration={durations.normal * 30}
        >
          <MetaLabel
            label={project.name}
            variant="category"
            animateFrom={start + frameOffset + 120 + i * 12}
            animateDuration={durations.normal * 30}
            style={{ 
              position: "absolute", 
              left: composition.safeMargin + (i % 3) * 500 + (i % 2) * 100,
              top: composition.safeMargin + 180 + Math.floor(i / 3) * 550 + (i % 2) * 150 + 520
            }}
          />
        </CompositionReveal>
      ))}
      
      <SectionNumber
        number={3}
        variant="ghost"
        size="architectural"
        x={composition.viewport.width / 2 - 300}
        y={composition.viewport.height + 200}
        rotate={-90}
        opacity={0.05}
        animateFrom={start + frameOffset}
        animateDuration={duration}
      />
    </CameraTrack>
  );
};

export default WorkScene;