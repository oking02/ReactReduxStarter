// var ETP = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/built',
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
        loaders: ['style', 'css', 'autoprefixer' , 'sass']
      }

    //   {
    //     test: /\.scss$/,
    //     loader: ETP.extract('style-loader', ['css', 'autoprefixer' , 'sass'])
    //   }
    ]
  },
  // plugins : [
  //   new ETP('/built/app.css')
  // ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './built'
  }
};
