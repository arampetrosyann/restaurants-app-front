const path = require('path');
const { merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 5050,
        compress: true,
        open: true,
    },
    plugins: [
        new PrettierPlugin(),
        new ESLintPlugin({
            exclude: [path.resolve(__dirname, "node_modules")],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: { importLoaders: 2 },
                    },
                ],
            },

            {
                test: /\.module\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: "[name]-[local]__[hash:base64:9]",
                            },
                        },
                    },
                ],
            },
        ],
    },
});
