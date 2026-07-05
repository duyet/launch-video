import { Backdrop } from "@/components/remocn/backdrop";
import { InfiniteMarquee } from "@/components/remocn/infinite-marquee";
import { FG } from "@/theme";

const FRAMEWORKS =
  "LangGraph  ·  DeepAgents  ·  Pydantic AI  ·  Vercel AI SDK  ·  Mastra  ·  Cloudflare Agents  ·  TanStack AI  ·  Google ADK  ·  OpenAI Agents SDK  ·  Claude Agent SDK  ·  Eve  ·  Flue  ·  Pi  ·  ";

const CONCEPTS =
  "Tool calling  ·  Prompt engineering  ·  Skills  ·  Tracing  ·  Observability  ·  AI gateways  ·  Context7  ·  llms.txt  ·  OpenRouter  ·  Cloudflare AI Gateway  ·  ";

const LAYERS =
  "Agent core  ·  Tools  ·  Models  ·  API  ·  UI  ·  Persistence  ·  Observability  ·  Deploy  ·  ";

export function FrameworkList() {
  return (
    <Backdrop fill={{ type: "transparent" }} padding={0} radius={0} shadow="">
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 22,
        }}
      >
        <div style={{ position: "relative", height: 64 }}>
          <InfiniteMarquee
            text={FRAMEWORKS}
            fontSize={56}
            fontWeight={700}
            color={FG}
            pixelsPerFrame={3}
          />
        </div>
        <div style={{ position: "relative", height: 64 }}>
          <InfiniteMarquee
            text={CONCEPTS}
            fontSize={56}
            fontWeight={700}
            color={FG}
            pixelsPerFrame={2.4}
          />
        </div>
        <div style={{ position: "relative", height: 64 }}>
          <InfiniteMarquee
            text={LAYERS}
            fontSize={56}
            fontWeight={700}
            color={FG}
            pixelsPerFrame={3.4}
          />
        </div>
      </div>
    </Backdrop>
  );
}
