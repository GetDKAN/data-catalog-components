const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
			{
      test: /\.(woff|woff2|eot|ttf|svg|png)$/,
      include: path.resolve(__dirname, "../src"),
      use: [
        {
          loader: 'url-loader',
        },
        {
          loader: 'file-loader',
        },
      ],
    }
    ],
  },
};
