const merge = require ('webpack-merge');
const dev = require ('./webpack.dev.js');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ElectronConnectPlugin = require('./electron-plugin');

module.exports = merge (dev, {
	output: {
		path: path.resolve (__dirname, "electron"),
		filename: "app.js"
	},
	watchOptions: {
		ignored: [
			path.resolve(__dirname, 'dist'),
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'electron'),
		]
	},
	devServer: {
		contentBase: './electron'
	},
	devtool: "inline-source-map",
	plugins: [
		new HtmlWebpackPlugin({
			title: 'OpenFL Haxe Webpack Electron Starter',
			electronConnect: '<script>require("electron-connect").client.create()</script>',
      template: 'electron/template.html'
    }),
		new ElectronConnectPlugin()
  ]
});

