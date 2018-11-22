const path = require('path');
const webpack = require("webpack");

module.exports = [{
    mode: "development",
    entry: {
        sample1: __dirname + '/src/index.js',
        //demo: __dirname + '/src/demo.js'
        //, react: 'react'
        // , reactdom: 'react-dom'
    }, //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: __dirname + '/dist', // 输出的路径
        filename: 'webpacktest4.[name].[chunkhash].js'  // 打包后文件
        , chunkFilename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    
    plugins: [
    ]
}
]