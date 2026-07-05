import type { CSSProperties } from "react";
import { loadFont as loadSans } from "@remotion/google-fonts/Inter";
import { loadFont as loadMono } from "@remotion/google-fonts/GeistMono";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { grainDissolve } from "@/components/remocn/grain-dissolve";
import { pushThrough } from "@/components/remocn/push-through";
import { whipPan } from "@/components/remocn/whip-pan";
import { AgentChat } from "@/scenes/AgentChat";
import { FrameworkList } from "@/scenes/FrameworkList";
import { Hook } from "@/scenes/Hook";
import { SignOff } from "@/scenes/SignOff";
import { TerminalRun } from "@/scenes/TerminalRun";

const { fontFamily: sansFamily } = loadSans();
const { fontFamily: monoFamily } = loadMono();

const HOOK = 60;
const CHAT = 130;
const TERMINAL = 150;
const FRAMEWORKS = 170;
const SIGNOFF = 130;
const T1 = 16; // hook -> chat
const T2 = 16; // chat -> terminal
const T3 = 60; // terminal -> framework list
const T4 = 24; // framework list -> sign-off

export const BUILD_AGENT_INTRO_DURATION =
  HOOK + CHAT + TERMINAL + FRAMEWORKS + SIGNOFF - (T1 + T2 + T3 + T4);

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
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={HOOK}>
          <Hook />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          timing={linearTiming({ durationInFrames: T1 })}
          presentation={whipPan({ direction: "left" })}
        />

        <TransitionSeries.Sequence durationInFrames={CHAT}>
          <AgentChat />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          timing={linearTiming({ durationInFrames: T2 })}
          presentation={whipPan({ direction: "down" })}
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

        <TransitionSeries.Sequence durationInFrames={FRAMEWORKS}>
          <FrameworkList />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          timing={linearTiming({ durationInFrames: T4 })}
          presentation={pushThrough()}
        />

        <TransitionSeries.Sequence durationInFrames={SIGNOFF}>
          <SignOff />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </div>
  );
}
