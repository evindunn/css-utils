const path = require("path");
const MiniCss = require("mini-css-extract-plugin");
const OptimizeCss = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: "./src/main.less",
    mode: "production",
    stats: {
        all: false,
        assets: true,
        errors: true
    },
    output: {
        path: path.join(__dirname, "dist")
    },
    plugins: [new MiniCss()],
    optimization: {
        minimizer: [new OptimizeCss({})]
    },
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/i,
                use: [
                    { loader: MiniCss.loader },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ],
            },
        ],
    }
}
