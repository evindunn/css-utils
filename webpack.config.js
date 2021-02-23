const path = require("path");
const MiniCss = require("mini-css-extract-plugin");
const RemoveCssJsonPlugin = require("./RemoveCssJsonPlugin");

module.exports = {
    mode: "production",
    entry: { "css-utils": path.resolve(__dirname, "src", "main.scss") },
    output: { path: path.join(__dirname, "dist") },
    plugins: [
        new RemoveCssJsonPlugin(),
        new MiniCss({ filename: "[name].css" }),
    ],
    stats: {
        all: false,
        assets: true,
        errors: true
    },
    module: {
        rules: [
            {
                test: /\.(c|s[ac])ss$/i,
                use: [
                    MiniCss.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
        ],
    }
}
