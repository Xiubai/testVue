const path = require('path');

// vue-loader 
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 入口
    output: {
        path: path.join(__dirname, './dist'), // 输出路径
        filename: 'bundle.js' // 输出文件
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()

    ],
    module: {
        // 第三方加载器的 匹配规则
        rules: [

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/, // 还需要 less
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/, // 还需要下载 node-sass
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|svg|woff|woff2|eot)$/, // 还需要 file-loader
                use: 'url-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
            "vue$": "vue/dist/vue.js"
        }
    }

}