const theButton =document.getElementById("firstButton");
theButton.addEventListener("click",addButton);
let i=1;
function addButton(){
   
    const button=document.createElement("button");
    button.addEventListener("click",addButton);
    button.innerText=i;
    i++;
    document.body.appendChild(button);
}