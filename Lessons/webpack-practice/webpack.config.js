// Give mode, entry point and the output object:{filename,path,clean}


// 1) filename: Name of the out put file: which is main.js in our case

// 2) path: the path where to create the main.js

// 3) clean: true will always clean the dist directory every time it bundles the main.js in "dist"


const { watchFile } = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path=require("path");

module.exports={
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist"),
        clean: true,
        
    },
    devtool:"eval-source-map",
    devServer:{
        watchFiles:["./src/template.html"],

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/template.html",
        }),
    ],

// The signs "/ and /" enclose the expression i.e."/ expression/"
//  \.html means anyName.html
// "$" ensures that the file name ends with html
// "i" is the flag that makes it case insensitive i.e HTml,html,HTML etc.

    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"],
            },
            {
                test:/\.html$/i,
                loader:"html-loader",
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:"asset/resource",
            },
            
        ],

    },

}


