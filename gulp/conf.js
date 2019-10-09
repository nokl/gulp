export const SRC = `src`;
export const DEST = `dist`;
export const DEST_ASSETS = `${DEST}/assets`;
export const cacheRegex = /__NC__/g;
export const isProd = process.env.NODE_ENV === 'production';
const scriptExt = '*.js';

export const paths = {
    html: {
        src: `${SRC}/pages/**/*.htm*`,
        dest: `./dist`,
    },
    style: {
        src: [`${SRC}/assets/styles/**/*.{sass,scss}`, `![^_]*.{sass,scss}`],
        dest: `${DEST_ASSETS}/css`,
        map: `${DEST_ASSETS}/css/maps/`,
    },
    script: {
        ext: scriptExt,
        src: `${SRC}/assets/js/${scriptExt}`,
        dest: `${DEST_ASSETS}/js`,
        map: `${DEST_ASSETS}/js/maps/`,
    },
    image: {
        src: `${SRC}/assets/img/**/*.{jpg,jpeg,png,svg,gif}`,
        dest: `${DEST_ASSETS}/img`,
    },
    fonts: {
        src: `${SRC}/assets/fonts/**/*`,
        dest: `${DEST_ASSETS}/fonts`,
    },
    static: {
        src: `${SRC}/static/**/*`,
        dest: DEST,
    }
};
