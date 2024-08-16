const gameInfo=document.querySelector(".game-info");
const boxes=document.querySelectorAll(".box");
const newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

//all possible combination of winning
const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

initGame();
//start game
function initGame(){
    currentPlayer="X";
    gameInfo.innerText=`Current Player-${currentPlayer}`;
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    newGameBtn.classList.remove("active");
    boxes.forEach((box,index)=>{
        box.innerText="";
        box.style.pointerEvents="all";
        // box.classList.remove("win");
        box.classList=`box box${index+1}`; 
    })

    
}

function handleClick(index){
    //make sure only empty cell are filled
    if (gameGrid[index] === ""){
        boxes[index].style.pointerEvents = "none";
        //update ui
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
        
        swapTurn();

        //check if player won
        checkGameOver();

    }
}

function checkGameOver(){
    let result="";
    winningPositions.forEach(function(position){
        if(gameGrid[position[0]] != "" && gameGrid[position[1]] != "" && gameGrid[position[2]] != "" && gameGrid[position[0]]===gameGrid[position[1]] && gameGrid[position[1]]===gameGrid[position[2]])
        // if (
        //     (gameGrid[position[0]] !== "" ||
        //       gameGrid[position[1]] !== "" ||
        //       gameGrid[position[2]] !== "") &&
        //     gameGrid[position[0]] === gameGrid[position[1]] &&
        //     gameGrid[position[0]] === gameGrid[position[2]]
        //   )
        {
           
            if(gameGrid[position[0]]==="X"){
                result="X";
            }
            else
            result="O";
            
            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            })

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
            
        }

    });
    //if winner found
    if(result!==""){
        gameInfo.innerText=`Winner Player-${result}`;
        newGameBtn.classList.add("active");
    }

    //if no winner found ,means game is tie
    let boardFilled=true;
    gameGrid.forEach((grid)=>{
        if(grid==""){
            boardFilled=false;
        }
    });
    if(boardFilled){
        gameInfo.innerText="Game Tied !";
        newGameBtn.classList.add("active");
        return;
    }

}

function swapTurn(){
    if(currentPlayer==="X")
     currentPlayer="O";
    else
    currentPlayer="X";
    
    //update ui
    gameInfo.innerText=`Current Player-${currentPlayer}`;
}

boxes.forEach(function(box,index){
   box.addEventListener("click",()=>{
    handleClick(index);
    
   });
});

newGameBtn.addEventListener("click",initGame);
