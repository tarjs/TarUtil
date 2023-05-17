import typescriptRollupPlugin from "rollup-plugin-ts";
import { uglify } from "@blaumaus/rollup-plugin-uglify";

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'es'
    },
    plugins: [
        typescriptRollupPlugin(),
        uglify()
    ]
}