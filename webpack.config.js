const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/02-video.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-bundle.js',
    },
};