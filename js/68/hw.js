"use strict";
const accountMaker=function(){

  
    function createAccount(){

        
        function performTransaction(amount){
            this.balance+=amount;
            console.log(`balance is $ ${this.balance} `);
           

           

        }
        return {
            balance:0,
            performTransaction};
    }
    return createAccount;
    }();

    const checking=accountMaker();
    checking.performTransaction(50);
    const savings=accountMaker();
    function performTransaction(amount){
        this.balance+=amount;
        console.log(`balance is $ ${this.balance} `);
    }

    performTransaction.call(checking,1000);
    savings.performTransaction(1000);
    performTransaction.call(savings,75);
    const deposit50=performTransaction.bind(checking,50);
    deposit50();

