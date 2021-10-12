///////////////// demo ***********************

/*function sayHello(name) {
    console.log("Hello" + name);
}

sayHello("Pournima");*/

//////////////for path// ********

/*const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj);*/

/////////// For OS**************

const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory: ' +totalMemory);

console.log("Total Memory: ${totalMemory}");
console.log("FRess Memory: ${freeMemory}");
