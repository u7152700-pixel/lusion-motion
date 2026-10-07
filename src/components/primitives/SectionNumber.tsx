/**
 * SectionNumber - Large editorial numbering (01, 02, 03, 04)
 */

import { interpolate, useCurrentFrame } from "remotion";
import React from "react";
import { typography, colors, easings, durations, composition } from "../../design-tokens";

interface SectionNumberProps {
  number: number;
  total?: number;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "architectural";
  size?: "normal" | "large" | "massive" | "architectural";
  prefix?: string;
  suffix?: string;
  divider?: boolean;
  dividerLength?: number;
  animateFrom?: number;
  animateDuration?: number;
  x?: number;
  y?: number;
  opacity?: number;
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SizeStyles: Record<NonNullable<SectionNumberProps["size"]>, React.CSSProperties> = {
  normal: { fontSize: typography.size.display, fontWeight: typography.weight.thin },
  large: { fontSize: typography.size.hero, fontWeight: typography.weight.extralight },
  massive: { fontSize: typography.size.massive, fontWeight: typography.weight.thin },
  architectural: { fontSize: typography.size.architectural, fontWeight: typography.weight.thin },
};

const VariantStyles: Record<NonNullable<SectionNumberProps["variant"]>, React.CSSProperties> = {
  primary: { color: colors.ink, opacity: 1 },
  secondary: { color: colors.inkMuted, opacity: 0.6 },
  ghost: { color: colors.ink, opacity: 0.12 },
  outline: { color: "transparent", WebkitTextStroke: `1px ${colors.ink}` },
  architectural: { color: colors.taupe, opacity: 0.4 },
};

export const SectionNumber: React.FC<SectionNumberProps> = ({
  number, total, variant = "primary", size = "large", prefix = "", suffix = "",
  divider = false, dividerLength = 80, animateFrom = 0, animateDuration = durations.cinematic * 30,
  x = 0, y = 0, opacity = 1, rotate = 0, className = "", style = {}
}) => {
  const frame = useCurrentFrame();
  const formatted = number.toString().padStart(2, "0");
  const progress = interpolate(frame, [animateFrom, animateFrom + animateDuration], [0, 1], { easing: easings.cinematicOut, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const slideProgress = interpolate(frame, [animateFrom, animateFrom + animateDuration], [40, 0], { easing: easings.cinematic, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const scaleProgress = interpolate(frame, [animateFrom, animateFrom + animateDuration * 0.4], [1.3, 1], { easing: easings.cinematicOut, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const v = variant ?? "primary";
  const s = size ?? "large";
  const variantStyle = VariantStyles[v];
  const sizeStyle = SizeStyles[s];

  return (
    <div className={className} style={{ position: "absolute", left: x, top: y, transform: `translateX(${slideProgress * (1 - progress)}px) rotate(${rotate}deg) scale(${scaleProgress})`, transformOrigin: "left bottom", opacity: opacity * progress, willChange: "transform, opacity", pointerEvents: "none", ...style }} aria-hidden="true">
      <div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
        {prefix && (
          <span style={{ fontFamily: typography.editorial, fontSize: typography.size.meta, fontWeight: typography.weight.regular, letterSpacing: typography.tracking.editorial, textTransform: "uppercase", color: variantStyle.color, opacity: variantStyle.opacity, marginBottom: 8 }}>{prefix}</span>
        )}
        <span style={{ fontFamily: typography.display, ...sizeStyle, ...variantStyle, letterSpacing: typography.tracking.editorial, lineHeight: typography.leading.tight, display: "block" }}>{formatted}</span>
        {suffix && (
          <span style={{ fontFamily: typography.editorial, fontSize: typography.size.meta, fontWeight: typography.weight.regular, letterSpacing: typography.tracking.editorial, textTransform: "uppercase", color: variantStyle.color, opacity: variantStyle.opacity, marginBottom: 8 }}>{suffix}</span>
        )}
      </div>
      {divider && (
        <div style={{ position: "absolute", left: 0, bottom: -4, width: dividerLength * progress, height: 1, backgroundColor: variantStyle.color, opacity: (Number(variantStyle.opacity) ?? 1) * 0.5, transformOrigin: "left center" }} />
      )}
      {total && (
        <div style={{ position: "absolute", right: -60, bottom: 4, fontFamily: typography.editorial, fontSize: typography.size.small, fontWeight: typography.weight.regular, letterSpacing: typography.tracking.widest, textTransform: "uppercase", color: colors.taupe, opacity: 0.4 * progress }}>
          / {total.toString().padStart(2, "0")}
        </div>
      )}
    </div>
  );
};

interface NumberFactProps {
  value: number;
  suffix?: string;
  label?: string;
  variant?: "hero" | "display" | "massive";
  animateFrom?: number;
  animateDuration?: number;
  className?: string;
}

export const NumberFact: React.FC<NumberFactProps> = ({
  value, suffix = "+", label, variant = "hero", animateFrom = 0, animateDuration = durations.cinematic * 30, className = ""
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [animateFrom, animateFrom + animateDuration], [0, 1], { easing: easings.cinematicOut, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const displayValue = Math.floor(value * progress);
  const v = variant ?? "hero";
  const variantStyles: Record<NonNullable<NumberFactProps["variant"]>, React.CSSProperties> = {
    hero: { fontSize: typography.size.hero, fontWeight: typography.weight.extralight },
    display: { fontSize: typography.size.display, fontWeight: typography.weight.thin },
    massive: { fontSize: typography.size.massive, fontWeight: typography.weight.thin },
  };
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
      <span style={{ fontFamily: typography.display, ...variantStyles[v], letterSpacing: typography.tracking.editorial, lineHeight: typography.leading.tight, color: colors.ink, display: "flex", alignItems: "flex-end", gap: 4 }}>
        {displayValue}
        <span style={{ fontSize: variantStyles[v].fontSize, fontWeight: typography.weight.thin, marginBottom: "0.1em" }}>{suffix}</span>
      </span>
      {label && <span style={{ fontFamily: typography.editorial, fontSize: typography.size.meta, fontWeight: typography.weight.regular, letterSpacing: typography.tracking.editorial, textTransform: "uppercase", color: colors.inkMuted, opacity: progress }}>{label}</span>}
    </div>
  );
};

export default SectionNumber;