import { Backdrop } from "@/components/remocn/backdrop";
import { ClaudeCode } from "@/components/remocn/claude-code";
import { BG } from "@/theme";

export function AgentChat() {
  return (
    <Backdrop fill={{ type: "color", value: BG }} padding={0}>
      <ClaudeCode
        userName="Dev"
        cwd="~/projects/support-bot"
        prompt="use the build-agent skill to scaffold a support bot"
      />
    </Backdrop>
  );
}
