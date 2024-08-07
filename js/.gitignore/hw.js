"use strict";
const dayutils=(function () {
    const days=["sunday","monday","tuesday","wdensday","thursday","friday","saturday"]

    

        function  getDayNumber(day) {
            for (let index = 0; index < days.length; index++) {
                if(day===days[index])
                    return index+1;
                
            }
        }
    
     function getDayName(number ) {
       for (let i = 0; i < days.length; i++) {
            if(number-1===i)
               
            return days[i];
            
        }

        
    }
    return{
        getDayName,
        getDayNumber
    };
}());


