const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry:{
        app:'./src/index.js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'艹采 讠普',
            template:'./src/index.html'
        })
    ],
    output:{
        filename:"[name].[hash].bundle.js",
        path:path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: 'babel-loader',
                options: {
                    presets: ["react","es2015","stage-1"],
                    plugins: ["transform-decorators-legacy"]
                }
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]'
                        }
                    }
                ]
            },
            {
                test: /\.png|jpg|gif|jpeg$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'images/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        modules: [ 'node_modules' ],
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
            apis: path.resolve(__dirname, './src/apis'),
            views: path.resolve(__dirname, './src/views'),
            components: path.resolve(__dirname, './src/views/components')
        }
    }

};