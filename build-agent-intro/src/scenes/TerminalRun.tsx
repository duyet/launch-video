import type { ReactNode } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Backdrop } from "@/components/remocn/backdrop";
import { Cursor } from "@/components/remocn/cursor";
import {
  TerminalSimulator,
  type TerminalLine,
} from "@/components/remocn/terminal-simulator";
import { useCursorPath } from "@/components/remocn/use-cursor-path";
import { ACCENT, BG } from "@/theme";

const LINES: TerminalLine[] = [
  { text: "npx skills add duyet/build-agent", type: "command", delay: 6 },
  {
    text: "Framework detected: Vercel AI SDK",
    type: "log",
    delay: 6,
  },
  {
    text: "Scaffolding agent loop, tools, and API...",
    type: "log",
    delay: 6,
    pause: 6,
  },
  {
    text: "Done in 3.8s — build-agent installed",
    type: "success",
    delay: 6,
  },
];

function ZoomIn({ children }: { children: ReactNode }) {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 18], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const blur = interpolate(frame, [0, 14], [8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        transform: `scale(${scale})`,
        filter: `blur(${blur}px)`,
      }}
    >
      {children}
    </div>
  );
}

function ClickCursor() {
  const frame = useCurrentFrame();
  const style = useCursorPath([
    { at: 0, x: 940, y: 540 },
    { at: 10, x: 640, y: 360, click: true, duration: 10 },
  ]);
  const opacity = interpolate(frame, [20, 34], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      <Cursor style={style} variant="pointer" rippleColor={ACCENT} />
    </AbsoluteFill>
  );
}

export function TerminalRun() {
  return (
    <Backdrop fill={{ type: "color", value: BG }} padding={0}>
      <ZoomIn>
        <TerminalSimulator
          lines={LINES}
          title="~/projects/support-bot"
          chunkSize={2}
          speed={1.6}
        />
      </ZoomIn>
      <ClickCursor />
    </Backdrop>
  );
}
