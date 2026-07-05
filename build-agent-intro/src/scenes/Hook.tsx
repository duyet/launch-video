import { CtaLine } from "@/components/CtaLine";
import { Backdrop } from "@/components/remocn/backdrop";
import { ShaderGrainGradient } from "@/components/remocn/shader-grain-gradient";

const LIGHT_FG = "#171717";

export function Hook() {
  return (
    <Backdrop
      fill={
        <ShaderGrainGradient
          colors={["#faf5ec", "#e8c79c", "#cf9b6a"]}
          colorBack="#f6f1e8"
          shape="blob"
          softness={0.6}
          intensity={0.85}
          noise={0.06}
          speed={0.8}
        />
      }
      padding={0}
      radius={0}
      shadow=""
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CtaLine
          text="$ npx skills add duyet/build-agent"
          appearAt={4}
          fontSize={56}
          color={LIGHT_FG}
        />
      </div>
    </Backdrop>
  );
}
