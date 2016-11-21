var multiple = require('./multiple.js');

var exportMe = function exportME () {
    return "this is a function";
}

var consolelog=function consolelog(msg){
    console.log(msg);
}

module.exports.exportMe=exportMe;
module.exports.consoleLog=consolelog;
module.exports.first=multiple.first;