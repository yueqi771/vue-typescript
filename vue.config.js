const path = require('path');
module.exports = {
    pages: {
        index: {
			// page 的入口
			entry: 'src/main.ts',
			// 模板来源
			template: 'public/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html',
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: 'Index Page',
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
	},
	// resolve: {
    //     alias: {
    //         "@components": path.resolve(__dirname, "./src/components"),
    //         "@pages": path.resolve(__dirname, "./src/pages"),
    //         "@styles": path.resolve(__dirname, "./src/static/css"),
    //         "@images": path.resolve(__dirname, "./src/static/image"),
    //         "@utils": path.resolve(__dirname, "./src/utils"),
    //         "@plugins": path.resolve(__dirname, "./src/plugins")
    //     }
    // },

    configureWebpack: {
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, './src/components'),
				'@static': path.resolve(__dirname, './src/static')
			}
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					include: [
						'/src/',
						'/node_modules/element-ui/lib/' //增加此项
					],
					loader: 'style-loader!css-loader'
				},
				{
					test: /\.js$/,
    				loader: "babel-loader",
    				exclude: [
             			path.join(__dirname, './src/static/fonts/iconfont.js'),
             			path.join(__dirname, './node_modules'),
                	],
            	},
            	{
            		test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    				loader: 'file-loader',
				    options: {
				    	limit: 10000,
				    	name: 'fonts/[hash:12].[ext]'
				    }
            	}
			]
        },
       
    },

    devServer: {
        port: 3000,
        open: true,
    }
}
