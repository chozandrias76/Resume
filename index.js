'use strict';

var fs = require('fs');
var path = require('path');

// function main() {
//     var textContents = "";
//     fs.readdir("./node_modules", function(err, dirs) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         dirs.forEach(function(dir) {
//             if (dir.indexOf(".") !== 0) {
//                 var packageJsonFile = "./node_modules/" + dir + "/package.json";
//                 if (fs.existsSync(packageJsonFile)) {
//                     fs.readFile(packageJsonFile, function(err, data) {
//                         if (err) {
//                             console.log(err);
//                         } else {
//                             var json = JSON.parse(data);
//                             //textContents += '"' + json.name + '": "' + json.version + '",';
//                             textContents += `"${json.name}": "${json.version},"
//                             `;
//                             fs.writeFile("./tmp/file.txt", textContents);
//                         }
//                     });
//                 }
//             }
//         });

//     });
// }

// main();

var express = require('express');
var app = express();

var compress = require('compression');
var layouts = require('express-ejs-layouts');

app.set('layout');
app.set('view engine', 'ejs');
app.set('view options', { layout: 'layout' });
app.set('views', path.join(process.cwd(), '/server/views'));

app.use(compress());
app.use(layouts);
app.use('/client', express.static(path.join(process.cwd(), '/client')));

app.disable('x-powered-by');

var env = {
    production: process.env.NODE_ENV === 'production'
};

if (env.production) {
    Object.assign(env, {
        assets: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'assets.json')))
    });
}

app.get('/*', function(req, res) {
    res.render('index', {
        env: env
    });
});

var port = Number(process.env.PORT || 3001);
app.listen(port, function() {
    console.log('server running at localhost:3001, go refresh and see magic');
});

if (env.production === false) {
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');

    var webpackDevConfig = require('./webpack.config.development');

    new WebpackDevServer(webpack(webpackDevConfig), {
        publicPath: '/client/',
        contentBase: './client/',
        inline: true,
        hot: true,
        stats: false,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3001',
            'Access-Control-Allow-Headers': 'X-Requested-With'
        }
    }).listen(3000, 'localhost', function(err) {
        if (err) {
            console.log(err);
        }

        console.log('webpack dev server listening on localhost:3000');
    });
}