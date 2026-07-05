import { Backdrop } from "@/components/remocn/backdrop";
import { InfiniteMarquee } from "@/components/remocn/infinite-marquee";
import { MicroScaleFade } from "@/components/remocn/micro-scale-fade";
import { BG, FG, FG_MUTED } from "@/theme";

const FRAMEWORKS =
  "LangGraph  ·  Vercel AI SDK  ·  eve  ·  Flue  ·  CrewAI  ·  LlamaIndex  ·  Mastra  ·  Google ADK  ·  ";

export function FrameworkList() {
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
          gap: 24,
        }}
      >
        <div style={{ position: "relative", width: 760, height: 50 }}>
          <MicroScaleFade
            text="Works with any framework."
            fontSize={30}
            fontWeight={500}
            color={FG}
          />
        </div>
        <div style={{ position: "relative", width: "100%", height: 70 }}>
          <InfiniteMarquee
            text={FRAMEWORKS}
            fontSize={44}
            fontWeight={600}
            color={FG_MUTED}
            pixelsPerFrame={1.6}
          />
        </div>
      </div>
    </Backdrop>
  );
}
