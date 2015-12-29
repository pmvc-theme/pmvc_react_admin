'use strict';
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
//	devtool: 'sourcemap',
	entry: {
           main: "./src/entry.js",
        },
	output: {
		filename: "node.bundle.js",
		path: __dirname + "/assets" ,
		publicPath: "/pmvc/assets/",
	},
        node: {
          fs: "empty",
        },
        resolve: {
            extensions: ['','.js','.jsx']
        },
	module: {
	    loaders: [
                  { test:/\.html$/, loader: 'html-loader' },
                  { test:/\.json$/, loader: 'json-loader' },
                  { test: /\.js$/,  loader: "babel-loader?cacheDirectory" },
                  { test: /\.jsx$/, loader: "babel-loader?cacheDirectory" },
                  { test: /\.(otf|eot|svg|ttf|woff)/, loader: 'url-loader?limit=8192' }
	    ]
	},
	plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.LimitChunkCountPlugin({maxChunks:1}),
	]
};
