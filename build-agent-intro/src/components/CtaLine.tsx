import { interpolate, useCurrentFrame } from "remotion";
import { ACCENT, FG } from "@/theme";

export function CtaLine({
  text,
  appearAt = 0,
}: {
  text: string;
  appearAt?: number;
}) {
  const frame = useCurrentFrame() - appearAt;
  const opacity = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame, [0, 14], [10, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 26,
        fontWeight: 500,
        border: "1px solid #27272a",
        borderRadius: 8,
        padding: "12px 20px",
        background: "#111111",
      }}
    >
      <span style={{ color: ACCENT }}>$</span>
      <span style={{ color: FG }}>{text}</span>
    </div>
  );
}
