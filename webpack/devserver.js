module.exports = function () {
    return {
        devServer: {
            // overlay: true,
            historyApiFallback: {
                rewrites: [
                  { from: /^\/$/, to: '/index.html' },
                  { from: /^\/contact$/, to: '/contact.html' },
                  { from: /portfolio$/, to: '/portfolio.html' },
                  // { from: /^\/portfolio\/*\/$/, to: '/portfolio.html' },
                  // { from: /^\/portfolio\/weeding/, to: '/portfolio.html' },
                  // { from: /^\/portfolio\/*/, to: '/portfolio.html' },
                  // { from: /^\/portfolio\/weeding\//, to: '/portfolio.html' },
                  // { from: /portfolio\/$/, to: '/portfolio.html' },
                  // { from: /^\/walking/, to: '/portfolio.html#walking' },
                  // { from: /^\/nature/, to: '/portfolio.html#nature' },
                  // { from: /^\/portfolio\/other/, to: '/portfolio.html#other' },
                  { from: /./, to: '/404.html' }
                ]
              }
        },
    }
}