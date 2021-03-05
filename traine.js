const circleWork = document.querySelector('.circleWork');
const timer = document.querySelector('#timer');
const numberOfRepetition = document.querySelector('#numberOfRepetition');

circleWork.addEventListener('click',function(){
    circleWork.style.backgroundColor = "red";
    timer.style.display = "block";
    numberOfRepetition.style.display = "none";
    timerFunction();
})

function timerFunction(){
   let timerTime = 2;
   
    
}