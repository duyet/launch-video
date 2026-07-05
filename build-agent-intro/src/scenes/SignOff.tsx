import { CtaLine } from "@/components/CtaLine";
import { Backdrop } from "@/components/remocn/backdrop";
import { MicroScaleFade } from "@/components/remocn/micro-scale-fade";
import { BG, FG, FG_MUTED } from "@/theme";

export function SignOff() {
  return (
    <Backdrop
      fill={{ type: "color", value: BG }}
      padding={0}
      radius={0}
      shadow=""
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 22,
        }}
      >
        <div style={{ position: "relative", width: 640, height: 90 }}>
          <MicroScaleFade
            text="build-agent"
            fontSize={64}
            color={FG}
            speed={1.5}
          />
        </div>
        <div style={{ position: "relative", width: 760, height: 50 }}>
          <MicroScaleFade
            text="Scaffold agents on any framework."
            fontSize={26}
            fontWeight={500}
            color={FG_MUTED}
            speed={1.5}
          />
        </div>
        <div style={{ height: 10 }} />
        <CtaLine text="$ npx skills add duyet/build-agent" appearAt={22} />
      </div>
    </Backdrop>
  );
}
