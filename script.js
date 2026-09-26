const startButton = document.getElementById("startButton");
const board = document.getElementById("innerBox");
const ground = document.getElementById("ground");
const winnerModel = document.getElementById("winner");
const message = document.getElementById("message");



let isStartflag = false;
let currentPlayer = "X";

const winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

startButton.addEventListener("click",function(){
    if(!isStartflag){
        console.log("Game is On");
    }else{
        console.log("Game is off");
    }
 isStartflag = !isStartflag;
});

function checkWinner(){

    const boxes =Array.from(document.querySelectorAll(".mainBox"))
     
    for(let condition of winningCondition){ 
        const [a,b,c] = condition;
        const valA = boxes[a].textContent;
        const valB = boxes[b].textContent;
        const valC = boxes[c].textContent;
        if(valA !=="" && valA === valB&& valA === valC){
            return valA;
        }

    }
    const isTie = boxes.every(box => box.textContent !=="");
    if(isTie){
        return " Tie";
    }
    return null;
}

board.addEventListener("click",function(event){
    if(!isStartflag){
        return;
    }
    const clickedBox = event.target;

    if(!clickedBox.classList.contains("mainBox")){
            return;
    };

    if(clickedBox.textContent !==""){
        return;

    }
    clickedBox.textContent = currentPlayer;
    console.log(`Placed ${currentPlayer}in:`,clickedBox);
    
    const winner = checkWinner();



 

    if(winner){
        if(winner.trim() === "Tie"){
           winnerModel.textContent="It's a Tie";

        }else{
            message.textContent=`player ${winner} wins!`;
        }
        winnerModel.classList.remove("hidden");
        isStartflag = false;
        return;
    }
    currentPlayer = currentPlayer === "X"?"O":"X";
});
