'use strict';


window.app=function (theModule){
    // SL - this is private! could have done same thing with count in its function...
    let countersCreated=0;

// SL - indentation is messed up. Thats a problem...
function counterCreator(){
    countersCreated++;
    return {
        // SL - again, not private
        count:0,
        increment: function () {
            this.count++;


        },
        // SL - and again, better to return the val
        getAmount: function () {
            console.log(`count is ${this.count}`);

        }
    };


}
theModule.counterCreator=counterCreator;
return theModule;

}(window.app||{});

// SL - nice!
