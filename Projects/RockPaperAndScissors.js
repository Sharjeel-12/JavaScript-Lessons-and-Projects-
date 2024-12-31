console.log("*************Welcome to ROCK PAPER and SCISSORS!*************");
let ComputerScore=0; let HumanScore=0;



function getHumanChoice(){
let choice= window.prompt("Enter your choice of move");
choice=choice.toLowerCase();
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
    }
    else if (choice>0.33 && choice<=0.66){
        choice="paper";
    }
    else if (choice>0.66 && choice<=1){
        choice="scissors";
    }
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

    return {ComputerScore,HumanScore} ;
}





function PlayRound(){
    let CompChoice=getComputerChoice();
    let HumanChoice=getHumanChoice();
    let Score=ScoreDecider(HumanChoice,CompChoice);
    let CompScore=Score.ComputerScore;
    let HumScore=Score.HumanScore;
    console.log(CompChoice,HumanChoice);
    console.log(CompScore,HumScore);
    console.log("********************************");
}



function PlayGame(){
    PlayRound();
    PlayRound();
    PlayRound();
    PlayRound();
    PlayRound();
    if (HumanScore>ComputerScore){
        console.log("Game Over and You Win !!!!!!")
    }
    if (HumanScore==ComputerScore){
        console.log("Game Over. It is a TIE!");
    }
    if (HumanScore<ComputerScore){
        console.log("YOU LOST !!!!!!")
    }
}




PlayGame();