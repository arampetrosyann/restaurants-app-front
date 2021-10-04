const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HTMLWebpackPlugin({
            template: "public/index.html",
        }),
    ],
    resolve: {
        plugins: [new DirectoryNamedWebpackPlugin(true)],
    },
    module: {
        rules: [
            {
                test: /\.(mjs|js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },

            {
                test: /\.html$/i,
                use: ["html-loader"],
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[contenthash].[ext]",
                        outputPath: "assets/images",
                    },
                },
            },

            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[hash].[name].[ext]",
                        outputPath: "assets/fonts",
                    },
                },
            },
        ],
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, `src/components`),
            Context: path.resolve(__dirname, `src/context`),
            Talons: path.resolve(__dirname, `src/talons`),
            Helpers: path.resolve(__dirname, `src/helpers`),
            Hooks: path.resolve(__dirname, `src/hooks`),
            Pages: path.resolve(__dirname, `src/pages`),
        },
    },
};
