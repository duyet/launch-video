import { Backdrop } from "@/components/remocn/backdrop";
import { CtaLine } from "@/components/CtaLine";
import { ShaderNeuroNoise } from "@/components/remocn/shader-neuro-noise";

export function Hook() {
  return (
    <Backdrop
      fill={
        <ShaderNeuroNoise
          colorFront="#4a3a35"
          colorMid="#2a201d"
          colorBack="#0a0a0a"
          brightness={0.06}
          contrast={0.3}
          speed={0.25}
        />
      }
      padding={0}
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
          fontSize={46}
        />
      </div>
    </Backdrop>
  );
}
