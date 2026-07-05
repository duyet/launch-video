"use client";

import {
  interpolate,
  interpolateColors,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export interface ProgressStepsProps {
  steps?: Array<{ label: string }>;
  orientation?: "horizontal" | "vertical";
  activeColor?: string;
  inactiveColor?: string;
  textColor?: string;
  stepDuration?: number;
  speed?: number;
  className?: string;
}

export function ProgressSteps({
  steps = [{ label: "Connect" }, { label: "Process" }, { label: "Deploy" }],
  orientation = "horizontal",
  activeColor = "#22c55e",
  inactiveColor = "#27272a",
  textColor = "white",
  stepDuration = 30,
  speed = 1,
  className,
}: ProgressStepsProps) {
  const frame = useCurrentFrame() * speed;
  const { fps } = useVideoConfig();

  const isHorizontal = orientation === "horizontal";
  const trackLength = isHorizontal ? 920 : 520;
  const segmentLength = trackLength / Math.max(steps.length - 1, 1);
  const nodeRadius = 22;

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          width: isHorizontal ? trackLength + nodeRadius * 2 : 260,
          height: isHorizontal ? 100 : trackLength + nodeRadius * 2,
        }}
      >
        {/* SVG layer for connecting lines */}
        <svg
          style={{
            position: "absolute",
            left: isHorizontal ? nodeRadius : "50%",
            top: isHorizontal ? "50%" : nodeRadius,
            transform: isHorizontal ? "translateY(-50%)" : "translateX(-50%)",
            overflow: "visible",
            pointerEvents: "none",
          }}
          width={isHorizontal ? trackLength : 4}
          height={isHorizontal ? 4 : trackLength}
        >
          {steps.slice(0, -1).map((_, i) => {
            const lineStart = (i + 1) * stepDuration;
            const fillProgress = interpolate(
              frame,
              [lineStart, lineStart + stepDuration],
              [segmentLength, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            return (
              <line
                key={i}
                x1={isHorizontal ? i * segmentLength : 2}
                y1={isHorizontal ? 2 : i * segmentLength}
                x2={isHorizontal ? (i + 1) * segmentLength : 2}
                y2={isHorizontal ? 2 : (i + 1) * segmentLength}
                stroke={activeColor}
                strokeWidth={4}
                strokeLinecap="round"
                strokeDasharray={segmentLength}
                strokeDashoffset={fillProgress}
              />
            );
          })}
          {/* Background track */}
          {steps.slice(0, -1).map((_, i) => (
            <line
              key={`bg-${i}`}
              x1={isHorizontal ? i * segmentLength : 2}
              y1={isHorizontal ? 2 : i * segmentLength}
              x2={isHorizontal ? (i + 1) * segmentLength : 2}
              y2={isHorizontal ? 2 : (i + 1) * segmentLength}
              stroke={inactiveColor}
              strokeWidth={4}
              strokeLinecap="round"
              style={{ opacity: 0.6 }}
            />
          ))}
        </svg>

        {steps.map((step, i) => {
          const activateAt = i * stepDuration;
          const localFrame = frame - activateAt;
          const popScale = spring({
            frame: localFrame,
            fps,
            config: { damping: 10, stiffness: 180, mass: 0.6 },
          });
          const scale = interpolate(popScale, [0, 1], [0.8, 1]);
          const fill = interpolateColors(
            frame,
            [activateAt, activateAt + 8],
            [inactiveColor, activeColor],
          );
          const showCheck = interpolate(
            frame,
            [activateAt + 6, activateAt + 14],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          const centerAlong = nodeRadius + i * segmentLength;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: isHorizontal ? centerAlong : "50%",
                top: isHorizontal ? "50%" : centerAlong,
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: isHorizontal ? "column" : "row",
                alignItems: "center",
                gap: 14,
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: nodeRadius * 2,
                  height: nodeRadius * 2,
                  borderRadius: 999,
                  background: fill,
                  border: `2px solid ${activeColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `scale(${scale})`,
                  transformOrigin: "center",
                  boxShadow: `0 0 0 6px ${activeColor}1a`,
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ opacity: showCheck }}
                >
                  <path
                    d="M5 12.5l4.5 4.5L19 7"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: textColor,
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

