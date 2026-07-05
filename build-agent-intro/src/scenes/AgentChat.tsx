import { Backdrop } from "@/components/remocn/backdrop";
import { ClaudeCode } from "@/components/remocn/claude-code";
import { BG } from "@/theme";

export function AgentChat() {
  return (
    <Backdrop
      fill={{ type: "color", value: BG }}
      padding={0}
      radius={0}
      shadow=""
    >
      <ClaudeCode
        userName="Dev"
        cwd="~/projects/support-bot"
        prompt="/build-agent build customer support agent with eve framework"
        response={[
          "→ Framework: eve",
          "→ Scaffolding agent core, tools, API...",
          "✓ Ready to deploy",
        ]}
        speed={2}
      />
    </Backdrop>
  );
}
