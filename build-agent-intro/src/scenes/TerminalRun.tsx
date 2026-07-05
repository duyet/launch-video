import { Backdrop } from "@/components/remocn/backdrop";
import {
  TerminalSimulator,
  type TerminalLine,
} from "@/components/remocn/terminal-simulator";
import { BG } from "@/theme";

const LINES: TerminalLine[] = [
  { text: "npx skills add duyet/build-agent", type: "command", delay: 10 },
  { text: "Resolving skill from skills.sh...", type: "log", delay: 10 },
  { text: "Framework detected: Vercel AI SDK", type: "log", delay: 8 },
  {
    text: "Scaffolding agent loop, tools, and API routes...",
    type: "log",
    delay: 10,
  },
  { text: "Wiring UI and observability...", type: "log", delay: 8 },
  {
    text: "Done in 3.8s — build-agent installed",
    type: "success",
    delay: 10,
  },
];

export function TerminalRun() {
  return (
    <Backdrop fill={{ type: "color", value: BG }} padding={0}>
      <TerminalSimulator lines={LINES} title="~/projects/support-bot" />
    </Backdrop>
  );
}
