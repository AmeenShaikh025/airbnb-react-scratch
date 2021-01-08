const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const mode = isProd ? 'production' : 'development';

const cssDev = ['style-loader', 'css-loader'];
const cssProd = [MiniCssExtractPlugin.loader, 'css-loader'];
const cssConfig = isProd ? cssProd : cssDev;


const pluginDev = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    })
];

const pluginProd = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
        }
    }),
    new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css"
    }),
    new CleanWebpackPlugin()];

const pluginConfig = isProd ? pluginProd : pluginDev;


const outputDev = {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js',
    publicPath: '/'
};
const outputProd = {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.[contenthash].js',
    publicPath: '/'
};
const outputConfig = isProd ? outputProd : outputDev;

const optimizeProd = {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`
      new CssMinimizerPlugin(),
    ],
  };
const optimizeConfig = isProd ? optimizeProd : null;


module.exports = {
    mode: mode,
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: outputConfig,
    plugins: pluginConfig,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i, 
                use: cssConfig 
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg|ttf|webp)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        //name:"[name].[hash].[ext]",
                        name: '[sha512:hash:base64:7].[ext]',
                        outputPath: "images"
                    }
                }
            }

        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    optimization: {
        minimize: true,
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`
          new CssMinimizerPlugin(),
        ],
      },
      devServer: {
        historyApiFallback: true,
      }
}
