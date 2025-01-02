// *******************************************
// Differences between objects and Primitives
// *******************************************



// 1-) No Change in the primitive if the reference is changed!!


let primitive=0;
let copyPrim=primitive;

let Obj={name:"Muhammad Sharjeel Farzad"};
let RefObj=Obj;


copyPrim++;
console.log("******No Change in the primitive if the reference is changed!!*******");
console.log(primitive); // will output 0 /No Change in value of primitive;

RefObj.name="Muhammad Haris";
console.log(Obj.name); // will output the updated Name: "Muhammad Haris" because the reference was Updated

// 2-) A Wonderful example using functions: --

let primitive_2=0;
let Obj_2={count:0};

function primCount(counter){

counter++;

}

function ObjectCountee(ObjCounter){

    ObjCounter.count+=1;

}

primCount(primitive_2);
ObjectCountee(Obj_2);



console.log("*****A Wonderful example using functions*****");
console.log(primitive_2);//No Change in value
console.log(Obj_2.count);// UPdtaed Count "!" will be shown because the reference changes inside the function




//  3-) Reassigning the Object will have no effect on its reference: ---

let NewObj={class:"Math",id:0};
let Reference=NewObj;

// ReAssigning the object to New Parameters
 
NewObj={class:"English",id:0};

console.log("The referenec Object Remains the same");
console.log(Reference); //logs {class:"Math",id:0}
console.log(NewObj); //logs {class:"English",id:0}

