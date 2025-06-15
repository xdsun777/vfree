export default {
    extends: './rspack.base.config.mjs',
    name: 'dev',
    dependencies:['base'],
    profile: true,
    mode: 'development',
    watch: false,
    watchOptions: {
        ignored: /node_modules/,
        poll: true,
    }
};
