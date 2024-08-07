const theButton=document.querySelector('#theButton');
const body=document.querySelector("#body");

theButton.addEventListener('click',onClick);
let interval;
let index=0;


function onClick(){
    if(!interval){
        interval=setInterval(startFlash,1000);
      
    }
    else{
        clearInterval(interval);
        theButton.innerText="start";
        interval=false;
    }
}
function startFlash(){
    theButton.innerText="stop";

const array= ["red","blue","green","yellow" ];
    
        if(index===array.length)
           index=0;
         body.style.backgroundColor=array[index];
         index++;
        
     

    
  
    
}


