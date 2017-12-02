const electron = require('electron')
const dialog  = electron.dialog

const showError = function(message) {
    dialog.showErrorBox({
        title  : '错误', 
        type  : 'error',
        message : message
    });
};

const showInfo = function(message) {
    dialog.showMessageBox({
        title  : '信息', 
        type  : 'Info',
        message : message
    });
};

showInfo("Hello Word!");
module.exports = {showError, showInfo};