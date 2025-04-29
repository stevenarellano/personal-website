const webpack = require('webpack');

module.exports = function override(config) {
    // Add fallback for 'buffer' module
    config.resolve.fallback = {
        ...config.resolve.fallback,
        buffer: require.resolve('buffer'),
    };

    // Add buffer to the ProvidePlugin
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
    ];

    return config;
}; 