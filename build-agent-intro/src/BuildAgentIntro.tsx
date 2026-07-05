import { loadFont as loadMono } from "@remotion/google-fonts/GeistMono";
import { loadFont as loadSans } from "@remotion/google-fonts/Inter";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import type { CSSProperties } from "react";
import { ditherDissolve } from "@/components/remocn/dither-dissolve";
import { grainDissolve } from "@/components/remocn/grain-dissolve";
import { pushThrough } from "@/components/remocn/push-through";
import { ShaderGrainGradient } from "@/components/remocn/shader-grain-gradient";
import { whipPan } from "@/components/remocn/whip-pan";
import { AgentChat } from "@/scenes/AgentChat";
import { FrameworkList } from "@/scenes/FrameworkList";
import { Hook } from "@/scenes/Hook";
import { ScaffoldLayers } from "@/scenes/ScaffoldLayers";
import { SignOff } from "@/scenes/SignOff";
import { TerminalRun } from "@/scenes/TerminalRun";

const { fontFamily: sansFamily } = loadSans();
const { fontFamily: monoFamily } = loadMono();

const HOOK = 60;
const CHAT = 130;
const TERMINAL = 150;
const SCAFFOLD = 180;
const FRAMEWORKS = 170;
const SIGNOFF = 130;
const T1 = 40; // hook -> chat (grain-dissolve)
const T2 = 40; // chat -> terminal (dither-dissolve)
const T3 = 60; // terminal -> scaffold layers (grain-dissolve)
const T4 = 16; // scaffold layers -> framework list
const T5 = 24; // framework list -> sign-off

export const BUILD_AGENT_INTRO_DURATION =
  HOOK +
  CHAT +
  TERMINAL +
  SCAFFOLD +
  FRAMEWORKS +
  SIGNOFF -
  (T1 + T2 + T3 + T4 + T5);

export function BuildAgentIntro() {
  return (
    <div
      style={
        {
          position: "relative",
          width: "100%",
          height: "100%",
          "--font-geist-sans": sansFamily,
          "--font-geist-mono": monoFamily,
        } as CSSProperties
      }
    >
      <ShaderGrainGradient
        colors={["#14110d", "#2a1f15", "#5a4030"]}
        colorBack="#0a0a0a"
        shape="blob"
        softness={0.7}
        intensity={0.6}
        noise={0.06}
        speed={0.4}
      />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={HOOK}>
          <Hook />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          timing={linearTiming({ durationInFrames: T1 })}
          presentation={grainDissolve({
            colors: ["#2a221e", "#4a3a32", "#8f7d6e"],
            colorBack: "#0a0a0a",
          })}
        />

        <TransitionSeries.Sequence durationInFrames={CHAT}>
          <AgentChat />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          timing={linearTiming({ durationInFrames: T2 })}
          presentation={ditherDissolve({
            colorBack: "#0a0a0a",
            colorFront: "#5a4a42",
          })}
        />

        <TransitionSeries.Sequence durationInFrames={TERMINAL}>
          <TerminalRun />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          timing={linearTiming({ durationInFrames: T3 })}
          presentation={grainDissolve({
            colors: ["#2a221e", "#3a2e28", "#8f7d6e"],
            colorBack: "#0a0a0a",
          })}
        />

        <TransitionSeries.Sequence durationInFrames={SCAFFOLD}>
          <ScaffoldLayers />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          timing={linearTiming({ durationInFrames: T4 })}
          presentation={whipPan({ direction: "left" })}
        />

        <TransitionSeries.Sequence durationInFrames={FRAMEWORKS}>
          <FrameworkList />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          timing={linearTiming({ durationInFrames: T5 })}
          presentation={pushThrough()}
        />

        <TransitionSeries.Sequence durationInFrames={SIGNOFF}>
          <SignOff />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </div>
  );
}
