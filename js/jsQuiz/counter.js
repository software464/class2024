'use strict';

 window.app=function (theModule) {



   theModule.counter= {
        // SL - ok - but now anyone can change it - window.app.counter.count = 'foo'.
        // better weould be a local variable accessed via the closures returned...
        count:0,
        increment:function( ) {
             this.count++;


            },
        // SL - get should return the count. Let caller console log if thats what they want to do
        getAmount:function() {
            console.log(`count is ${this.count}`);

        }
    };
    return theModule;
}(window.app||{});

// SL - not a problem but we didnt really need to pass window.app in, could have just made sure it existed and returned counter to be added to it.
