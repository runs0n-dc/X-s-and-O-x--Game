console.log("Tic-tac-game");
const re=document.getElementById("reset");
let turn="X";let isgameover=false;
let boxes=document.getElementsByClassName("box");
const reset=()=>{
    Array.from(boxes).forEach(function(element){
        let boxtext=element.querySelector(".boxtext");
        boxtext.innerText="";
        turn='X';
        document.getElementById("info").innerText="Turn for "+ turn;
})
}
const changeTurn=()=>{
    return turn==="X"?"0":"X"
}
const checkWinner=()=>{
    console.log('won',turn);
    let boxtxt=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<wins.length;i++){
        if(boxtxt[wins[i][0]].innerText!==""&&(boxtxt[wins[i][0]].innerText===boxtxt[wins[i][1]].innerText)&&(boxtxt[wins[i][0]].innerText===boxtxt[wins[i][2]].innerText)){
            document.getElementById("info").innerText ="GAME OVER "+ turn +" Won";
         

            isgameover=true;
        }
    }   
}


Array.from(boxes).forEach(function(element){
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",function(){
    if(boxtext.innerText===''){
        boxtext.innerText=turn;
        checkWinner();
        turn=changeTurn();
        
        if(!isgameover){ document.getElementById("info").innerText = "Turn for "+ turn;}
      }
    })

})

re.addEventListener("click",reset);;