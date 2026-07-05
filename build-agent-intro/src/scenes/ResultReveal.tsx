import { Backdrop } from "@/components/remocn/backdrop";
import { ProgressSteps } from "@/components/remocn/progress-steps";
import { ACCENT, BG, FG } from "@/theme";

const STEPS = [
  { label: "Agent loop" },
  { label: "Tools" },
  { label: "API + UI" },
  { label: "Observability" },
  { label: "Deploy" },
];

export function ResultReveal() {
  return (
    <Backdrop fill={{ type: "color", value: BG }} padding={0}>
      <ProgressSteps
        steps={STEPS}
        activeColor={ACCENT}
        inactiveColor="#27272a"
        textColor={FG}
        stepDuration={32}
      />
    </Backdrop>
  );
}
