(function () {
    'use strict';
    const loadButton = document.querySelector("#load");
    const input = document.querySelector('#input');
    const responseDiv = document.querySelector('#response');
    const errors = document.querySelector('#errors');
    const spinningImage = document.querySelector('#img');
    let response;
    let errorResponse;


    loadButton.addEventListener('click', () => {
       
        response=null;
        errorResponse=null;
        responseDiv.innerText = "";
        errors.innerText = "";
        spinningImage.style.display = "block";
        


        fetch(input.value)
            .then(r => {
                if (r.status < 400) {
                    return r.text();
                }
                else {
                   
                    throw new Error(`${r.status} ${r.statusText}`);
                }
            })
            .then(t => {
                response = t;
                
                
            
            })
        
        .catch(e=>{
            spinningImage.style.display = "none";
           errors.innerText=` error this is response ${e}`;

        });
        setTimeout(() => {
            spinningImage.style.display = "none";
            
                responseDiv.innerText = response;
            
           

        }, 2000);
            
    }
    );

}());