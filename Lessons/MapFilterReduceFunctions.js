// *******************************************
// Studying the Map, Filter and Reduce Functions
// *******************************************

let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
// let arr=[1,2,3,4,5];

function addOne(num){
   return num+=1;
}

// ********************* 1-) The Map Function *****************************

let UpdatedArr=arr.map(addOne);
console.log("FIrst Update: ",UpdatedArr);

// alternatively we can also write to double each element

let UpdtaedArr_2=arr.map((element)=>{
    return element=2*element;
})
console.log("Second Update: ",UpdtaedArr_2);


// ********************* 1-) The Filter Function *****************************

//Filters out those elements for which the call back returns true value


let eveArray=arr.filter((element)=>{
    return element%2===0;
})

console.log("The Even Filtered elements are: ",eveArray);


// ********************* 1-) The Reduce Function *****************************

// Used for purposes like adding, subtracting or multiplying all the array elements


// If total is initialized in the second argument of reduce(callback(total,current),initialTotalValue) then current will be the first element of the array
// If no initial total value is provided then total becomes the first array element and current becomes the second array element


// Example when total not defined
let SumofArr=arr.reduce((total,element)=>{
    return total+element;
})
console.log("Sum of all Array elemets is: ", SumofArr);

// Example when total defined

let ProdofArr=arr.reduce((total,element)=>{
    return total*element;
},1)
console.log("Product of all Array elemets is: ", ProdofArr);



// Making TripleEvenAdder FUnction using map filter and reduce functions 

function TripleEvenAdder(list){
    let evenElems=list.filter((element)=>{
        return element%2===0;
    })
    let tripledEven=evenElems.map((elem)=>{
        return elem=3*elem;
    })
     let addedTripleEven=tripledEven.reduce((total,current)=>{
        return total+current;
     })

     return(addedTripleEven);

}


let result=TripleEvenAdder(arr);
console.log("TriplevenAdder gives: ",result);
