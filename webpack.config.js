const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

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
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: path.resolve(__dirname, 'src'),
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', cssLoader],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        use: ['style-loader', cssLoader, 'sass-loader'],
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

const frontend = {
  entry: ['./src/index.tsx'],
  output: {
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};

const backend = {
  entry: ['./src/server/index.ts'],
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
