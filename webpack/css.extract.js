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
                        use: ['css-loader', 'sass-loader'],
                    }),
                },
                {
                    test: /\.css$/i,
                    include: paths,
                    use: ExctractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader'],
                    }),                   
                },
            ],
        },
        plugins: [
            new ExctractTextPlugin("./css/[name].css]"),
        ],
    };
};