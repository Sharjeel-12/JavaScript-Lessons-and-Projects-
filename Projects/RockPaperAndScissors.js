console.log("*************  Welcome to ROCK PAPER and SCISSORS!  *************");
//Define the Scores of Computer and Player

// this is the UI Branch
let ComputerScore=0; let HumanScore=0;
let imageScrolling=0;
let rounds=0;let starter=0;
let scoreBoard=document.getElementById("ScoreBoard");
let startBtn=document.getElementById("start");
let img_1=document.getElementById("img-1");
let img_2=document.getElementById("img-2");
// let div_1=document.getElementById("C1");
img_1.style.display="none";
img_2.style.display="none";
function setImg(choice){
    img_1.style.display="block";
    if (choice=="rock"){
        
        img_1.src="rock-paper-scissors-296854_1920.png"
    }
    if (choice=="paper"){
        
        img_1.src="rock-paper-scissors-296855_1920.png"
    }
    if (choice=="scissors"){
        img_1.src="rock-paper-scissors-296853_1920.png"
    }
    
}

function getHumanChoice(btn){
// let choice= window.prompt("Enter your choice of move");
let choice=btn.getAttribute("id");
choice=choice.toLowerCase();
// console.log(choice);
setImg(choice);
if(choice=="rock" | choice=="paper" | choice=="scissors"){
    
    return choice;
}
else{
    alert("invalid Choice/ Move");
}

}



function getComputerChoice(){
    let choice=Math.random();
    if (choice<=0.33){
        choice="rock";
        img_2.src="rock-paper-scissors-296854_1920.png"
    }
    else if (choice>0.33 && choice<=0.66){
        choice="paper";
        img_2.src="rock-paper-scissors-296855_1920.png"
    }
    else if (choice>0.66 && choice<=1){
        choice="scissors";
        img_2.src="rock-paper-scissors-296853_1920.png"
    }
    clearInterval(imageScrolling);
    return choice;
}



function ScoreDecider(HumanChoice,CompChoice){

    if (HumanChoice=="rock"){
        if (CompChoice=="paper"){
            ComputerScore++;
        }
        if (CompChoice=="rock"){
            ComputerScore=ComputerScore;
            HumanScore=HumanScore;
        }
    if (CompChoice=="scissors"){
        HumanScore++;
}
    }
    if (HumanChoice=="paper"){
        if (CompChoice=="paper"){
            ComputerScore=ComputerScore;
            HumanScore=HumanScore;
        }
        if (CompChoice=="rock"){
            HumanScore++;
    }
    if (CompChoice=="scissors"){
        ComputerScore++;
}
    }
    if (HumanChoice=="scissors"){
        if (CompChoice=="paper"){
            HumanScore++;
        }
        if (CompChoice=="rock"){
            ComputerScore++;
    }
    if (CompChoice=="scissors"){
        ComputerScore=ComputerScore;
        HumanScore=HumanScore;
}
    }

    console.log(CompChoice,HumanChoice);
    console.log(ComputerScore,HumanScore);
    scoreBoard.innerHTML=""
    scoreBoard.innerHTML+=`<h1 class="center">SCORE BOARD</h1><p>Your Score:<span >${HumanScore}</span> </p> 
    <p>Computer Score: <span >${ComputerScore}</span></p>`
    rounds++;
    
    console.log(rounds);
    if (rounds%5==0){
        
        endGame();
    }
    else{
        stopRound();
    }
    // Start();
}

function stopRound(){
    clearInterval(imageScrolling);
    let nxt=document.getElementById("nextRound");
    nxt.addEventListener("click",newRound);
    nxt._listener=newRound;
    let PlayBtns=document.querySelectorAll(".Playbtn");
    PlayBtns.forEach((btn)=>{
        play=btn._listener;
        btn.removeEventListener("click",play);
        
    })
}
function newRound(){
    imageScrolling= setInterval(imageScroll,10);
    let nxt=document.getElementById("nextRound");
    newRnd=nxt._listener;
    nxt.removeEventListener("click",newRnd);
    let PlayBtns=document.querySelectorAll(".Playbtn");
    PlayBtns.forEach((btn)=>{
        play=btn._listener;
        btn.addEventListener("click",play);
        
    })
}

function endGame(){
    startBtn.addEventListener("click",Start);
    startBtn.innerHTML="Re-Start";
    let PlayBtns=document.querySelectorAll(".Playbtn");
    PlayBtns.forEach((btn)=>{
        play=btn._listener;
        btn.removeEventListener("click",play);
        
    })


        if (HumanScore>ComputerScore){
       console.log("<p>Game Over and You Win !!!!!!</p>")
       scoreBoard.innerHTML+=`<p>Game Over and You Win !!!!!!</p>`;
    }
    if (HumanScore==ComputerScore){
        console.log("<p>Game Over. It is a TIE!");
        scoreBoard.innerHTML+=`<p>Game Over. It is a TIE!</p>`;
    }
    if (HumanScore<ComputerScore){
        console.log("<p>YOU LOST !!!!!!<p>");
        scoreBoard.innerHTML+=`<p>YOU LOST !!!!!!</p>`;

    }

}




function PlayRound(btn){
    
   return ()=> ScoreDecider(getHumanChoice(btn),getComputerChoice())
}

function imageScroll(){
    img_2.style.display="block";
    let choice=Math.random();
    if (choice<=0.33){
        img_2.src="rock-paper-scissors-296855_1920.png";
    }
    else if (choice>0.33 && choice<=0.66){
        img_2.src="rock-paper-scissors-296854_1920.png";
    }
    else if (choice>0.66 && choice<=1){
        img_2.src="rock-paper-scissors-296853_1920.png";
    }

}
function Start(){
    scoreBoard.innerHTML=`<h1 class="center">SCORE BOARD</h1>`;
    startBtn.removeEventListener("click",Start);
        imageScrolling= setInterval(imageScroll,10);
    let PlayBtns=document.querySelectorAll(".Playbtn");
    PlayBtns.forEach((btn,index)=>{
        // btn.addEventListener("click",()=>getHumanChoice(btn));
        const play=PlayRound(btn);
        btn._listener=play;
        btn.addEventListener("click",play);
    })

}


    startBtn.addEventListener("click",Start);
   
