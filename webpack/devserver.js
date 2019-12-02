module.exports = function () {
    return {
        devServer: {
            overlay: true,
            historyApiFallback: {
                rewrites: [
                  { from: /^\/en/, to: '/index.html' },
                  { from: /^\/en\/contact/, to: '/contact.html' },
                  { from: /./, to: '/404.html' }
                ]
              }
        },
    }
}