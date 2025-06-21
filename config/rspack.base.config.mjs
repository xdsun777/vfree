import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rspack } from '@rspack/core';
import { VueLoaderPlugin } from 'vue-loader';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

const __dirname = path.join(dirname(fileURLToPath(import.meta.url)), '../');
console.log('rspack.base.config.mjs', __dirname);

export default {
    name: 'base',
    target: 'web',
    context: __dirname,
    entry: {
        page: path.join(__dirname, './src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: './[contenthash].bundle.js',
        filename: './[name].bundle.js',
        publicPath: 'auto',
        clean: true,
        enabledWasmLoadingTypes: ['fetch'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@views': path.resolve(__dirname, './src/views'),
            '@router': path.resolve(__dirname, './src/router'),
            '@store': path.resolve(__dirname, './src/store'),
            '@apis': path.resolve(__dirname, './src/apis'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@wasm-pkg': path.resolve(__dirname, './pkg'),
        },
    },
    plugins: [
        new rspack.HtmlRspackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        }),
        new VueLoaderPlugin(),
        new rspack.DefinePlugin({
            // 传入插件选项
            __VUE_OPTIONS_API__: 'true',
            __VUE_PROD_DEVTOOLS__: 'true',
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
        }),
        process.env.RSDOCTOR &&
            new RsdoctorRspackPlugin({
                // 插件选项
            }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|wasm|woff2)$/,
                type: 'asset/resource',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // 注意，为了绝大多数功能的可用性，请确保该选项为 `true`
                    experimentalInlineMatchResource: true,
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'builtin:lightningcss-loader',
                        options: {
                            targets: ['chrome >= 87', 'edge >= 88', '> 0.5%'],
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'builtin:swc-loader',
                    options: {
                        // Enable source map
                        sourceMap: true,
                        target: 'es5',
                        jsc: {
                            parser: {
                                syntax: 'ecmascript',
                                jsx: true,
                            },
                            preserveAllComments: false,
                        },
                    },
                },
                type: 'javascript/auto',
            },
        ],
    },
    devServer: {
        allowedHosts: ['.localhost'],
    },
    //调试：该选项用于控制 Source Map 的生成行为。
    devtool: 'source-map',
    // 性能提示
    performance: {
        assetFilter: (assetFilename) => {
            return (
                assetFilename.endsWith('.js') || assetFilename.endsWith('.css')
            );
        },
        hints: false,
        maxEntrypointSize: 400000,
        maxAssetSize: 100000,
    },
    // 该选项允许用户开启和尝试一些实验性的功能。
    experiments: {
        //支持基于新规范的 WebAssembly，这使 WebAssembly 模块成为异步模块。
        asyncWebAssembly: true,
        //开启之后，将尽可能输出符合 ECMAScript 语法的代码。例如，使用 import() 加载 chunk，使用 ESM exports 等等。
        outputModule: false,
        //开启懒编译，rspack 会在编译时将所有的 chunk 都标记为懒加载。
        lazyCompilation: false,
        css: true,
    },
};
