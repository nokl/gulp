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
import { serve, reload } from './gulp/tasks/serve';

const watchFiles = () => {
    const watchOptions = { interval: 500 };
    watch(paths.style.src[0], watchOptions, series(styles, reload));
    watch(paths.html.src, watchOptions, series(html, reload));
    watch(paths.script.src, watchOptions, series(scripts, reload));
    watch(paths.image.src, watchOptions, series(images, reload));
    watch(paths.fonts.src, watchOptions, series(copy, reload));
    watch(paths.static.src, watchOptions, series(copy, reload));
};

/**
 * dev
 */
export const dev = series(
    clean,
    parallel(styles, html, scripts, images, copy),
    parallel(serve, watchFiles)
);

/**
 * production build
 */
export const build = series(
    clean,
    parallel(styles, html, scripts, images, copy),
);
