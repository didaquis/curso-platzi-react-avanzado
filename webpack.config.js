const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
	output: {
		filename: 'app.bundle.js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			favicon: 'src/favicon.ico'
		}),
		new WebpackPwaManifestPlugin({
			name: 'Petgram - Tu app de fotos de mascotas',
			shortname: 'Petgram 🐶',
			description: 'Con Petgram puedes encontrar fotos de animales domésticos',
			background_color: '#fff',
			theme_color: '#b1a',
			icons: [
				{
					src: path.resolve('src/assets/icon.png'),
					sizes: [96, 128, 192, 256, 384, 512]
				}
			]
		}),
		new WorkboxWebpackPlugin.GenerateSW({
			runtimeCaching: [
				{
					urlPattern: new RegExp('https://res.cloudinary.com|images.unsplash.com'),
					handler: 'CacheFirst',
					options: {
						cacheName: 'images'
					}
				},
				{
					urlPattern: new RegExp('https://curso-platzi-react-avanzado.didaquis.now.sh'),
					handler: 'NetworkFirst',
					options: {
						cacheName: 'api'
					}
				}
			]
		})
	],
	devServer: {
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						]
					}
				}
			}
		]
	}
}
