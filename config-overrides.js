/* config-overrides.js */

const webpack = require('webpack');

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "fs": false,
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "timers": require.resolve("timers-browserify"),
        "url": require.resolve("url"),
        "util": require.resolve("util-browser"),
        "querystring": require.resolve("querystring-es3"),
        "events": require.resolve("events")
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ]);
    config.experiments = {
        asyncWebAssembly: true,
        topLevelAwait: true
    };
    return config;
}