/**
 * Scene 6: PROOF / AWARDS (21-25s)
 */

import { CameraTrack, CameraPresets, ParallaxLayer, EditorialHeading, MetaLabel, StatBlock, RuleLine, SectionNumber, NumberFact, MaskedReveal, CompositionReveal, RuleCross } from "../primitives";
import React from "react";
import { film, composition, colors, easings, durations, typography, content, motion } from "../../design-tokens";

interface SceneProps { frameOffset?: number; }

export const ProofScene: React.FC<SceneProps> = ({ frameOffset = 0 }) => {
  const { start, end } = film.sections.proof; const duration = end - start; const proof = content.proof;
  return <CameraTrack path={CameraPresets.cinematicDrift(start + frameOffset, duration, -300, 50, 1.05)}>
    <div style={{ position: "absolute", inset: 0, backgroundColor: colors.canvas }} />
    <SectionNumber number={5} total={6} variant="primary" size="large" x={composition.safeMargin} y={composition.safeMargin} divider dividerLength={80} animateFrom={start + frameOffset} animateDuration={durations.cinematic * 30} />
    <EditorialHeading text="TRUSTED BY GLOBAL BRANDS" variant="display" x={composition.safeMargin} y={composition.safeMargin + 100} color={colors.ink} maskReveal maskDirection="left" animateFrom={start + frameOffset + 20} animateDuration={durations.cinematic * 30} tracking="editorial" />
    <MetaLabel label="Cultural institutions and forward thinking teams" variant="label" animateFrom={start + frameOffset + 50} animateDuration={durations.slow * 30} style={{ position: "absolute", left: composition.safeMargin, top: composition.safeMargin + 180 }} />
    <div style={{ position: "absolute", left: composition.safeMargin, top: composition.viewport.height / 2 - 100 }}><NumberFact value={58} suffix="+" label="Awwwards" variant="hero" animateFrom={start + frameOffset + 80} animateDuration={durations.cinematic * 30} /></div>
    <div style={{ position: "absolute", left: composition.safeMargin, top: composition.viewport.height / 2 + 120, display: "flex", flexDirection: "column", gap: 16 }}>{Object.entries(proof.stats).map(([category, awards], i) => <CompositionReveal key={category} type="clip" direction="left" animateFrom={start + frameOffset + 120 + i * 12} animateDuration={durations.cinematic * 30 * 0.6}><div style={{ display: "flex", alignItems: "center", gap: 24, paddingLeft: 40, borderLeft: `1px solid ${colors.border}` }}><MetaLabel label={category} variant="label" animateFrom={start + frameOffset + 120 + i * 12} animateDuration={durations.slow * 30} /><div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>{Object.entries(awards).map(([award, count]) => <MaskedReveal key={`${category}-${award}`} direction="left" animateFrom={start + frameOffset + 140 + i * 12} animateDuration={durations.normal * 30}><MetaLabel label={`${award}`} variant="category" color={colors.inkMuted} animateFrom={start + frameOffset + 140 + i * 12} animateDuration={durations.normal * 30} /></MaskedReveal>)}</div></div></CompositionReveal>)}</div>
    <div style={{ position: "absolute", left: composition.safeMargin, bottom: composition.safeMargin + 100, display: "flex", gap: 60, alignItems: "flex-end" }}><StatBlock stats={[{ value: proof.talks, label: "Talks", suffix: "" }, { value: proof.articles, label: "Articles", suffix: "" }]} direction="row" gap={80} animateFrom={start + frameOffset + 180} staggerDelay={15} /></div>
    <SectionNumber number={58} variant="ghost" size="architectural" x={composition.viewport.width - composition.safeMargin - 500} y={composition.viewport.height / 2 - 150} rotate={-90} opacity={0.08} animateFrom={start + frameOffset} animateDuration={duration} />
    <ParallaxLayer factor={motion.parallax.typography}><RuleCross size={64} thickness={1} color={colors.taupe} x={composition.viewport.width - composition.safeMargin - 64} y={composition.safeMargin + 200} rotate={45} animateFrom={start + frameOffset + 30} animateDuration={durations.normal * 30} /></ParallaxLayer>
    <RuleLine orientation="horizontal" length={composition.viewport.width - composition.safeMargin * 2} thickness={0.5} color={colors.border} x={composition.safeMargin} y={composition.viewport.height - composition.safeMargin - 60} animateFrom={start + frameOffset + 60} animateDuration={durations.slow * 30} draw drawDirection="start" />
  </CameraTrack>;
};

export const ProofSceneTypographic: React.FC<SceneProps> = ({ frameOffset = 0 }) => {
  const { start, end } = film.sections.proof; const duration = end - start; const proof = content.proof;
  const bigStats = [ { value: 58, label: "Awwwards", suffix: "+" }, { value: 1, label: "Site of the Year", suffix: "" }, { value: 1, label: "FWA Site of the Year", suffix: "" }, { value: 1, label: "CSSDA Site of the Year", suffix: "" }, { value: 2, label: "Webby Winners", suffix: "" }, { value: 5, label: "Conference Talks", suffix: "" } ];
  return <CameraTrack path={CameraPresets.verticalScroll(start + frameOffset, duration, 600)}>
    <div style={{ position: "absolute", inset: 0, backgroundColor: colors.canvas }} />
    <SectionNumber number={5} total={6} variant="primary" size="large" x={composition.safeMargin} y={composition.safeMargin} divider dividerLength={80} animateFrom={start + frameOffset} animateDuration={durations.cinematic * 30} />
    <EditorialHeading text="RECOGNITION" variant="display" x={composition.safeMargin} y={composition.safeMargin + 100} color={colors.ink} maskReveal maskDirection="left" animateFrom={start + frameOffset + 20} animateDuration={durations.cinematic * 30} tracking="editorial" />
    <div style={{ position: "absolute", left: composition.safeMargin, top: composition.safeMargin + 220, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, width: "calc(100% - 240px)" }}>{bigStats.map((stat, i) => <CompositionReveal key={stat.label} type="scale" animateFrom={start + frameOffset + 80 + i * 10} animateDuration={durations.cinematic * 30 * 0.7}><NumberFact value={stat.value} suffix={stat.suffix} label={stat.label} variant={i < 2 ? "hero" : "display"} animateFrom={start + frameOffset + 80 + i * 10} animateDuration={durations.cinematic * 30} /></CompositionReveal>)}</div>
    <MaskedReveal direction="top" animateFrom={start + frameOffset + 180} animateDuration={durations.cinematic * 30}><div style={{ position: "absolute", left: composition.safeMargin, top: composition.viewport.height / 2 + 200, width: "calc(100% - 240px)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, fontFamily: typography.editorial, fontSize: typography.size.small, fontWeight: typography.weight.regular, lineHeight: typography.leading.relaxed, color: colors.inkMuted }}>{Object.entries(proof.stats).flatMap(([category, awards]) => [<div key={category} style={{ fontWeight: typography.weight.medium, textTransform: "uppercase", letterSpacing: typography.tracking.editorial, color: colors.taupe }}>{category}</div>, ...Object.entries(awards).map(([award, count]) => <div key={`${category}-${award}`} style={{ paddingLeft: 16, borderLeft: `1px solid ${colors.border}` }}>{award} <span style={{ color: colors.ink }}>{count}</span></div>)] )}</div></MaskedReveal>
    <SectionNumber number={5} variant="ghost" size="architectural" x={composition.viewport.width / 2 - 200} y={composition.viewport.height + 100} rotate={-90} opacity={0.05} animateFrom={start + frameOffset} animateDuration={duration} />
  </CameraTrack>;
};

export default ProofScene;