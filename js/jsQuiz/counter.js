'use strict';

 window.app=function (theModule) {


    
   theModule.counter= {

        count:0,
        increment:function( ) {
             this.count++;


            },
        getAmount:function() {
            console.log(`count is ${this.count}`);

        }
    };
    return theModule;
}(window.app||{});
    


