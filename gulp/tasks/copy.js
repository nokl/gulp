// config
import { paths } from '../conf';

// modules
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

/**
 * 出力先にファイルをコピーする
 */
export function copy() {
    return src([paths.static.src, paths.fonts.src])
        .pipe(
            plumber({
                errorHandler: notify.onError('<%= error.message %>'),
            })
        )
        .pipe(dest(paths.static.dest));
}
