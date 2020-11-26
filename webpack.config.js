const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      auto: true,
      exportLocalsConvention: 'camelCase',
    },
  },
};

const common = {
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', cssLoader],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', cssLoader, 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

const frontend = {
  entry: ['./index.tsx'],
  output: {
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};

const backend = {
  entry: ['./server/index.ts'],
  output: {
    filename: 'server.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [new NodemonPlugin()],
};

module.exports = [
  { ...common, ...frontend },
  { ...common, ...backend },
];
