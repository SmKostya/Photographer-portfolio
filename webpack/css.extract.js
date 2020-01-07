let ExctractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(paths){
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/i,
                    include: paths,
                    use: ExctractTextPlugin.extract({
                        publicPath: "../",
                        fallback: 'style-loader',
                        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                    }),
                },
                {
                    test: /\.css$/i,
                    include: paths,
                    use: ExctractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['style-loader', 'css-loader', 'postcss-loader'],
                    }),                   
                },
            ],
        },
        plugins: [
            new ExctractTextPlugin("./css/[name].css]"),
        ],
    };
};