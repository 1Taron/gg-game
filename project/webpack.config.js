const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry: {
        index:"./src/js/index.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'relese')
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.mp3$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
        filename:"./html/index.html",
        template:"./src/html/index.html",
        chunks:['index']
      }),
      ],
      
  };