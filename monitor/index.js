var chokidar = require('chokidar');
const path =require('path');
const imageProcess = require('../parse-img');

var watcher = chokidar.watch('C://Users/Administrator/Documents/Tencent Files/282513713/FileRecv', {
    ignored: /(^|[\/\\])\../,
    persistent: true,
    ignoreInitial: true
});

watcher.on('add', (path) => {
    console.info(`File ${path} has been added`);
    imageProcess(path);
});

