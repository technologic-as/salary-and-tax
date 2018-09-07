import webpack from 'webpack';
import merge from 'webpack-merge';
import common, { outputPath } from './webpack.config.common';

export default merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: outputPath,
        hot: true,
    },
});
