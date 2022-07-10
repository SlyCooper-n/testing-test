/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
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
