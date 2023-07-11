import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import html from "rollup-plugin-html";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    typescript(),
    postcss({
      extensions: [".css"],
    }),
    html({
      include: "**/*.html",
    }),
  ],
};
