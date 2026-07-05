import { Easing, interpolate, useCurrentFrame } from "remotion";
import { ACCENT, FG } from "@/theme";

export function CtaLine({
  text,
  appearAt = 0,
  fontSize = 38,
  color = FG,
}: {
  text: string;
  appearAt?: number;
  fontSize?: number;
  color?: string;
}) {
  const frame = useCurrentFrame() - appearAt;
  const words = text.split(" ");

  const distance = 28;
  const enterDur = 16;
  const staggerDelay = 3;
  const wordDur = 6;
  const easing = Easing.bezier(0.2, 0.8, 0.2, 1);

  const x = interpolate(frame, [0, enterDur], [-distance, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });
  const blur = interpolate(frame, [0, enterDur], [4, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });

  return (
    <div
      style={{
        display: "flex",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize,
        fontWeight: 500,
        transform: `translateX(${x}px)`,
        filter: `blur(${blur}px)`,
      }}
    >
      {words.map((word, i) => {
        const opacity = interpolate(
          frame - i * staggerDelay,
          [0, wordDur],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing },
        );
        return (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: static word list, order never changes during a render
            key={`${i}-${word}`}
            style={{
              marginRight: "0.35em",
              opacity,
              color: word === "$" ? ACCENT : color,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
