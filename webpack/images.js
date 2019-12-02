module.exports = function() {
    return {
      module: {
        rules: [
          {
            test: /\.(jpg|png|svg|jpeg)$/,
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]"
            },
          },
        ],
      },
    };
  };