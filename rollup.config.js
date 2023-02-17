import typescriptRollupPlugin from "rollup-plugin-ts";

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'es'
    },
    plugins: [
        typescriptRollupPlugin()
    ]
}