require("./xyz.js");
const {x,calculatesum}= require("./calculate/sum.js");
const {calculatemultiply}= require("./calculate/multiply.js");


var name = "node";
var a = 12;
var b =90;

// console.log(name);
// console.log(a+b);
// console.log(globalThis)
calculatesum(a,b);
calculatemultiply(a,b);
console.log(x);
console.log(globalThis==global);