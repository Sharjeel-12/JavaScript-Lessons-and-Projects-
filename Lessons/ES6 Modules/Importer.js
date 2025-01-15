// ****************************************************************
// First we import the default exports and then the named export
import myFunction, {greeting,PI,MyList} from "./Exporter.js";
// import myFunction from "./Exporter.js"
// import {greeting,PI,MyList} from Exporter.js 
myFunction("Happy");
console.log(greeting,PI,MyList);

