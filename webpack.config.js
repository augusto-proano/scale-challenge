module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: __dirname
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node-modules/,
          query: {
            presets: ['react']
          }
        }
      ]
    }
  };