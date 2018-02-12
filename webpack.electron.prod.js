const merge = require ('webpack-merge');
const prod = require ('./webpack.prod.js');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge (prod, {
	output: {
		path: path.resolve (__dirname, "electron"),
		filename: "app.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'OpenFL Haxe Webpack Electron Starter',
			electronConnect: '',
      template: 'electron/template.html'
    })
  ]
});

