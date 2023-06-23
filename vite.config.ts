import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import { externalizeDeps } from "vite-plugin-externalize-deps";

const entryPath = `src/lib/index.tsx`;
const packageName = "tw-elements-react";
const outDir = process.env.mode === "docs" ? "dist-docs" : "dist";

const libPlugins = [
  react(),
  dts({
    copyDtsFiles: false,
    entryRoot: entryPath,
    outputDir: `./${outDir}/types/dts`,
  }),
  externalizeDeps(),
];

const docsPlugins = [react()];

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // for popper to not crash in docs
    "process.env": {},
    initiatedComponents: [],
  },
  plugins: process.env.mode === "docs" ? docsPlugins : libPlugins,
  resolve: {
    alias: {
      "tw-elements-react": path.resolve("./src/lib/index.tsx"),
    },
  },
  build: {
    outDir: outDir,
    emptyOutDir: process.env.buildFile ? false : true,
    cssCodeSplit: true,
    copyPublicDir: false,
    lib: process.env.mode !== "docs" && {
      entry: path.resolve(__dirname, entryPath),
      name: "te",
      formats: ["es", "umd"],
      fileName: (format) => `js/${packageName}.${format}.min.js`,
    },
    sourcemap: true,
    rollupOptions: {},
  },
});
