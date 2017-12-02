var chokidar = require('chokidar');
const path =require('path');
const fs = require('fs');
const imageProcess = require('../parse-img');

const jsonStr = fs.readFileSync(path.join(__dirname,'../data/config.db')).toString();
const configObj = JSON.parse(jsonStr);

var watcher = chokidar.watch(configObj.path, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
    ignoreInitial: true
});

watcher.on('add', (path) => {
    console.info(`File ${path} has been added`);
    imageProcess(path);
});

