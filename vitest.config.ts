import { defineConfig } from "vitest/config";

  export default defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./tests/setup.ts"],
      coverage: {
        enabled: true,
        exclude: ["**/*.{test,spec}.{js,ts,jsx,tsx}"],
      },
    },
  });
