const path = require('path');

module.exports = {
  entry: {
      client: `./src/client`
  },
  output: {
    publicPath: 'public/',
    filename: '[name].js',
    path: `${path.resolve(__dirname)}/public`,
    chunkFilename: '[name].bundle.js'
  }, 
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(bower_components,node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
