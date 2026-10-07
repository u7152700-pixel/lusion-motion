/**
 * CameraTrack - Virtual camera movement through editorial canvas
 */

import { interpolate, useCurrentFrame } from "remotion";
import React from "react";
import { composition, motion } from "../../design-tokens";

interface CameraTrackProps {
  children: React.ReactNode;
  path: Array<{ frame: number; x: number; y: number; scale?: number }>;
  easing?: (t: number) => number;
  parallax?: boolean;
}

interface ParallaxLayerProps { children: React.ReactNode; factor: number; }

export const CameraTrack: React.FC<CameraTrackProps> = ({ children, path, easing = motion.easing.cinematic, parallax = true }) => {
  const frame = useCurrentFrame();
  const frames = path.map(p => p.frame);
  const xValues = path.map(p => p.x);
  const yValues = path.map(p => p.y);
  const scaleValues = path.map(p => p.scale ?? 1);
  
  const x = interpolate(frame, frames, xValues, { easing, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y = interpolate(frame, frames, yValues, { easing, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const scale = interpolate(frame, frames, scaleValues, { easing, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  
  const transform = `translate(${-x}px, ${-y}px) scale(${scale})`;
  
  return <div style={{ position: "absolute", top: 0, left: 0, width: composition.viewport.width, height: composition.viewport.height, transform, transformOrigin: "center center", willChange: "transform" }}>{React.Children.map(children, child => { if (!React.isValidElement(child)) return child; if (parallax && (child.props as any).parallaxFactor) { const factor = (child.props as any).parallaxFactor; const childX = interpolate(frame, frames, path.map(p => p.x * (factor - 1)), { easing, extrapolateLeft: "clamp", extrapolateRight: "clamp" }); const childY = interpolate(frame, frames, path.map(p => p.y * (factor - 1)), { easing, extrapolateLeft: "clamp", extrapolateRight: "clamp" }); return React.cloneElement(child, { style: { ...child.props.style, transform: `translate(${childX}px, ${childY}px)`, willChange: "transform" } }); } return child; })}</div>;
};

export const CameraPresets = { horizontalPan: (sf: number, d: number, dist: number) => [{ frame: sf, x: 0, y: 0, scale: 1 }, { frame: sf + d, x: dist, y: 0, scale: 1 }], verticalScroll: (sf: number, d: number, dist: number) => [{ frame: sf, x: 0, y: 0, scale: 1 }, { frame: sf + d, x: 0, y: dist, scale: 1 }], zoomIn: (sf: number, d: number, es = 1.15) => [{ frame: sf, x: 0, y: 0, scale: 1 }, { frame: sf + d, x: 0, y: 0, scale: es }], zoomOut: (sf: number, d: number, ss = 1.3) => [{ frame: sf, x: 0, y: 0, scale: ss }, { frame: sf + d, x: 0, y: 0, scale: 1 }], cinematicDrift: (sf: number, d: number, ex: number, ey: number, es = 1.05) => [{ frame: sf, x: 0, y: 0, scale: 1 }, { frame: sf + d, x: ex, y: ey, scale: es }], multiPoint: (pts: Array<{ frame: number; x: number; y: number; scale?: number }>) => pts };

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ children, factor }) => <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} data-parallax-factor={factor}>{children}</div>;

export default CameraTrack;