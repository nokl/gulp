// config
import { DEST } from '../conf';

// modules
import browserSync from 'browser-sync';

const server = browserSync.create();

/**
 * browser-syncをリロード
 */
export function reload(cb) {
    server.reload();
    console.log(cb);
    cb();
}

/**
 * browser-syncを起動
 */
export function serve(cb) {
    server.init({
        notify: false,
        // proxy: 'localhost',
        port: 3000,
        startPath: `/`,
        ghostMode: false,
        server: {
            baseDir: DEST,
            index: 'index.html'
        },
    });
    cb();
    console.log('Server was launched');
}
