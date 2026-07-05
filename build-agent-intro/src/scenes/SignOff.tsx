import { interpolate, useCurrentFrame } from "remotion";
import { Backdrop } from "@/components/remocn/backdrop";
import { MicroScaleFade } from "@/components/remocn/micro-scale-fade";
import { ACCENT, BG, FG, FG_MUTED } from "@/theme";

function CtaLine({ text, appearAt }: { text: string; appearAt: number }) {
  const frame = useCurrentFrame() - appearAt;
  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame, [0, 18], [10, 0], {
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

export function SignOff() {
  return (
    <Backdrop fill={{ type: "color", value: BG }} padding={0}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 22,
        }}
      >
        <div style={{ position: "relative", width: 640, height: 90 }}>
          <MicroScaleFade text="build-agent" fontSize={64} color={FG} />
        </div>
        <div style={{ position: "relative", width: 760, height: 50 }}>
          <MicroScaleFade
            text="Scaffold agents on any framework."
            fontSize={26}
            fontWeight={500}
            color={FG_MUTED}
          />
        </div>
        <div style={{ height: 10 }} />
        <CtaLine text="npx skills add duyet/build-agent" appearAt={34} />
      </div>
    </Backdrop>
  );
}
