'use strict';


window.app=function (theModule){
    let countersCreated=0;
   
function counterCreator(){
    countersCreated++;
    return {
        count:0,
        increment: function () {
            this.count++;


        },
        getAmount: function () {
            console.log(`count is ${this.count}`);

        }
    };


}
theModule.counterCreator=counterCreator;
return theModule;
 
}(window.app||{});

