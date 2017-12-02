const remote = require('electron').remote;
const dialog  = remote.dialog

const showError = function(message) {
    dialog.showMessageBox({
        title  : '错误', 
        type  : 'error',
        message : message,
        buttons : []
    });
};

const showInfo = function(message) {
    debugger
    dialog.showMessageBox({
        title  : '信息', 
        type  : 'info',
        message : message,
        buttons : []
    });
};
module.exports = {showError, showInfo};