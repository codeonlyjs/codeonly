import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import bundleSize from 'rollup-plugin-bundle-size';

export default {
    input: "codeonly.js",
    plugins: [
        replace({
            preventAssignment: true,
            values: {
                'env.browser': true,
            }
        }),
        bundleSize(),
    ],
    output: [
        {
            file: "./dist/codeonly.js",
            format: "es",
            plugins: [
            ],
        },
        {
            file: "./dist/codeonly.min.js",
            format: "es",
            plugins: [
                terser(),
            ],
        },
    ]
}