const fs=require('fs');
const path=require('path');
const dir=process.argv[2];
const extName=process.argv[3];
fs.readdir(dir,myCallBack);
function myCallBack(err,list) {
    if(err)
        {console.log('error occured');
         return;
        } 
        
        list.forEach(e => {
            if(path.extname(e)===`.${extName}`){
                console.log( e);
            }
            
        });
        // const filtered=list.filter( (f)=>path.extname(f)===extName);
        // filtered.forEach(e => {
        //     console.log(` '\n' ${e}` );
            
        // });

    
}