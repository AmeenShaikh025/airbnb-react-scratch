const path = require('path');
const common = require("./webpack.common")
const {merge} = require("webpack-merge")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.[contenthash].js'
    },
    plugins: [
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
        new CleanWebpackPlugin()],
    module: {
        rules: [
            { 
                test: /\.css$/i, 
                use: [MiniCssExtractPlugin.loader, 'css-loader'] 
            },
        ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`
        new CssMinimizerPlugin(),
      ],
    },
});
