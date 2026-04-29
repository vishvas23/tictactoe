let boxes=document.querySelectorAll(".box");
let restbtn=document.querySelector("#rest-btn");
let newgamebtn=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerX,playero;
let count=0;
const winpatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        console.log("button was cleared");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            showDraw();
        }
    });
});

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }
};

const showDraw=()=>{
    msg.innerText="Oops 🫨, Game is drawn ,Try Again 😊 ";
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner} 🏆`
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkWinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText; 
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !="" ){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner");
                showWinner(pos1val);
            }
            
        }
    }
};

const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

newgamebtn.addEventListener("click",resetGame);
restbtn.addEventListener("click",resetGame)
