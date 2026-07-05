import { Easing, interpolate, useCurrentFrame } from "remotion";
import { ACCENT, FG } from "@/theme";

export function FrameworkChip({
  name,
  initials,
  delay,
}: {
  name: string;
  initials: string;
  delay: number;
}) {
  const frame = useCurrentFrame() - delay;
  const easing = Easing.bezier(0.2, 0.8, 0.2, 1);
  const opacity = interpolate(frame, [0, 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });
  const scale = interpolate(frame, [0, 16], [0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        display: "flex",
        alignItems: "center",
        gap: 14,
        border: "1px solid #27272a",
        borderRadius: 10,
        padding: "14px 20px",
        background: "#111111",
        width: 280,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          background: "#1c1512",
          border: `1px solid ${ACCENT}55`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: ACCENT,
          fontSize: 15,
          fontWeight: 700,
        }}
      >
        {initials}
      </div>
      <span style={{ fontSize: 18, fontWeight: 600, color: FG }}>{name}</span>
    </div>
  );
}
