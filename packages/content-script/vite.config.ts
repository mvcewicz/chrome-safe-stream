import { defineConfig } from "vite";
import * as path from "path";

const config = defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "."),
    },
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: "./src/main.ts",
      fileName: "content",
      name: "content",
    },
  },
});

export default config;
