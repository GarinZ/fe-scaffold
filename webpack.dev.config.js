var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/app.js', // 入口文件位置
    output: {
        path: __dirname + '/public', // 打包的文件输出的位置
        filename: 'bundle.js'
    },
    node: {
        fs: 'empty'
    },
    module: {
        loaders: [
            // babel的其他配置放在.babelrc中
            {
                test: /\.js$/, // 经过loader的文件
                exclude: /node_modules/, // 不经过loader的目录
                loader: "babel-loader" // loader名
            }, {
                test: /\.less$/,
                exclude: /node_modules/, // 不经过loader的目录
                loader: 'style-loader!css-loader!less-loader' //添加对样式表的处理
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new HtmlWebpackPlugin({
            template: __dirname + "/src/template.html" //new 一个这个插件的实例，并传入相关的参数
        })
    ],
    devtool: "eval-source-map", // 生成source-map的配置（开发环境）
    devServer: { //  依赖webpack-dev-server，用于本地起服务器（开发环境）
        contentBase: "./public", // 本地服务器加载页面的位置
        inline: true, // 实时刷新
        // colors: true, // 终端输出带颜色
        historyApiFallback: true // 所有跳转指向index.html
    },
}
