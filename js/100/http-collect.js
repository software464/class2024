const http=require('http');
const bl=require("bl");

const url=process.argv[2];
let totaldata="";
http.get(url,(response)=>{
    response.pipe(bl(
        function(err,data){
            if(err){
                return ;
            }
            console.log(data.toString());
        }
       
    ));

    
       

    });
    



