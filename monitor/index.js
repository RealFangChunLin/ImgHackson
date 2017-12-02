var chokidar = require('chokidar');
const path =require('path');
const imageProcess = require('../parse-img');

var watcher = chokidar.watch('D://workspace/pyForFastCheck/src/traindata/num', {
    ignored: /(^|[\/\\])\../,
    persistent: true,
    ignoreInitial: true
});

watcher.on('add', (path) => {
    console.info(`File ${path} has been added`);
    imageProcess(path);
});

