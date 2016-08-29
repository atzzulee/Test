var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main2.js",
	output: {
		path: __dirname + "/build",
		filename: "[name]-[hash].js"
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
				//loader: 'style!css?modules!postcss'
			}
		]
	},
	postcss: [
		require('autoprefixer')
	],
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"
		}),
		//new webpack.HotModuleReplacementPlugin()
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("[name]-[hash].css")
	]
	// ,
	// devServer: {
	// 	contentBase: "./public",
	// 	colors: true,
	// 	historyApiFallback: true,
	// 	inline: true,
	// 	hot: true
	// }
}