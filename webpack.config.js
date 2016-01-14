module.exports = {
  entry: './src/entry.jsx',
  output: {
    filename: 'entry.js',
    path: './public',
  },
  resolve: {
    extensions: ['', '.jsx', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
    ],
  },
};
