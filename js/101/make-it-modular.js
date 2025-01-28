const mymodule=require('./mymodule1');



// myModule(dir,txt,mycallback);
function mycallback(error,data){
    if(error){
        console.log('error occured');

    }
    data.forEach(e => {
            console.log(e );
    });

}
mymodule(process.argv[2],process.argv[3],mycallback);