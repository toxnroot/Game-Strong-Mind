const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const red = document.getElementById("red");
const butStart = document.getElementById("but-start");
const butStop = document.getElementById("but-stop");
const finsh = document.getElementById("finsh");
const wrong = document.getElementById("wrong");
const correct = document.getElementById("correct");
const close = document.getElementById("close");
const setting = document.getElementById("setting");
const settings = document.getElementById("settings");

//Function settings hide menu settings
close.addEventListener("click",()=>{
  setting.style.display = "none";
});

//Function settings show menu settings
settings.addEventListener("click",()=>{
  setting.style.display = "flex";
});







let numWrong;
let numCorrect;
let saveLevel;
let rg;

onload = function (){
  range.disabled = true;
 brightness();
 dis(true);
 if (localStorage.getItem("Level")){
  saveLevel = localStorage.getItem("Level");
  range.value = +saveLevel;
  rangeValue.textContent = `Levle ${+saveLevel - 1}`;
}else{
 localStorage.setItem("Level",range.value);
 console.log('set itme in loclal storage');
}
}

let list = [];
butStart.addEventListener("click",()=>{
 wrong.innerHTML = `Wrong : ${0}`;
 correct.innerHTML = `Wrong : ${0}`;
 numCorrect = 0;
 numWrong = 0;
 let v_timer = +range.value * 1000 + 500;
 butStart.style.display = "none";
 butStop.style.display = "inline-block";
 /*
 here whil function 
 genaret random number

 */
let previousNumber = null;
 
 //###########22
 let time = setInterval(function (){

   const randomNumber = generateRandomNumber(previousNumber);
   previousNumber = randomNumber;
   console.log(randomNumber);  
  
  
  if(randomNumber == 0){
  brightness(100)

  
  }else if(randomNumber == 1){
  brightness(50,100)

  }else if(randomNumber == 2){
  
  brightness(50,50,100)

  
  }else if(randomNumber == 3){
  brightness(50,50,50,100)

  }else{
   console.log("error");
  }
   list.push(randomNumber);
   
   if (check_stop == true) {
    clearInterval(time);
    
    list.splice(0, list.length);
    numElement.splice(0, numElement.length);
    butStart.style.display = "inline-block";
    butStop.style.display = "none";
    clearTimeout(countDown);
    brightness()
    
   }


  dis(true)
//Math.floor(Math.random()*4)
 
 },1000);
 
 
 let countDown = setTimeout(()=>{
  clearInterval(time);
  finsh.style.color = 'dodgerblue';
  finsh.style.textShadow = '0px 0px 8px';
  finsh.textContent = 'start remembering colors';
  butStart.style.display = "inline-block";
  butStop.style.display = "none";
  dis()
  brightness()
 
 },v_timer);
 
  finsh.style.display = "inline-block";
  finsh.style.color = 'lawngreen';
  finsh.style.textShadow = '0px 0px 8px';
  finsh.textContent = 'Start Game';
 
  check_stop = false;
  brightness()
  if (list.length <= numElement.length) {

   list.splice(0, list.length);
   numElement.splice(0, numElement.length);


  } else {

   console.log('list is any');
  }

});//End click start button

let check_stop;

butStop.onclick = function st(){
   check_stop = true;
   finsh.style.color = 'orange';
   finsh.style.textShadow = '0px 0px 8px';
   finsh.textContent = 'Stop Game';
   brightness();    
 
}//End click stop button





let numElement = [];

const buttons = ['blue', 'yellow', 'green', 'red'];

buttons.forEach(button => {
 const element = document.getElementById(button);

 element.addEventListener('click', () => {
  handleButtonClick(button);
 });
});

/*===========================

#The Function handleButtonClick 
is Click All Buttons [ Blue & Yellow & Green & Red ]
and checked if length not equale Array 
can clicked and if equle Disabled Buttons

=============================*/
function handleButtonClick(buttonName) {
 if (numElement.length != list.length + 1) {
  
 
 if (buttonName === 'blue') {
  brightness(100)

 } else if (buttonName === 'yellow') {
  brightness(50,100)

 } else if (buttonName === 'green') {
  brightness(50,50,100,50)

 } else if (buttonName === 'red') {
  brightness(50,50,50,100)

 }
compareArrays(list,numElement);
}else{
 dis(true)
}
}

/*================================

This Function brightness Is Control
brightness Buttons 


================================*/


function brightness(bluee="50",yelloww="50",greenn="50",redd="50"){
 
   blue.style.filter = `brightness(${bluee}%)`;
   yellow.style.filter = `brightness(${yelloww}%)`;
   green.style.filter = `brightness(${greenn}%)`;
   red.style.filter = `brightness(${redd}%)`;
 
}

/*==============================

Function compareArrays Checked if equals or not

And Used Tow Array

==============================*/


function compareArrays(array1, array2) {

 if (array1.length !== array2.length) {
  console.log('المصفوفتين غير متطابقتين في الأطوال');
  return;
 }

 // مقارنة القيم في المصفوفتين
 for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
     numWrong++
     wrong.innerHTML = `Wrong : ${numWrong}`;
  }else{
     numCorrect++
     correct.innerHTML = `Correct : ${numCorrect}`
   
  }
  
 
  
 }

  if (numWrong == 0) {
  rg = +range.value + 1;
  range.value = rg;
  rangeValue.textContent = `Levle ${rg - 1}`;
  localStorage.setItem("Level",rg);
  checkWin("win");
  }else{
   checkWin("lose");
   
  }
}

// مثال على استخدام وظيفة المقارنة




//--------------------

// const progressBar = document.getElementById('progressBar');

// progressBar.addEventListener('input', () => {
//  let progressValue = progressBar.value;
//  console.log('قيمة التقدم: ' + progressValue);
// });

//Function Control on the buttons if Disabled or not

function dis(bool=false){
 blue.disabled = bool; 
 yellow.disabled = bool; 
 green.disabled = bool; 
 red.disabled = bool; 
}

var range = document.getElementById("customRange");
var rangeProgress = document.getElementById("rangeProgress");
var rangeValue = document.getElementById("rangeValue");

range.oninput = function() {
 var value = (this.value - this.min) / (this.max - this.min) * 100;
 rangeProgress.style.width = value;
 
  rangeValue.textContent = `Levle ${rg}`;

}

range.value = 2;

function checkWin(winOrLose="win"){
 if (winOrLose == "win") {
   finsh.style.color = 'greenyellow';
   finsh.style.textShadow = '0px 0px 8px';
   finsh.textContent = 'You Win The Game';
   butStart.style.display = "inline-block";
   butStop.style.display = "none";  
 } else {
   finsh.style.color = 'orangered';
   finsh.style.textShadow = '0px 0px 8px';
   finsh.textContent = 'You Lose The Game';
   butStart.style.display = "inline-block";
   butStop.style.display = "none"; 
  }
  brightness();

}


function generateRandomNumber(previousNumber) {
 let randomNumber;

 do {
  randomNumber = Math.floor(Math.random() * 4);
 } while (randomNumber === previousNumber);

 return randomNumber;
}

