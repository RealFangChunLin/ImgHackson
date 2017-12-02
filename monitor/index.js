var chokidar = require('chokidar');
const path =require('path');

var watcher = chokidar.watch(path.join(__dirname,'../source'), {
    ignored: /(^|[\/\\])\../,
    persistent: true,
    ignoreInitial: true
});

watcher.on('add', (path) => {
    console.info(`File ${path} has been added`);
})

