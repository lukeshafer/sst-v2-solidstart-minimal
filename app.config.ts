import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "aws_lambda",
    output: {
      dir: "dist",
      publicDir: "dist/client",
    },
    esbuild: {
      options: {
        target: "esnext",
        treeShaking: true,
      },
    },
  },
});
