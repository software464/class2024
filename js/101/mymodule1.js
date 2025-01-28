module.exports=function(dir,ext,clb){
const fs=require('fs');
const path=require('path');
const results=[];



fs.readdir(dir,filter);
function filter(err,list) {
    

    if(err){
        
        return clb(err);
        } 
        
        list.forEach(e => {
           

            if(path.extname(e)===`.${ext}`){
                results.push(e);
                

            }
            
        });
        clb(null,results);
        // const filtered=list.filter( (f)=>path.extname(f)===extName);
        // filtered.forEach(e => {
        //     console.log(` '\n' ${e}` );
            
        // });

    
        }};
