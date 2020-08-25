const path = require("path");
const MiniCss = require("mini-css-extract-plugin");
const OptimizeCss = require("optimize-css-assets-webpack-plugin");
const OnBuild = require("on-build-webpack");
const fs = require("fs");

module.exports = {
    mode: "production",
    entry: { "css-utils": path.resolve(__dirname, "src", "main.less") },
    output: { path: path.join(__dirname, "dist") },
    optimization: { minimizer: [new OptimizeCss()] },
    plugins: [
        new MiniCss({ filename: "[name].css" }),
        new OnBuild(() => fs.unlinkSync(path.join(__dirname, "dist", "css-utils.js")))
    ],
    stats: {
        all: false,
        assets: true,
        errors: true
    },
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/i,
                use: [
                    MiniCss.loader,
                    "css-loader",
                    "less-loader"
                ],
            },
        ],
    }
}
