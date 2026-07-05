import { Backdrop } from "@/components/remocn/backdrop";
import { MicroScaleFade } from "@/components/remocn/micro-scale-fade";
import { FrameworkChip } from "@/components/FrameworkChip";
import { BG, FG } from "@/theme";

const FRAMEWORKS = [
  { name: "LangGraph", initials: "LG" },
  { name: "Vercel AI SDK", initials: "AI" },
  { name: "Claude Agent SDK", initials: "CA" },
  { name: "OpenAI Agents SDK", initials: "OA" },
  { name: "Mastra", initials: "M" },
  { name: "Cloudflare Agents", initials: "CF" },
  { name: "eve", initials: "e" },
  { name: "Flue", initials: "F" },
];

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
          gap: 32,
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 280px)",
            gap: 16,
          }}
        >
          {FRAMEWORKS.map((fw, i) => (
            <FrameworkChip
              key={fw.name}
              name={fw.name}
              initials={fw.initials}
              delay={20 + i * 5}
            />
          ))}
        </div>
      </div>
    </Backdrop>
  );
}
