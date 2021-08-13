// const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const prodMode = !require('yargs').argv.developer;

const config = {
	mode: prodMode ? "production" : "development",
	entry: {
		"main.min": "./src/assets/js/index.js",
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	output: {
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /^_(\w+)(\.js)$|node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
		]
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor.min"
				},
			},
		},
		minimizer: [
			new UglifyJsPlugin({
				test: /\.js$/,
				parallel: true,
				uglifyOptions: {
					output: {
						comments: false
					}
				}
			}),
		],
	},
	plugins: []
};

module.exports = config;
