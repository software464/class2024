const http=require('http');
const fs=require('fs');
const port =process.argv[2];
const file=process.argv[3];
const src=fs.createReadStream(file);
http.createServer((req,res)=>{
    src.pipe(res);


}).listen(port);


