import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import path from 'path';

export const outputPath = path.resolve(__dirname, 'public');

export default {
    entry: {
        www: './src/www/entry.jsx',
    },
    output: {
        path: outputPath,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.s?[ca]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader',
                }),
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|jpg|png|gif|ico)(\?(.*))?$/,
                loader: 'file-loader?name=[path][name].[ext]',
            },
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ],
    },
    plugins: [
        new CleanWebpackPlugin([outputPath]),
        new HtmlPlugin({
            template: __dirname + '/src/www/index.html',
            filename: 'index.html',
        }),
        new ExtractTextPlugin('styles-[contenthash].css'),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
