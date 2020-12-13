var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
      },
    module: {
        rules: [
            { 
                test: /\.(js)$/, 
                exclude: /(node_modules|bower_components)/,
                use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-env']
                   }
                }
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
        // "@babel/plugin-transform-react-jsx"
    ]
}