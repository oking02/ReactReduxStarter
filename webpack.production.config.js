var ETP = require("extract-text-webpack-plugin");


module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'

  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },

      {
        test: /\.scss$/,
        loader: ETP.extract('style-loader', ['css', 'autoprefixer' , 'sass'])
      }
    ]
  },
  plugins : [
    new ETP('app.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

