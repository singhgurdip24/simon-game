let strictMode=false;
let on=false;
let noise=true;
let good;
let win;
let playOrder=[];
let order= [];
let compTurn;
let flash;
let intervalId;
let turn;

const topleft=document.querySelector("#topleft");
const topright=document.querySelector("#topright");
const bottomleft=document.querySelector("#bottomleft");
const bottomright=document.querySelector("#bottomright");
const onButton=document.querySelector("#on");
const strictButton=document.querySelector("#strict");
const startButton=document.querySelector("#start");
const turnCounter=document.querySelector("#turn");


strictButton.addEventListener('click',(event)=>{
  if(strictButton.checked==true){
    strictMode=true;
    console.log("strict button clicked");
  }else{
    strictMode=false;
  }
});

onButton.addEventListener('click',(event)=>{
  if(onButton.checked==true){
   on=true;
    console.log("power button clicked");
    turnCounter.innerHTML="-";
  }
  else{
    on=false;
    turnCounter.innerHTML="";
    clearColor();
    clearInterval(intervalId);
  }
});

startButton.addEventListener('click',(event)=>{
  if(on || win){
    play();
  }
});

function play(){

   win=false;
   playOrder=[];
   order=[];
   intervalId=0;
   flash=0;
   turn=1;
   turnCounter.innerHTML=1;
   good=true;
   for(let x=0;x<20;x++){
   order.push(Math.floor(Math.random()*4)+1);
   }
   compTurn=true;
   intervalId=setInterval(gameTurn,800);




}

function gameTurn(){

  on=false;
  if(flash==turn){

    clearInterval(intervalId);
    compTurn=false;
    clearColor();
    on=true;
  }
  if(compTurn==true){
    clearColor();
    setTimeout(()=>{
      if(order[flash]==1) one();
      if(order[flash]==2) two();
      if(order[flash]==3) three();
      if(order[flash]==4) four();
      flash++;
    },200);

  }

}

function one(){
  if(noise){
    let audio=document.getElementById('clip1');
    audio.play();
  }
  noise=true;
  topleft.style.backgroundColor="lightgreen";
}

function two(){
  if(noise){
    let audio=document.getElementById('clip2');
    audio.play();
  }
  noise=true;
  topright.style.backgroundColor="tomato";
}
function three(){
  if(noise){
    let audio=document.getElementById('clip3');
    audio.play();
  }
  noise=true;
  bottomleft.style.backgroundColor="yellow";
}
function four(){
  if(noise){
    let audio=document.getElementById('clip4');
    audio.play();
  }
  noise=true;
  bottomright.style.backgroundColor="lightskyblue";
}

function clearColor(){
  topleft.style.backgroundColor="darkgreen";
  topright.style.backgroundColor="darkred";
  bottomleft.style.backgroundColor="goldenrod";
  bottomright.style.backgroundColor="darkblue";
}

topleft.addEventListener('click',(event)=>{
  if(on){
    playOrder.push(1);
    check();
    one();
    if(!win){
      setTimeout(()=>{
        clearColor();
      },300);
    }
  }
});

topright.addEventListener('click',(event)=>{
  if(on){
  playOrder.push(2);
  check();
  two();
  if(!win){
    setTimeout(()=>{clearColor();},300);
  }
  }
});

bottomleft.addEventListener('click',(event)=>{
  if(on){
  playOrder.push(3);
  check();
  three();
  if(!win){
    setTimeout(()=>{clearColor();},300);
  }
  }
});

bottomright.addEventListener('click',(event)=>{
  if(on){
  playOrder.push(4);
  check();
  four();
  if(!win){
    setTimeout(()=>{
      clearColor();
    },300);
  }
  }
});

function check(){
  if(playOrder[playOrder.length-1]!==order[playOrder.length-1]){
    good = false;
    console.log(1);
  }

  if(playOrder.length==3 && good){
    console.log(6);
    winGame();
    console.log(5);
  }
  if(good==false){
console.log(7);
    flashColor();
    console.log();
    turnCounter.innerHTML="NO!";
    setTimeout(()=>{
      turnCounter.innerHTML=turn;
      clearColor();
      if(strictMode){
        play();
      }else{
        compTurn=true;
        flash=0;
        playOrder=[];
        good=true;
        intervalId=setInterval(gameTurn,800);
      }
    },800);
    noise=false;
}
    if (turn == playOrder.length && good && !win) {
      console.log(2);
       turn++;
       playOrder = [];
       compTurn = true;
       flash = 0;
       turnCounter.innerHTML = turn;
       intervalId = setInterval(gameTurn, 800);
       console.log(3);
     }
console.log(4);

  }
  function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false;
    win = true;
  }

  function flashColor() {
    console.log(11);
  topleft.style.backgroundColor = "lightgreen";
  topright.style.backgroundColor = "tomato";
  bottomleft.style.backgroundColor = "yellow";
  bottomright.style.backgroundColor = "lightskyblue";
}
