// Making the parent class User 

class User{

    constructor(fullName){
        this.FullName=fullName;

    }
    get FirstName(){
        this.firstName=this.FullName.split(" ")[0];
        return this.firstName;
    }
    set FirstName(name){
        this.firstName= name;
        this.FullName=this.firstName+" "+this.FullName.split(" ")[1];
    }
    get LastName(){
        this.lastName=this.FullName.split(" ")[1];
        return this.lastName;
    }
    set LastName(name){
        this.lastName= name;
        this.FullName=this.FullName.split(" ")[0]+" "+this.lastName;
    }

}

let user_1=new User("Fatima Farzad");

console.log(user_1.FirstName);
console.log(user_1.LastName);

let user_2=new User("Ali Khan");
user_2.FirstName="Sher";
console.log(user_2.FullName);


user_2.LastName="Singh";
console.log(user_2.FullName);




//  Extending the class User(Parent class) for the Player CHild class
// In the same way we can also extend the object s
class Player extends User{
    constructor(Name,Worth,Score){
        // Call the Constructor of the Parent Class by using super 
        super(Name);
        if(Worth<=1 && Score<=100){

            this.worth= Worth;
            this.score=Score;
        
        }
        else{
            console.log(`Invalid parameters to the object ${this.FullName}`) ;
        }
    }

    get Performance(){
        this.performance=0.2*(this.worth)+0.8*(this.score/100);
        return (this.performance)*100;
    }
    set Performance(per){
        this.performance=per/100;
        this.score=((this.performance-0.2*(this.worth))/0.8)*100;
    }
}

let player_1=new Player("Muhammad Sharjeel",0.8,70);
console.log("Playe 1 performance is: ",player_1.Performance);

player_1.Performance=80;
console.log(player_1.score);
console.log(player_1.FirstName);
console.log(player_1.LastName);
console.log(player_1);