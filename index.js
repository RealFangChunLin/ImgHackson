const Tesseract = require('tesseract.js');
const path = require('path');
const myImage = path.join(__dirname,'./test.jpg');

Tesseract.recognize(myImage)
    .then(function (result) { console.log('result', result) });