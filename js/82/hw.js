(function (){
    'use strict';
    ///vehicle constructor
    function Vehicle(color){
        this.color=color;
        speed:0;


    }
    ////vehicle non-constructor with  object.create for prototype declaraton
    function vehicleMaker(color){
        const vehicle=Object.create(VehicleFunctions);
        vehicle.color=color;
        vehicle.speed=0;
        return vehicle;

    }
    //vehicle prototype
    const VehicleFunctions={
         go:function(speed){
            this.speed=speed;
            console.log(`now going ${speed} mph`);

         },
         print:function(){
            console.log(`${this.color} now going ${this.speed} mph`);
         }
    };
    Vehicle.prototype=VehicleFunctions;
      ///plane constructor
      function Plane(color){
        this.color=color;
        speed:0;

    }
    Plane.prototype=Object.create(VehicleFunctions);
    // overridden plane Go Function
    Plane.prototype.go=function(speed){
        this.speed=speed;
        console.log(`now flying at ${speed} mph`);

};

    const v1=new Vehicle("red");
    const v2=new Vehicle("blue");
    const v3=vehicleMaker("orange");
    console.log(v1,v3);
    v1.go(75);
    v2.go(100);
    v1.print();
    v2.print();
  
const p1=new Plane("green");
const p2=new Plane("yellow");
p1.go(500);
p2.go(600);
p1.print();
p2.print();
}

)();