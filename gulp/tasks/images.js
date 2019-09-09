// config
import { paths } from '../conf';

// modules
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';


export function images() {
    return src(paths.image.src)
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(dest(paths.image.dest));
};