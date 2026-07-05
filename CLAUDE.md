# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo structure

This repo holds multiple launch videos, one per top-level folder (e.g. `build-agent-intro/`). Each folder is an **independent Remotion + Bun project** — its own `package.json`, `tsconfig.json`, `remotion.config.ts`, `bun.lock`, and `src/`. There is no shared root-level package.json; `cd` into a video's folder before running any command.

Standard layout inside a video folder:
```
src/
  index.ts          # registerRoot entry
  Root.tsx          # <Composition> registration
  <Name>.tsx         # TransitionSeries orchestrator
  theme.ts           # shared colors/fonts for that video
  scenes/            # one component per beat
  components/        # hand-authored one-offs (not from the registry)
  components/remocn/ # copy-pasted remocn components (you own this code — edit freely)
  lib/remocn-ui/      # shared remocn-ui runtime (timeline/theme/color helpers)
```

## Critical: shader rendering needs `--gl=angle`

Any component built on `@paper-design/shaders-react` (remocn's `shader-*` components and shader-based transitions like `grain-dissolve`) requires WebGL. Headless/sandboxed environments have no GPU by default and **will crash render/still with "WebGL is not supported"** unless the ANGLE software renderer is forced. Each video's `remotion.config.ts` should call `Config.setChromiumOpenGlRenderer("angle")`, and its `package.json` `build`/`still` scripts should pass `--gl=angle` explicitly as a backup. If you add a new video folder or run `remotion` commands ad hoc (not via the npm scripts), remember this flag — plain `npx remotion still ...` without it will fail on any shader component.

## Package manager & tooling

- **Bun**, not npm/yarn/pnpm — install with `bun install`, run scripts with `bun run <script>`.
- No linter or formatter is configured in this repo yet.
- No test suite exists. Verification is: `bunx tsc --noEmit` for type errors, then a `remotion still` render at a few key frames to visually confirm before doing a full render.

## Git conventions

- `out/` (rendered output) is gitignored per video folder — **do not commit rendered mp4/png output**. The root `.gitattributes` configures Git LFS for video/audio extensions (mp4, mov, webm, mkv, gif, mp3, wav, m4a) in case that changes later, but the current convention is to keep renders out of git entirely.
- No branch/PR conventions established yet — plain commits to `master`.

## remocn skill

The `remocn` skill (Remotion component catalog: text animations, transitions, backgrounds, UI blocks, shaders) and its `interactivity-best-practices` companion are symlinked into `.claude/skills/` and auto-trigger on video-composition tasks. The full reference docs (component props, design tokens, motion principles, anti-patterns, per-archetype recipes) live under `.agents/skills/remocn/references/` — read `references/anatomy.md` and `references/components/index.md` before composing a new video.

**Fetched remocn components can have real bugs** — verify against the actual registry source (`curl -s https://remocn.dev/r/<name>.json | jq -r '.files[0].content'`) rather than trusting the catalog's markdown docs blindly; several components in this repo needed patching after fetch (hardcoded backgrounds, layout math relative to the wrong frame count, missing type imports).
