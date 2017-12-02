var fs        = require('fs');
var tesseract = require('node-tesseract');
var gm        = require('gm');
var db = require('../record');
var msg = require('../monitor/showMessage');

module.exports = function imgProcess(imgPath){
    recognizer(imgPath)
    .then(text => {
        console.log(`识别结果:${text}`);
        db.datasource.insert({content:text, path:imgPath },()=>{});
        if(isContains(text.toLowerCase() ,"error")){
            msg.showInfo("find error in "+imgPath);
        }
    })
    .catch((err)=> {
        console.error(`识别失败:${err}`);
        msg.showError("ERROR:"+err);
    });
}

/**
 * 处理图片为阈值图片
 * @param imgPath
 * @param newPath
 * @param [thresholdVal=55] 默认阈值
 * @returns {Promise}
 */
function processImg (imgPath, newPath, thresholdVal) {
    return new Promise((resolve, reject) => {
        gm(imgPath)
            .threshold(thresholdVal || 55)
            .write(newPath, (err)=> {
                if (err) return reject(err);

                resolve(newPath);
            });
    });
}

function isContains(str, substr) {
    return str.indexOf(substr) >= 0;
}

/**
 * 识别图片
 * @param imgPath
 * @param options tesseract options
 * @returns {Promise}
 */
function recognizer (imgPath, options) {
    options = Object.assign({
        l: 'chi_sim',
        psm: 3
    }, options);

    return new Promise((resolve, reject) => {
        tesseract
            .process(imgPath, options, (err, text) => {
                if (err) return reject(err);
                resolve(text.replace(/\s/gm, ' '));
            });
    });
}