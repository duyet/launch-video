import { Backdrop } from "@/components/remocn/backdrop";
import { CtaLine } from "@/components/CtaLine";
import { DynamicGrid } from "@/components/remocn/dynamic-grid";
import { InlineHighlight } from "@/components/remocn/inline-highlight";
import { ACCENT } from "@/theme";

export function Hook() {
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
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
        }}
      >
        <div style={{ position: "relative", width: 1000, height: 90 }}>
          <InlineHighlight
            before="This is "
            highlight="build-agent."
            baseColor="#fafafa"
            highlightColor={ACCENT}
            fontSize={56}
            fontWeight={600}
            speed={2.2}
          />
        </div>
        <CtaLine text="npx skills add duyet/build-agent" appearAt={22} />
      </div>
    </Backdrop>
  );
}
