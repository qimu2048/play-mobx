var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      // query: { presets: ['react', 'stage-1', 'es2015'] },
      include: path.join(__dirname, 'src')
    }]
  },
  devServer: {
    port: 9000
  }
};