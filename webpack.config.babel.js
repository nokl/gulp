// config
import path from 'path';

// modules
import { paths } from './gulp/conf';
import { sync } from 'glob';

// plugins
import TerserPlugin from 'terser-webpack-plugin';

const cwd = paths.script.src.replace(paths.script.ext, '');
const entries = {};
sync(paths.script.ext, { cwd }).map(key => {
    entries[key] = path.resolve(__dirname, cwd + key);
});

export const webpackConfig = {
    mode: process.env.NODE_ENV || 'development',
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
    entry: entries,
    output: {
        path: path.resolve(__dirname, paths.script.dest),
        filename: '[name]',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        useBuiltIns: 'usage',
                                        corejs: 3,
                                    },
                                ],
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                cache: false,
                extractComments: {
                    filename: 'LICENSES',
                },
            }),
        ],
    },
};
