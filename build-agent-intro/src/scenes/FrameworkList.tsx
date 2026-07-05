import { Backdrop } from "@/components/remocn/backdrop";
import { InfiniteMarquee } from "@/components/remocn/infinite-marquee";
import { BG, FG_MUTED } from "@/theme";

const FRAMEWORKS =
  "LangGraph  ·  Vercel AI SDK  ·  Claude Agent SDK  ·  OpenAI Agents SDK  ·  Mastra  ·  Cloudflare Agents  ·  eve  ·  Flue  ·  Tool calling  ·  Prompt engineering  ·  AI gateways  ·  Slack  ·  CLI  ·  Observability  ·  ";

export function FrameworkList() {
  return (
    <Backdrop
      fill={{ type: "color", value: BG }}
      padding={0}
      radius={0}
      shadow=""
    >
      <InfiniteMarquee
        text={FRAMEWORKS}
        fontSize={48}
        fontWeight={600}
        color={FG_MUTED}
        pixelsPerFrame={1.6}
      />
    </Backdrop>
  );
}
