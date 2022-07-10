import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./"),
  //   },
  // },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./core/tests/setup.ts"],
    coverage: {
      enabled: true,
      include: ["./components/**/*.tsx"],
      // exclude: ["**/*.{test,spec}.{js,ts,jsx,tsx}", "**/setup.ts"],
    },
  },
});
