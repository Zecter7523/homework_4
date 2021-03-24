let secondsLeft = 20;
let startBtn = document.querySelector("#startBtn");
let timerDisplay = document.querySelector("#timer");
let addTime = document.querySelector("#addTime");
console.log("the script is connected");

function playGame() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;
        console.log(secondsLeft);
        //timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
        
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          timerDisplay.textContent = "game over";
         
         
        }
    
      },1000 );




}

startBtn.addEventListener("click", playGame);