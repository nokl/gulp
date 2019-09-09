// config
import { paths } from './gulp/conf';

// modules
import { series, parallel, watch } from 'gulp';

// tasks
import { clean } from './gulp/tasks/clean';
import { html } from './gulp/tasks/html';
import { styles } from './gulp/tasks/styles';
import { scripts } from './gulp/tasks/scripts';
import { images } from './gulp/tasks/images';
import { copy } from './gulp/tasks/copy';

const watchFiles = () => {
    const watchOptions = { interval: 500 };
    watch(paths.style.src[0], watchOptions, series(styles));
    watch(paths.html.src, watchOptions, series(html));
    watch(paths.script.src, watchOptions, series(scripts));
    watch(paths.image.src, watchOptions, series(images));
    watch(paths.fonts.src, watchOptions, series(copy));
    watch(paths.static.src, watchOptions, series(copy));
};

/**
 * dev
 */
export const dev = series(
    clean,
    parallel(styles, html, scripts, images, copy),
    watchFiles
);

/**
 * production build
 */
export const build = series(
    clean,
    parallel(styles, html, scripts, images, copy),
);
