// config
import { paths, cacheRegex } from '../conf';

// modules
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import htmlmin from 'gulp-htmlmin';
import changedInPlace from 'gulp-changed-in-place';
import replace from 'gulp-replace';


export function html() {
    const ts = Date.now();
    return src(paths.html.src)
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(changedInPlace())
        .pipe(replace(cacheRegex, ts))
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true,
            removeComments: true,
        }))
        .pipe(dest(paths.html.dest));
};