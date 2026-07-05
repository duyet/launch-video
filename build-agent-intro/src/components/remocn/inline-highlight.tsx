"use client";

import { interpolate, interpolateColors, useCurrentFrame } from "remotion";

export interface InlineHighlightProps {
  before: string;
  highlight: string;
  after?: string;
  baseColor?: string;
  highlightColor?: string;
  fontSize?: number;
  fontWeight?: number;
  speed?: number;
  className?: string;
}

export function InlineHighlight({
  before,
  highlight,
  after = "",
  baseColor = "#171717",
  highlightColor = "#ff5e3a",
  fontSize = 48,
  fontWeight = 600,
  speed = 1,
  className,
}: InlineHighlightProps) {
  const frame = useCurrentFrame() * speed;

  const progress = interpolate(frame, [26, 91], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const color = interpolateColors(
    progress,
    [0, 1],
    [baseColor, highlightColor],
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <span
        className={className}
        style={{
          fontSize,
          fontWeight,
          color: baseColor,
          letterSpacing: "-0.03em",
          fontFamily:
            "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {before}
        <span style={{ color }}>{highlight}</span>
        {after}
      </span>
    </div>
  );
}

