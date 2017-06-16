 const path = require('path');

 var config = {
     entry: './modules/custom.js',

     output: {
         path: __dirname + './',
         filename: 'index.js',
     },

     devServer: {
         inline: true,
         port: 3000
     },

     module: {
         loaders: [
             {
                 test: /\.jsx?$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',

                 query: {
                     presets: ['es2015', 'react']
                 }
         }
      ]
     }
 }

 module.exports = config;

