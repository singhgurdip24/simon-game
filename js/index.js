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
   console.log(order);
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
  bottomleft.style.backgroundColor="skyblue";
}
function four(){
  if(noise){
    let audio=document.getElementById('clip4');
    audio.play();
  }
  noise=true;
  bottomright.style.backgroundColor="lightyellow";
}

function clearColor(){
  topleft.style.backgroundColor="darkgreen";
  topright.style.backgroundColor="darkred";
  bottomleft.style.backgroundColor="goldenrod";
  bottomright.style.backgroundColor="darkblue";
}
