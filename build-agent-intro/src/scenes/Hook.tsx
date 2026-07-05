import { CtaLine } from "@/components/CtaLine";
import { Backdrop } from "@/components/remocn/backdrop";

const LIGHT_BG = "#f2f0eb";
const LIGHT_FG = "#171717";

export function Hook() {
  return (
    <Backdrop
      fill={{ type: "color", value: LIGHT_BG }}
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
          fontSize={46}
          color={LIGHT_FG}
        />
      </div>
    </Backdrop>
  );
}
