const fs=require("fs");
fs.readFile(process.argv[2],myCallBack);

function myCallBack(err,data){
    if(err)
       {console.log('error occured');
        return;
       } 
       const lines=data.toString().split('\n').length-1;

console.log(lines);


}
