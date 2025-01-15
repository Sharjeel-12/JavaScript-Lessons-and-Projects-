// *******************************************************************************
// Basic Class Syntax 
// *******************************************************************************
// class Name{
//     constructor(){

//     }
//     function f1(){

//     }
//     function f2(){

//     }
//     ......
// }





// *******************************************************************************
// Properties that have Getters and Setters are called Accessors properties  
// *******************************************************************************
class Circle{
    constructor(radius,color){
        this.r=radius;
        this.color=color;
    }
// getter is a function that does not have an argument it always returns something
    get Area(){
         return (Math.PI*this.r*this.r);
    }
   
// Setter is a function that has an argument and it doesnot return anything

    set Area(newArea){
        this.r=Math.sqrt(newArea/Math.PI);
        
    }
  
}

const C_1= new Circle(4,"Blue");
C_1.Area=20;
console.log(C_1);





// ****************************************
// Accessor Properties on Objects 
// Lets say we have an object 
// ****************************************

let Person={name:"Happy",field:"Software", age:20};
Object.defineProperty(Person,"Status",{
    // Accessor Properties have descriptors with get and set functions for the Accessor property
    get (){
        return (this.field+" Engineer");
    }
    ,set (des)
    {
        [this.field,_]=des.split(" ");
    }
})

Person.Status="Mechanical Engineer";
console.log(Person);