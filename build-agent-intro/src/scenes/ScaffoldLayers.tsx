import { Backdrop } from "@/components/remocn/backdrop";
import { ShortSlideDown } from "@/components/remocn/short-slide-down";
import { BG, FG } from "@/theme";

export function ScaffoldLayers() {
  return (
    <Backdrop
      fill={{ type: "color", value: BG }}
      padding={0}
      radius={0}
      shadow=""
    >
      <ShortSlideDown
        text="Core Tools Model API UI Persist Observe Deploy"
        fontSize={96}
        fontWeight={700}
        color={FG}
      />
    </Backdrop>
  );
}
