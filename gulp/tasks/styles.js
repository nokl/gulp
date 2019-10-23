// config
import pkg from '../../package';
import { isProd, paths } from '../conf';

// modules
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import sass from 'gulp-sass';
import autoprefixer from "gulp-autoprefixer";
import postcss from 'gulp-postcss';
import css_variables from 'postcss-css-variables';
import packageImporter from 'node-sass-package-importer';


export function styles() {
    return src(paths.style.src, { sourcemaps: !isProd })
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(sass({
            outputStyle: 'compressed',
            importer: packageImporter({
                extensions: ['.scss', '.css']
            })
        }).on('error', sass.logError))
        .pipe(postcss([css_variables]))
        .pipe(autoprefixer({
            grid: 'autoplace',
            cascade: false,
        }))
        .pipe(dest(paths.style.dest, { sourcemaps: '.' }));
}