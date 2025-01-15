//  Private Fields in OOP Javascript:--------------

class Circle{
// The Private Field cannot be accessed outside the class
    #Color;
 constructor(dia,color){
    this.dia=dia;
    this.#Color=color;
    
}
// But we can get and set the values of private variables outside the class using getters and setters
get Colour(){
    return this.#Color;
}
set Colour(col){
    this.#Color=col;
}


// The object must be an instance of the class to access the private variable
static getColor(obj){
    if (#Color in obj){
        return obj.#Color;
    }
    else{
        return "Object must be an instance of the class"
    }
}

}
c_1=new Circle(10,'green');
console.log(c_1);
console.log(Circle.getColor({}));
console.log(Circle.getColor(c_1));





// Retuning the Overriding Object 

class Ball extends class {
    constructor(obj){
        obj.des="I am a New Ball!";
        obj.color="Purple";
        obj.dia=3;
        return obj;
        
    }
    get Area(){
        obj.area=Math.PI*(obj.dia)*(obj.dia)/4;
        return obj.area;
        }
    set Area(area){
        obj.area=area;
        obj.dia=Math.sqrt((4*obj.area)/Math.PI);
    }

}{
    #color="Purple";
    // We will have to use "this" keyword not "obj" in the Child class and keep in mind that "this" is not the same as "obj". If both Parent and child use "this" only then we can use this.ParentAttribute in the ChildClass. If the object Constructor in Parent is returning some other object e.g  "obj" then the private variables become attached to the "obj",not "this"
   
   
//    This process always occur !!! even if not run
    constructor(obj){
    super(obj);
   
   }
    static getColor(obj){
    return obj.#color;
   }
   get something(){
    return this.#color;
   }
   set something(som){
    this.#color=som;
   }
  

}
let obj={item:"newBall"};
let ball_1=new Ball(obj);

console.log(ball_1.something);