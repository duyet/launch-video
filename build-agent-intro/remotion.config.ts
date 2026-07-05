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
