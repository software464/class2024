const joe=document.getElementById("joe");
const trump=document.getElementById("trump");

window.pcstools=function () {
    "use strict";

    function click(elem,callback){
        elem.addEventListener("click", callback);
    }
     function hide(elem){
        elem.style.display="none";

     }

     function show(elem){
        elem.style.display="block";
     }
return{
    click,
    hide,
    show
};
}();

function printJoe(){
    console.log("jow was clicked");
}



window.pcstools.click(joe,printJoe);
//window.pcstools.hide(joe);
window.pcstools.show(trump);

