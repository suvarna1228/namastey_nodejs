const http = require("node:http");

const server= http.createServer(function(req,res){
    if(req.url === "/secretData"){
        res.end("there is no secret data")
    }
    res.end("hello world");
});


server.listen(7777);


