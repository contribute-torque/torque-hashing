"use strict";
let torqueHashing = require('../build/Release/torquehashing');
let fs = require('fs');
let lineReader = require('readline');

let testsFailed = 0, testsPassed = 0;
let lr = lineReader.createInterface({
     input: fs.createReadStream('yespower.txt')
});
lr.on('line', function (line) {
     let line_data = line.split(/ (.+)/);
     const hex = Buffer.from(line_data[1], 'hex');
     let result = torqueHashing.yespower(hex, 9).toString('hex');
     if (line_data[0] !== result){
         console.error(line_data[1] + ": " + result);
         testsFailed += 1;
     } else {
         testsPassed += 1;
     }
});
lr.on('close', function(){
    if (testsFailed > 0){
        console.log(testsFailed + '/' + (testsPassed + testsFailed) + ' tests failed on: yespower');
    } else {
        console.log(testsPassed + ' tests passed on:  yespower');
    }
});
