console.log("Welcome to our Simple Calculator");
let DisplayScreen=document.getElementById("display");
let calBtns=document.querySelectorAll(".calBtn");
let opBtns=document.querySelectorAll(".opBtn");
let display=document.createElement("div");
DisplayScreen.appendChild(display);
let val=""; //value to be displayed on the calculator;
let arr=[]; let ans=null; let op=[];  let i=0;

function setDisplay(){
    // display.style.border="2px solid black"
    display.style.position="absolute";
    display.style.height="40%";
    display.style.width="90%";
    display.style.bottom="20px";
    display.style.right="20px";
    display.style.fontSize="1.5em";
    display.style.fontWeigth="bold";
    display.style.textAlign="right";
}


    

function addDynamics(Btns){
    Btns.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            btn.style.backgroundColor="azure";
            setTimeout(()=>{
                if(btn.getAttribute("class")=="calBtn"){
                    btn.style.backgroundColor="rgb(104, 104, 156)";
                }
                else{
                    btn.style.backgroundColor="rgb(150, 118, 71)";

                }
               
            },150)
        })
    })
}


function resetDisplay(){

    setDisplay();
    display.innerHTML="0";
    val='';
    arr.splice(0,2);
 i=0;
    op.splice(0,op.length);
    }



function activateBtns(Btns){
    Btns.forEach((Btn) => {
        Btn.addEventListener("click",getValue);
        Btn._listener=getValue;
        
    });
    
}


function deActivateBtns(Btns){
    Btns.forEach((btn)=>{
        let getValue=btn._listener;
        btn.removeEventListener("click",getValue);
    })

}

function getValue(event){
    let dot=0;
   let value=event.target.getAttribute("id");
   let valType=event.target.getAttribute("class");
  
   if (valType=="calBtn"){
    if(value=="." && dot==0 && val==""){
        val="0"
        dot++;
       }
    if (val=="" && value=="0"){
        console.log("hello");
        display.innerHTML="0";
       }
       else{
        val+=value;
        
        displayVal(val);
        
       }
   }
   else{
    if (value=="+/-"){
        val='-'+val;
        displayVal(val);
    }
    if(value=="AC"){
        resetDisplay();
    }
    if (value=="%"){
        val=Number(val)/100;
        displayVal(val.toString());
    }
   
   if(value!=="+/-" && value!=="AC" && value!=="%" ){
    op.push(value);
    console.log(op);
    arr.push(Number(val));
    val="";
    if (value=="="){
        doCal(arr,op[i]);
        deActivateBtns(opBtns);
        val='';
    arr.splice(0,2);
 i=0;
    op.splice(0,op.length);
    }

    if(arr.length==2){
       
        console.log(op[i]);
        doCal(arr,op[i]);
        i++;
       
    }
   }
   
   }
  
  
  
activateBtns(opBtns);
}


function  doCal(arr,opr){
    let [x,y]=arr;


    arr.splice(0,2);
if(opr=="+"){
    ans=x+y;  
}
if(opr=="*"){
    ans=x*y;  
}
if(opr=="-"){
    ans=x-y;  
}
if(opr=="/"){
    ans=x/y;  
}


arr.push(ans);
display.innerHTML=ans.toString();
}










function displayVal(value){
if (value.length<=13){
    display.innerHTML="";
    display.innerHTML=value.toString();
    
}
    
    
}
function StartCalculator(){
    resetDisplay();
    addDynamics(calBtns);
    addDynamics(opBtns);
    activateBtns(calBtns);
    
}



StartCalculator();









