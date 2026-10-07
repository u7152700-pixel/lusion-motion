/**
 * Scene 5: PROCESS / EXPERTISE (17-21s)
 */

import { CameraTrack, CameraPresets, ParallaxLayer, EditorialHeading, MetaLabel, RuleLine, SectionNumber, MaskedReveal, CompositionReveal, ImagePanel } from "../primitives";
import React from "react";
import { film, composition, colors, easings, durations, typography, content, motion } from "../../design-tokens";

interface SceneProps { frameOffset?: number; }

export const ProcessScene: React.FC<SceneProps> = ({ frameOffset = 0 }) => {
  const { start, end } = film.sections.process; const duration = end - start;
  const expertise = content.process.expertise;
  const pillars = [ { key: "STRATEGY", label: "STRATEGY", short: "s", items: expertise.STRATEGY, color: colors.ink }, { key: "CREATIVE", label: "CREATIVE", short: "c", items: expertise.CREATIVE, color: colors.taupe }, { key: "TECH", label: "TECH", short: "t", items: expertise.TECH, color: colors.stone }, { key: "PRODUCTION", label: "PRODUCTION", short: "P", items: expertise.PRODUCTION, color: colors.warmGrey } ];
  const pillarWidth = (composition.viewport.width - composition.safeMargin * 2 - 72) / 4;
  return <CameraTrack path={CameraPresets.cinematicDrift(start + frameOffset, duration, -400, -100, 1.02)}>
    <div style={{ position: "absolute", inset: 0, backgroundColor: colors.canvas }} />
    <SectionNumber number={4} total={6} variant="primary" size="large" x={composition.safeMargin} y={composition.safeMargin} divider dividerLength={80} animateFrom={start + frameOffset} animateDuration={durations.cinematic * 30} />
    <EditorialHeading text={content.process.headline} variant="hero" x={composition.safeMargin} y={composition.safeMargin + 100} color={colors.ink} maskReveal maskDirection="left" animateFrom={start + frameOffset + 20} animateDuration={durations.cinematic * 30} />
    <MaskedReveal direction="left" animateFrom={start + frameOffset + 70} animateDuration={durations.slow * 30} easing={easings.cinematic}><div style={{ position: "absolute", left: composition.safeMargin, top: composition.safeMargin + 280, width: 800, fontFamily: typography.editorial, fontSize: typography.size.lead, fontWeight: typography.weight.regular, lineHeight: typography.leading.relaxed, color: colors.inkMuted, letterSpacing: "0.01em" }}>{content.process.body[0]}<br /><br />{content.process.body[1]}</div></MaskedReveal>
    <ParallaxLayer factor={motion.parallax.background}><EditorialHeading text={content.process.tunnelText.toUpperCase()} variant="ghost" x={composition.viewport.width / 2 - 800} y={composition.viewport.height / 2 - 100} color={colors.ink} opacity={0.12} tracking="widest" animateFrom={start + frameOffset} animateDuration={duration} /></ParallaxLayer>
    <div style={{ position: "absolute", left: composition.safeMargin, top: composition.viewport.height / 2 + 80, display: "flex", gap: 24, width: "calc(100% - 240px)" }}>{pillars.map((pillar, i) => <CompositionReveal key={pillar.key} type="clip" direction="left" animateFrom={start + frameOffset + 100 + i * 15} animateDuration={durations.cinematic * 30 * 0.7}><ParallaxLayer factor={motion.parallax.typography}><div style={{ flex: 1, minWidth: pillarWidth, display: "flex", flexDirection: "column", gap: 16 }}><div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}><MetaLabel label={pillar.short} variant="number" animateFrom={start + frameOffset + 100 + i * 15} animateDuration={durations.cinematic * 30} /><MetaLabel label={pillar.label} variant="label" animateFrom={start + frameOffset + 110 + i * 15} animateDuration={durations.slow * 30} /></div><RuleLine orientation="horizontal" length={pillarWidth} thickness={1} color={pillar.color} x={0} y={0} animateFrom={start + frameOffset + 120 + i * 15} animateDuration={durations.slow * 30} draw drawDirection="start" /><div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{pillar.items.map((item, j) => <MaskedReveal key={item} direction="left" animateFrom={start + frameOffset + 140 + i * 15 + j * 6} animateDuration={durations.normal * 30} easing={easings.cinematic}><MetaLabel label={item} variant="category" color={colors.inkMuted} animateFrom={start + frameOffset + 140 + i * 15 + j * 6} animateDuration={durations.normal * 30} /></MaskedReveal>)}</div></div></ParallaxLayer></CompositionReveal>)}</div>
    <RuleLine orientation="vertical" length={400} thickness={0.5} color={colors.border} x={composition.safeMargin} y={composition.viewport.height / 2 + 80} animateFrom={start + frameOffset + 90} animateDuration={durations.cinematic * 30} draw drawDirection="center" />
    <SectionNumber number={4} variant="ghost" size="architectural" x={composition.viewport.width - composition.safeMargin - 300} y={composition.safeMargin + 50} rotate={-90} opacity={0.06} animateFrom={start + frameOffset} animateDuration={duration} />
  </CameraTrack>;
};

export const ProcessSceneImageLed: React.FC<SceneProps> = ({ frameOffset = 0 }) => {
  const { start, end } = film.sections.process; const duration = end - start;
  return <CameraTrack path={CameraPresets.horizontalPan(start + frameOffset, duration, -800)}>
    <div style={{ position: "absolute", inset: 0, backgroundColor: colors.canvas }} />
    <SectionNumber number={4} total={6} variant="primary" size="large" x={composition.safeMargin} y={composition.safeMargin} divider dividerLength={80} animateFrom={start + frameOffset} animateDuration={durations.cinematic * 30} />
    <ParallaxLayer factor={motion.parallax.background}><ImagePanel src="https://picsum.photos/seed/process/1920/1080.jpg" alt="Process" variant="bleed" aspectRatio={16/9} fit="cover" opacity={0.15} parallaxFactor={motion.parallax.background} animateFrom={start + frameOffset} animateDuration={duration} /></ParallaxLayer>
    <EditorialHeading text={content.process.headline} variant="massive" x={composition.safeMargin} y={composition.safeMargin + 120} color={colors.ink} maskReveal maskDirection="left" animateFrom={start + frameOffset + 20} animateDuration={durations.cinematic * 30} />
    <MaskedReveal direction="left" animateFrom={start + frameOffset + 70} animateDuration={durations.slow * 30}><div style={{ position: "absolute", left: composition.safeMargin, top: composition.safeMargin + 320, width: 700, fontFamily: typography.editorial, fontSize: typography.size.lead, fontWeight: typography.weight.regular, lineHeight: typography.leading.relaxed, color: colors.inkMuted }}>{content.process.body[0]}<br /><br />{content.process.body[1]}</div></MaskedReveal>
    <ParallaxLayer factor={motion.parallax.typography}><EditorialHeading text={content.process.tunnelText.toUpperCase()} variant="outline" x={composition.safeMargin} y={composition.viewport.height / 2 + 100} color={colors.ink} tracking="widest" animateFrom={start + frameOffset + 100} animateDuration={durations.cinematic * 30} /></ParallaxLayer>
    {["STRATEGY", "CREATIVE", "TECH", "PRODUCTION"].map((tag, i) => <ParallaxLayer key={tag} factor={motion.parallax.foreground}><MetaLabel label={tag} variant="category" animateFrom={start + frameOffset + 120 + i * 10} animateDuration={durations.slow * 30} style={{ position: "absolute", left: composition.safeMargin + (i % 2) * 600, top: composition.viewport.height / 2 + 250 + Math.floor(i / 2) * 80 }} /></ParallaxLayer>)}
    <SectionNumber number={4} variant="ghost" size="architectural" x={composition.viewport.width - composition.safeMargin - 400} y={composition.viewport.height - composition.safeMargin - 200} rotate={-90} opacity={0.05} animateFrom={start + frameOffset} animateDuration={duration} />
  </CameraTrack>;
};

export default ProcessScene;