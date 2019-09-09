// config
import { paths } from '../conf';
import { webpackConfig } from '../../webpack.config.babel';

// modules
import { src, dest } from 'gulp';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';


export function scripts() {
	return src(paths.script.src)
		.pipe(plumber({
			errorHandler: notify.onError('<%= error.message %>')
		}))
		.pipe(webpackStream(webpackConfig, webpack))
		.pipe(dest(paths.script.dest));
}