const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
    const { mode } = argv;
    const isProduction = mode === 'production';

    return {
        entry: './src/index.js', //default
        output: {
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'build'),
        },
        plugins: [
            new HtmlWebpackPlugin({ template: 'src/index.html' }),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic'
                                }
                            ]
                        ],
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                }
            ]
        }
    }
};