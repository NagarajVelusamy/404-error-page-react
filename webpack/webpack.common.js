const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');   
const path = require('path');

const plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', './src/index.html')
    }),
    new MiniCssExtractPlugin()
]

// contains common webpack configuration
module.exports = {
    target: 'web',

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'..', './dist'),
        filename: 'index_bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]',
    },

    devServer: {
        port: '3000',
        static: {
          directory: path.join(__dirname,'..', 'public')
        },
        open: true,
        hot: true,
        liveReload: true,
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: 'babel-loader', 
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader'] 
            },
            {
                test: /\.(?:ico|gif|jpeg|jpg|png)$/i,
                type:'asset' 
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                type:'asset/inline'
            },
        ],
    },

    plugins: plugins
}