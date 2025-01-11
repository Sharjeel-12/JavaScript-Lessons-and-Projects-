// *************************************************************
// Starting Objects Here

function Book(title,author,pages,read){
    this.author=author;
      this.pages=pages;
      this.read=read;
       this.info =()=>{
       return (`The name of the book is ${this.title}, It's author is ${this.author}, It has ${this.pages} pages and its status is: ${this.read}`);
      }
       }
       
       const TheHobbit=new Book("The Hobbit is Back!","Sharjeel",400,"read completely");
       TheHobbitInfo=TheHobbit.info()
       console.log(TheHobbitInfo);
       
    
    // ************************************************************************************
    // Starting Prototypes here: -
    
    // Simply saying that the prototype of the object is same as the prototype of the object Constructor
    console.log(Object.getPrototypeOf(TheHobbit)===Book.prototype);
    
    // The prototype of Book is also an object which has its own prototype but this process is not continued for infinity
    console.log(Object.getPrototypeOf(Book.prototype)===Object.prototype);
    
    // Object.prototype has no further prototype as we will get null
    console.log(Object.getPrototypeOf(Object.prototype));
    
    // Starting Prototypal Inheritence from Here: -
    // Every Constructor has a prototype (Distinct Prototype) and all the protoypes of all the constructors have one prototype 
    
    function Person(name){
            this.name=name;
    }
    
    const person1=new Person('Happy');
    
    Person.prototype.sayname=()=>{
        console.log(`The name of the reader is ${this.name}`); 
    }
    
    
    console.log(Object.getPrototypeOf(Book.prototype)===Object.getPrototypeOf(Person.prototype));
    // Now Prototype of Book objec constructors inherits properties from the prototype of Person Objc constructor
    Object.setPrototypeOf(Book.prototype,Person.prototype);
    console.log(Object.getPrototypeOf(Book.prototype)===Person.prototype);
    
    console.log(Person.prototype.hasOwnProperty('sayname'));