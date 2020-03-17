// config
import path from 'path';

// modules
import { paths, isProd } from './gulp/conf';
import { sync } from 'glob';

// plugins
import TerserPlugin from 'terser-webpack-plugin';
import WebpackBar from 'webpackbar';

const cwd = paths.script.src.replace(`*${paths.script.ext}`, '');
const entries = {};
sync(`*${paths.script.ext}`, { cwd }).map(filename => {
    entries[filename.replace(paths.script.ext, '')] = path.resolve(__dirname, cwd + filename);
});

export const webpackConfig = {
    mode: process.env.NODE_ENV || 'development',
    devtool: !isProd ? 'source-map' : false,
    entry: entries,
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, paths.script.dest),
        publicPath: paths.script.publicPath,
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
    plugins: [new WebpackBar()],
    optimization: {
        minimize: isProd,
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
