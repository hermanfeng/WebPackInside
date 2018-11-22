var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')

webpack(webpackConfig, function (err, stats) {
    if(err && err.message) console.log(err.message);
    console.log(stats);
})

