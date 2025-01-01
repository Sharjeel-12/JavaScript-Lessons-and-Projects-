console.log("Weclome to My_SKETCHBOOK.com");
let dimension=0; let Color="white";
let PromBtn=document.getElementById("promBtn");
let ResetBtn=document.getElementById('reset');
let GridBox=document.getElementById("gridContainer");
let PlayBtns=document.querySelectorAll(".PlayBtn");

// let gridWidth=GridBox.style.width;
function createBlocks(num){
    let divs=[];
    for (let i=0;i<num;i++){
        divs[i]=document.createElement("div");
        divs[i].setAttribute("id",`${i}`);
        divs[i].setAttribute("class",`child`);
        divs[i].addEventListener("mouseover",paintBlock);
    
    }

    return divs;
}
function paintBlock(event){
    
    index=event.target.getAttribute("id");
    console.log(index);
    let element=document.getElementById(index);
    element.style.backgroundColor=Color;
    
    
}

function createGrid(order){

    // console.log("HI")
let num=order*order;
let divs=createBlocks(num);
divs.forEach((div)=>{
GridBox.appendChild(div);
GridBox.style.width="80%";
GridBox.style.height="800px";
div.style.width=((100.00/(order)))+"%";
div.style.height=((100.00/(order)))+"%";
})

}

function StartSketchBoard(order){
   
    createGrid(order);

}

function Refresh(){

    GridBox.innerHTML="";

}

function getDimensions(){

    Refresh();
    dimension=Number(prompt("Enter the Dimensions (Less than 100):-"));
    console.log(dimension);
    if (dimension>0 && dimension<=100){
        StartSketchBoard(dimension);
    }
    else{
        alert("Invalid Entry");
    }

    

}

PlayBtns.forEach((btn)=>{
    btn.addEventListener("click",(event)=>
    {
         Color=event.target.getAttribute("id");
        
    })
    
})

ResetBtn.addEventListener("click",()=>{
    let sqs=document.querySelectorAll(".child");
    sqs.forEach((sq)=>{
        sq.style.backgroundColor="white";
    })
})
PromBtn.addEventListener("click",getDimensions);