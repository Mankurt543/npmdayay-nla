const http=require("http")


http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("Merhaba dünya xddddddddddde");
    console.log("naber");
}).listen(4000)