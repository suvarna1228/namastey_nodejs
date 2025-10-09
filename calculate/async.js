const fs = require("fs");

const https = require("https");

console.log("hiiiii");

var a = 103802;
var b = 234772;

https.get("https://dummyjson.com/products/1", (res)=>{
    console.log("Fetched Data Successfully");
});

setTimeout(()=>{
    console.log("setTimeout called 5 seconds");
},5000);

fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("File Data : ",data);
});

function multiplyFn(x,y){
    const result = a*b;
    return result;
    
}

var c = multiplyFn(a,b);

console.log("multiplication result is:",c);


