

let total=0;
for (let index = 0; index < process.argv.length; index++) {
    if(index>1){
        total+=+process.argv[index];


    }


    
    
}
console.log(total);