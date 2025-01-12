// ********************************************************************************************************
// We can access sum inside the curly backets of if statement because of the lexical environment of IF STS 
// ********************************************************************************************************

function sumNums(x,y){
    var sum=x+y;
    if (x>=0 && y>=0){
        console.log(" Both X AND Y Values are +ve and the sum is: ",sum);
    }
    else{
        console.log("Either X OR Y is -ve and the sum is: ",sum);
    }
}


// ***************************************************************************
// Returning a Function Now 
// getNumber(num) function returns the adder(num) function
// ***************************************************************************

function getNumber(num){
    let first=num;
    return function adder(num){
        let second=num;
        let sum=first + second;
        return sum;
    }
}
let a=6;let b=7;
let AdderFunction=getNumber(a);
let SummedVal=AdderFunction(b);
console.log("a+b= ",SummedVal);


// ***************************************************************************
// NOW MOVING TO FACTORY FUNCTIONS
// Lets convert an object Constructor to a factor function
// ***************************************************************************



// This is an objeeecttconstructor
function User(name){
    this.name=name;
    this.discordName="@"+name;
}

let User_1=new User("Happy");
console.log(User_1.discordName);

// Let make a  factor Function as follows: -

function user(name){
    let discordName="@"+ name;
    return {name,discordName};
}

let User_2=user("Ali Bhai");
console.log(User_2);




// ***************************************************************************
// Object Short Hand Notation 
// ***************************************************************************


let Name="Muhammad Sharjeel Farzad"; let age=22; let Job="Mechanical Engineer"; let Status="PhD Student";

let Player={Name,age,Job,Status}    //Shortcut
console.log(Player);
// It will print the following : -
// {
//     Name: 'Muhammad Sharjeel Farzad',
//     age: 22,
//     Job: 'Mechanical Engineer',
//     Status: 'PhD Student'
//   }



// **************************************** 
// Private Variables anf Functions 
// **************************************** 
function player(name){
    let score=0; // private variable
    let getScore=()=>{
       return score;
    }
    let giveScore=()=>{
        score++;
    }
    return {name,getScore,giveScore};
}
let player_2=player("Happy");
player_2.giveScore();
player_2.giveScore();
console.log("PLayer 2 Score: ",player_2.getScore());

// *****************************************************
// Protoypal Inheritence in the Factories
// *****************************************************

function Gamer(name){
    // I used "user" factory function for making a gamer object
    let USER=user(name);
    let gamingWorth=0;  // private variable
    let getGamingWorth=()=>gamingWorth;
    let increaseGamingWorth=()=> gamingWorth++;
    
    
    // Syntax of Object.assign(); -
    // Object.assign(targetObj,Source_1_Obj,Source_2_Obj,...so on) 
    
    
    return Object.assign({},USER,{getGamingWorth,increaseGamingWorth});
}

let gamer_1=Gamer("Fahad");
console.log(gamer_1);


// **************************************************************************
//  Immediately Invoked Function Expressions IIFE and Encapsulation concept
// **************************************************************************

let calculator=(()=>{
    let sum=(x,y)=>x+y;
    let sub=(x,y)=>x-y;
    let prod=(x,y)=>x*y;
    return {sum,sub,prod};
})(); // defined and called the function at the same time IIFE;

console.log("CAlculator Sum", calculator.sum(a,b));


