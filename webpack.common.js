const path = require('path');


module.exports = {
    entry: './src/index.js',
    // devServer: {
    //     contentBase: './dist'
    //   },
    module: {
        rules: [
            { 
                test: /\.(js)$/i, 
                exclude: /(node_modules|bower_components)/,
                use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-env']
                   }
                }
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
            // {
            //     test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
            //     type: 'asset/resource',
            // }
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
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
    }
}