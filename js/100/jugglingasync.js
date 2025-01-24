const http = require('http');
const bl = require("bl");

const [, , ...url] = process.argv;
const results = [];
let finished=0;

for (let index = 0; index < url.length; index++) {
    http.get(url[index], (response) => {
        response.pipe(bl(
            function (err, data) {
                if (err) {
                    return;
                }
                results[index] = data.toString();
            }));
            response.on('end',()=>{
                finished++;
                if(finished===3)
                {
                    results.forEach(r => {
                        console.log(r);
                
                    });
                }


            });






    });
   

    





}





