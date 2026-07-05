import { Backdrop } from "@/components/remocn/backdrop";
import { ClaudeCode } from "@/components/remocn/claude-code";

export function AgentChat() {
  return (
    <Backdrop fill={{ type: "transparent" }} padding={0} radius={0} shadow="">
      <ClaudeCode
        title="Claude Code"
        userName="duyet"
        cwd="/home/duyet"
        prompt="/build-agent build customer support agent with eve framework"
        response={[
          "→ Framework: eve",
          "→ Scaffolding agent core, tools, API...",
          "✓ Ready to deploy",
        ]}
        speed={3}
      />
    </Backdrop>
  );
}
