const path = require('path');
const fs = require('fs-extra'); // fs-extra is a module that extends the standard fs module.
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const packageJson = require('../../package.json');
const { config } = require('process');

let project = packageJson.projectName; // project folder name
const docsPublicPath = "../../../../docs/public/"; // path to docs/public folder

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: `./templates/${project}/src/main.ts`,
    experiments: {
      outputModule: true
    },
    devtool: isProduction ? false : 'source-map', // Enable source maps only in development
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              },
            },
          ],
          exclude: /node_modules/
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Extracts CSS into separate files
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, `../${project}/public`),
      libraryTarget: 'module',
      // clean: true,
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          'main.js', 
          'main.js.map', 
          'main.css', 
          'main.css.map', 
          docsPublicPath + 'main.js', 
          docsPublicPath + 'main.js.map', 
          docsPublicPath + 'main.css', 
          docsPublicPath + 'main.css.map'],
        dangerouslyAllowCleanPatternsOutsideProject: true,
        dry: false
      }),
      new CopyWebpackPlugin({
        patterns: [
          { 
            from: path.resolve(__dirname, `../${project}/public`), 
            to: docsPublicPath,
            noErrorOnMissing: false // Add this option to prevent the build from failing if the source directory doesn't exist
          }
        ]
      }),
      new MiniCssExtractPlugin({
        filename: 'main.css',
      })
    ]
  }
};


