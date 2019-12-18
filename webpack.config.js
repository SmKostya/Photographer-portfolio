let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let merge = require("webpack-merge");
let pug = require("./webpack/pug");
let bable = require("./webpack/bable");
let devserver = require("./webpack/devserver");
let scss = require("./webpack/scss");
let css = require("./webpack/css");
let ExtractCSS = require("./webpack/css.extract");
let images = require("./webpack/images");
let webpack = require("webpack");

let conf = merge([{
        entry: {
            "index": "./src/pages/index/index.js",
            "contact": "./src/pages/contact/contact.js",
            "portfolio": "./src/pages/portfolio/portfolio.js",
            "portfolio_categori": "./src/pages/ajax/portfolio_categori.js",
        },
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "[name].js",
        },

        module: {
            rules: [{

            }, ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                chunks: ["index"],
                template: "./src/pages/index/index.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "contact.html",
                chunks: ["contact"],
                template: "./src/pages/contact/contact.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "portfolio.html",
                chunks: ["portfolio"],
                template: "./src/pages/portfolio/portfolio.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "black_and_white.html",
                chunks: ["black_and_white"],
                template: "./src/pages/ajax/black_and_white.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "boudoir.html",
                chunks: ["boudoir"],
                template: "./src/pages/ajax/boudoir.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "creative.html",
                chunks: ["creative"],
                template: "./src/pages/ajax/creative.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "experiments.html",
                chunks: ["experiments"],
                template: "./src/pages/ajax/experiments.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "landscape.html",
                chunks: ["landscape"],
                template: "./src/pages/ajax/landscape.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "loveStorie.html",
                chunks: ["loveStorie"],
                template: "./src/pages/ajax/loveStorie.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "parties.html",
                chunks: ["parties"],
                template: "./src/pages/ajax/parties.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "portrait.html",
                chunks: ["portrait"],
                template: "./src/pages/ajax/portrait.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "reporting.html",
                chunks: ["reporting"],
                template: "./src/pages/ajax/reporting.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "studio.html",
                chunks: ["studio"],
                template: "./src/pages/ajax/studio.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "wedding.html",
                chunks: ["wedding"],
                template: "./src/pages/ajax/wedding.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "walking.html",
                chunks: ["walking"],
                template: "./src/pages/ajax/walking.pug"
            }),
            // new HtmlWebpackPlugin({
            //     filename: "other.html",
            //     chunks: ["other"],
            //     template: "./src/pages/ajax/other.pug"
            // }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                '$': 'jquery',
                jquery: 'jquery',
                jQuery: 'jquery',
                'window.jquery': 'jquery',
                'window.jQuery': 'jquery',
            })
        ],
    },
    devserver(),
    bable(),
    pug(),
    scss(),
    css(),
    images(),
]);

module.exports = (env, options) => {
    let production = options.mode === "production";
    conf.devtool = production ?
        "source-map" :
        "eval-sourcemap";
    return conf;
}