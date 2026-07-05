import { Backdrop } from "@/components/remocn/backdrop";
import { DynamicGrid } from "@/components/remocn/dynamic-grid";
import { InlineHighlight } from "@/components/remocn/inline-highlight";
import { ACCENT } from "@/theme";

export function ValueLine() {
  return (
    <Backdrop
      fill={
        <DynamicGrid
          background="#0a0a0a"
          lineColor="#151515"
          cellSize={48}
          speed={0.3}
        />
      }
      padding={0}
    >
      <InlineHighlight
        before="A real agent, "
        highlight="not just boilerplate."
        baseColor="#fafafa"
        highlightColor={ACCENT}
        fontSize={56}
        fontWeight={600}
      />
    </Backdrop>
  );
}
