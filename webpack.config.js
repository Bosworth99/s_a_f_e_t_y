const path = require('path');

module.exports = {
    entry: `./src/index.tsx`,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {   test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
          port: 8080,
      },
}