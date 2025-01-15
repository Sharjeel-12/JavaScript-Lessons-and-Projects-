//Static Functions in Classes

// RULES 
// 1- You cannot call non static fields or methods in a static method 
// 2- You can call static methods in non static methods using ClassName.STATIC_METHOD_NAME 


// Example No.1 : ------------------

//Calls the static method of Parent using "super" keyword
class Tripler{
    static welcome="Welcome to the Tripler"
    static description="I triple the values";
    static calculate(n=1){
        return (n*3);
    }
}
class SquaredTriple extends Tripler{
    static welcome="Welcome to the Squared Tripler"
    static description="I square the tripled values";
    static calculate(n){
        //Calls the static method of Parent using "super" keyword
        return super.calculate(n)*super.calculate(n);
    }

}

console.log(SquaredTriple.calculate(4));



// Example No.2 : ------------------
// To call other static methods or fiels in a static function in the same class use "this" key word 
class StaticMethodCall {
    static staticProperty = "static property";
    static staticMethod() {
      return `Static method and ${this.staticProperty} has been called`;
    }
    static anotherStaticMethod() {
      return `${this.staticMethod()} from another static method`;
    }
  }
  StaticMethodCall.staticMethod();
  // 'Static method and static property has been called'
  
  StaticMethodCall.anotherStaticMethod();
  // 'Static method and static property has been called from another static method'
