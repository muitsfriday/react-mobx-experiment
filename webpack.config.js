var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: path.resolve(__dirname, path.join('src', 'index.js')),
	output: {
			path: path.resolve(__dirname, path.join('public', 'dist')),
			filename: 'bundle.js',
			publicPath: '/public/'
	},
	module: {
  	loaders: [{
    	test: /\.js$/,
    		exclude: /node_modules/,
      	loader: 'babel-loader'
    	}]
  	},
	plugins: [
		//new webpack.optimize.ModuleConcatenationPlugin(),
	]
}