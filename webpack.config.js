var webpack = require('webpack')
var path = require('path')

module.exports = {
	resolve: {
        alias: {
			jquery: "jquery/src/jquery",
			$: "jquery/src/jquery",
        }
    },
	entry: path.resolve(__dirname, path.join('src', 'index.js')),
	output: {
		path: path.resolve(__dirname, path.join('public', 'dist')),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			loader: ['style-loader', 'css-loader']
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'file-loader?name=public/fonts/[name].[ext]'
		}]
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		//new webpack.HotModuleReplacementPlugin(),
	]
}