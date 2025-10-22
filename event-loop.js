const fs = require("fs");
const a=100;
setImmediate(()=>console.log("setimmediate"));

fs.readFile("./file.txt","utf8",()=>{
    console.log("file reading");
});

setTimeout(()=>{
    console.log("Timer"),0
});


function printa(){
    console.log("a=",a);
}

printa();
console.log("last line");