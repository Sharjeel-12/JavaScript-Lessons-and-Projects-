const GameBoard={R1:['','',''],R2:['','',''],R3:['','','']};
let controlButtons=document.querySelectorAll(".controlButton");
let turn=0;
let memory=[];
let Gameovr=0;
function Player(name,mark){
    this.name=name;
    this.mark=mark
    this.move=()=>{
         return this.mark;
    }
}

function start(){
 
    controlButtons.forEach((btn,index)=>{
            
       
        btn.style.fontStyle="bold";
        btn.style.fontSize="60px";
        if (Gameovr==0){
            btn.addEventListener("click",getParams);
            btn._listener=getParams;
        }
        else{
            btn.removeEventListener("click",btn._listener);
        }
         
        if (index<=2){
            console.log("Hello");
            btn.innerHTML=GameBoard.R1[index];
            
        }
        if (index>2 && index<=5){
            console.log("Hello");
            btn.innerHTML=GameBoard.R2[index-3];
        }
        if (index>5 && index<=8){
            btn.innerHTML=GameBoard.R3[index-6];
        }
    })
}
function getParams(event){
    
   let r=Number(event.target.getAttribute("r"));
   let pos=Number(event.target.getAttribute("pos"));
   params=[r,pos];
   if (turn%2==0){
    GameBoardUpdater(params,player_1);
   }
   else{
    GameBoardUpdater(params,player_2);
   }
   turn++;
  
    start();
  

}


function GameBoardUpdater(params,player){
    console.log(memory);
    const [r,pos]=params;
    hit=player.move();
    if (memory.map(JSON.stringify).includes(JSON.stringify(params))){
        console.log("invalid Move");
        turn --;
    } 
    else{
        memory.push(params);
        if (r==1){
            GameBoard.R1[pos-1]=hit;
            console.log(GameBoard.R1);
        }
        if (r==2){
            GameBoard.R2[pos-1]=hit;
            console.log(GameBoard.R2);
        }
        if (r==3){
            GameBoard.R3[pos-1]=hit;
            console.log(GameBoard.R3);
        }
        GameOver(GameBoard,player);
    }
   
   
    // return GameBoard;
}

function RefreshAndRestart(){
    Gameovr=0
    memory=[];document.getElementById("result").innerHTML="";
    GameBoard.R1=['','',''];GameBoard.R2=['','',''];GameBoard.R3=['','',''];
    start();
    console.log(GameBoard);
}



function GameOver(GB,player){
    let detector=0;
    if ((GB.R1[0] === GB.R1[1] && GB.R1[0] === GB.R1[2] && GB.R1[0] !== '') || (GB.R2[0] === GB.R2[1] && GB.R2[0] === GB.R2[2] && GB.R2[0] !== '' ) || (GB.R3[0] === GB.R3[1] && GB.R3[0] === GB.R3[2] && GB.R3[0] !== '') || (GB.R1[0] === GB.R2[1] && GB.R2[1] === GB.R3[2] && GB.R1[0] !== '') || (GB.R1[2] === GB.R2[1] && GB.R2[1] === GB.R3[0] && GB.R1[2] !== '') || (GB.R1[0] === GB.R2[0] && GB.R1[0] === GB.R3[0] && GB.R1[0] !== '') || (GB.R1[1] === GB.R2[1] && GB.R1[1] === GB.R3[1] && GB.R1[1] !== '') || (GB.R1[2] === GB.R2[2] && GB.R1[2] === GB.R3[2] && GB.R1[2] !== '')  ){
            document.getElementById("result").innerHTML=`Game Over and ${player.name} wins`; 
            let RestartBtn=document.getElementById('restart');
            Gameovr=1;
            
               
               
            
            RestartBtn.addEventListener("click",()=>{
                
                RefreshAndRestart();
            })
            
    }
    else{
        GB.R1.forEach((element) => {
            if  (element==''){
                detector++;
            }
        });
        GB.R2.forEach((element) => {
            if  (element==''){
                detector++;
            }
        });
        GB.R3.forEach((element) => {
            if  (element==''){
                detector++;
            }
        });
        if(detector==0){
            console.log("Game Over. It is a Tie")
            RefreshAndRestart();
        }
        detector=0;
    }
}



const player_1=new Player("Sharjeel","X");
const player_2=new Player("RAIK","O");

start();
