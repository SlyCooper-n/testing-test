import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./core/tests/setup.ts"],
    coverage: {
      enabled: true,
      exclude: ["**/*.{test,spec}.{js,ts,jsx,tsx}", "**/setup.ts"],
    },
  },
});
