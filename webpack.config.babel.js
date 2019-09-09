import path from 'path';
import { paths } from './gulp/conf';

export const webpackConfig = {
	mode: process.env.NODE_ENV || 'development',
	devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
	entry: {
		index: path.resolve(__dirname, paths.script.src),
	},
	output: {
		path: path.resolve(__dirname, paths.script.dest),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-env"
							]
						}
					}
				]
			}
		]
	},
}
