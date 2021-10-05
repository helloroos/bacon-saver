// const { merge } = require("webpack-merge");
// const common = require("./webpack.common.js");

// module.exports = merge(common, {
//     mode: "production",
//     devtool: "source-map"
// });

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin()
    ]
});