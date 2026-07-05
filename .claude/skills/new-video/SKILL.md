---
name: new-video
description: Scaffold a new launch-video folder in this repo (independent Remotion + Bun project, remocn-ready). Use when the user asks to start a new video, create another launch video, or add a video folder alongside build-agent-intro.
---

Scaffold `<folder-name>/` as a standalone Remotion project matching the pattern established by `build-agent-intro/` in this repo. Ask the user for the folder name if not given.

## Files to create

`<folder-name>/package.json`:
```json
{
  "name": "<folder-name>",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "remotion studio src/index.ts",
    "build": "remotion render src/index.ts <CompositionId> out/<folder-name>.mp4 --gl=angle",
    "still": "remotion still src/index.ts <CompositionId> out/<folder-name>.png --gl=angle",
    "upgrade": "remotion upgrade"
  },
  "dependencies": {
    "@remotion/cli": "4.0.484",
    "@remotion/google-fonts": "4.0.484",
    "@remotion/transitions": "4.0.484",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "remotion": "4.0.484"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "typescript": "^5.6.3"
  }
}
```
Only add `@paper-design/shaders-react` + `culori` + `@types/culori` if the video actually uses shader components or `claude-code`/`typewriter`-family remocn-ui components — don't include them speculatively.

`<folder-name>/tsconfig.json` — copy verbatim from `build-agent-intro/tsconfig.json` (ES2018 target, `@/*` → `src/*` path alias, strict mode).

`<folder-name>/remotion.config.ts`:
```ts
import path from "node:path";
import { Config } from "@remotion/cli/config";

// Needed for the @paper-design/shaders-react backgrounds/transitions to
// render in headless/sandboxed environments without a real GPU.
Config.setChromiumOpenGlRenderer("angle");

Config.overrideWebpackConfig((config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve?.alias,
      "@": path.resolve(process.cwd(), "src"),
    },
  },
}));
```

`<folder-name>/.gitignore`:
```
node_modules
out/
.DS_Store
*.log
```

`<folder-name>/src/index.ts`:
```ts
import { registerRoot } from "remotion";
import { Root } from "./Root";

registerRoot(Root);
```

`<folder-name>/src/Root.tsx` — a `<Composition>` registered at `1280x720 @ 30fps` (remocn's canvas standard), id matching whatever `<CompositionId>` you used in package.json's scripts.

`<folder-name>/public/` — empty dir for static assets (load via `staticFile()`, never `import`).

## After scaffolding

1. `cd <folder-name> && bun install`.
2. Read `.agents/skills/remocn/SKILL.md` and `references/anatomy.md` before composing — pick an archetype from `references/archetypes/index.md` matching what the user described.
3. Fetch remocn components via `curl -s https://remocn.dev/r/<name>.json | jq -r '.files[0].content'` into `src/components/remocn/<name>.tsx` rather than trusting the markdown docs' example props — this repo has hit real bugs (hardcoded backgrounds, layout math relative to the wrong frame count, missing type imports) in fetched components before. Read each fetched file before wiring it into a scene.
4. Verify with `bunx tsc --noEmit`, then `remotion still` at a few key frames before a full `remotion render`.
