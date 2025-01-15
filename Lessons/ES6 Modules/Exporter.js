// There are two kinds of exports: 1- Named 2- Default


const greeting="Hi";
const PI=Math.PI;
const MyList=[1,2,3,"hello"];
function sayHello(name){
    console.log("hello "+name);
}
// First is the Example of Default Export (can have only a single default export at the end of module)
// Second is the Example of Named Export (can have multiple Named Exports in our module)
export default sayHello;
export {greeting,PI,MyList};


