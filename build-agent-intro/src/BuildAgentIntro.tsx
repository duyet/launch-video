import type { CSSProperties } from "react";
import { loadFont as loadSans } from "@remotion/google-fonts/Inter";
import { loadFont as loadMono } from "@remotion/google-fonts/GeistMono";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { pushThrough } from "@/components/remocn/push-through";
import { whipPan } from "@/components/remocn/whip-pan";
import { AgentChat } from "@/scenes/AgentChat";
import { Hook } from "@/scenes/Hook";
import { ResultReveal } from "@/scenes/ResultReveal";
import { SignOff } from "@/scenes/SignOff";
import { TerminalRun } from "@/scenes/TerminalRun";
import { ValueLine } from "@/scenes/ValueLine";

const { fontFamily: sansFamily } = loadSans();
const { fontFamily: monoFamily } = loadMono();

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
      <TransitionSeries.Sequence durationInFrames={150}>
        <Hook />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={linearTiming({ durationInFrames: 20 })}
        presentation={whipPan({ direction: "left" })}
      />

      <TransitionSeries.Sequence durationInFrames={260}>
        <AgentChat />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={linearTiming({ durationInFrames: 20 })}
        presentation={whipPan({ direction: "down" })}
      />

      <TransitionSeries.Sequence durationInFrames={400}>
        <TerminalRun />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={linearTiming({ durationInFrames: 40 })}
        presentation={pushThrough()}
      />

      <TransitionSeries.Sequence durationInFrames={150}>
        <ValueLine />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={linearTiming({ durationInFrames: 26 })}
        presentation={whipPan({ direction: "left" })}
      />

      <TransitionSeries.Sequence durationInFrames={210}>
        <ResultReveal />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={linearTiming({ durationInFrames: 20 })}
        presentation={fade()}
      />

        <TransitionSeries.Sequence durationInFrames={150}>
          <SignOff />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </div>
  );
}

export const BUILD_AGENT_INTRO_DURATION =
  150 + 260 + 400 + 150 + 210 + 150 - (20 + 20 + 40 + 26 + 20);
