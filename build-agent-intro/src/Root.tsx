import { Composition } from "remotion";
import { BUILD_AGENT_INTRO_DURATION, BuildAgentIntro } from "./BuildAgentIntro";

export function Root() {
  return (
    <>
      <Composition
        id="BuildAgentIntro"
        component={BuildAgentIntro}
        durationInFrames={BUILD_AGENT_INTRO_DURATION}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
}
