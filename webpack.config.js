'use strict';
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
//	devtool: 'sourcemap',
	entry: {
           main: "./src/entry.js",
           vendor: ['react']
        },
	output: {
		filename: "bundle.js",
		path: __dirname + "/assets" ,
		publicPath: "/pmvc/assets/",
                chunkFilename: "[id].[hash].bundle.js"
	},
        node: {
          fs: "empty"
        },
        resolve: {
            extensions: ['','.js','.jsx'],
            alias: {
                "react": __dirname + '/node_modules/react'
            }
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
            new CommonsChunkPlugin(
                /* chunkName= */"vendor", 
                /* filename= */"vendor.bundle.js"
            ),
	]
};
