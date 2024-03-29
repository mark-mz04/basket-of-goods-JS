const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        server: path.join(__dirname, './src/server/server.js'),
    },

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/",
        filename: "server/[name].js"
    },

    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/server/dataBase',
                to: 'server/dataBase/[name][ext]',
                toType: 'template'
            }]
        }),
    ]
}