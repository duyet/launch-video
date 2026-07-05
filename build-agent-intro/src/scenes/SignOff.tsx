import { CtaLine } from "@/components/CtaLine";
import { Backdrop } from "@/components/remocn/backdrop";
import { MaskRevealUp } from "@/components/remocn/mask-reveal-up";
import { FG, FG_MUTED } from "@/theme";

export function SignOff() {
  return (
    <Backdrop fill={{ type: "transparent" }} padding={0} radius={0} shadow="">
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
        <div style={{ position: "relative", width: 640, height: 110 }}>
          <MaskRevealUp
            text="build-agent"
            fontSize={88}
            color={FG}
            speed={1.2}
            exit={false}
          />
        </div>
        <div style={{ position: "relative", width: 760, height: 44 }}>
          <MaskRevealUp
            text="Scaffold agents on any framework."
            fontSize={24}
            fontWeight={500}
            color={FG_MUTED}
            speed={1.4}
            exit={false}
          />
        </div>
        <div style={{ height: 10 }} />
        <CtaLine text="$ npx skills add duyet/build-agent" appearAt={22} />
      </div>
    </Backdrop>
  );
}
