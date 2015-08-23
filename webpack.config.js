const path = require('path');

module.exports = {
	entry: './client/entry',
	output: {
		path: path.join(__dirname, '/client/build'),
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			loader: 'style!css!sass?sourceMap'
		}, {
			test: /\.html$/,
			loader: 'html'
		}, {
			test: /\.jsx$/,
			loader: 'babel?stage=0'
		}, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'url-loader?limit=10000&minetype=application/font-woff'
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file-loader?name=[path][name].[ext]'
		}]
	},
	devServer: {
		contentBase: './client',
		colors: true,
		info: true,
		progress: true
	}
};
