import { rspack } from '@rspack/core';

export default {
    extends: './rspack.base.config.mjs',
    name: 'prod',
    dependencies: ['base'],
    mode: 'production',
    output: {
        filename: './[contenthash].js',
    },
    optimization: {
        splitChunks: {
            minSize: 0,
        },
        minimizer: [
            new rspack.SwcJsMinimizerRspackPlugin({
                // JS minimizer 配置
            }),
            new rspack.LightningCssMinimizerRspackPlugin({
                // CSS minimizer 配置
            }),
        ],
    },
    // plugins: [
    //     // 仅在 RSDOCTOR 为 true 时注册插件，因为插件会增加构建耗时
    //     process.env.RSDOCTOR &&
    //     new RsdoctorRspackPlugin({
    //         // 插件选项
    //         mode:'brief',
    //         port: 3000,
    //     }),
    // ].filter(Boolean),
};
