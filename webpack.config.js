var webpack = require('webpack');
var path = require("path");

var dir = __dirname + '/components/';

var config = {
    context:__dirname,
    resolve: {
        alias: {
            App: dir+'App.jsx',
            Header: dir+'Header.jsx',
            Footer: dir+'Footer.jsx',
            About: dir+'about.jsx',
            Home: dir+'Home.jsx',
            Contact: dir+'contact.jsx',
            Upload:dir+'Upload.jsx',
            Login: dir+'Login.jsx'
        },
        extensions: ['.js', '.jsx']
    },
    entry: './index.js',
    
    output: {
        path: __dirname,
        filename: "./js/index.js"
    },
    devServer: {
        inline: true,
        port: 8000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /styles/],
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react','stage-0'],
                    "plugins": [
                        "add-module-exports"
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
            ]
    }
    
}
module.exports = config;