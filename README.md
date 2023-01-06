# Quiz-Project

## Decription

This JavaScript Code Quiz Project.  There are 5 multiple choice questions. You will be given 60 seconds to complete the test.  The timer will continue to count,  if incorrect answer or none is selected, the timer will reduce your time by 10 seconds. Your score will be based of the time remaining.  The more time left the higher your score is.  You will see your scores after all questions are answered. It will then ask you to enter your name.  If you make it to top 5 imm scoring your name will appear in the High Scores list.  High Scores list will then be shown right after you enter your name.  Good luck and have fun!

Here is the link to my game.  Feel free to share with your friends and family.

https://emil1577.github.io/Quiz-Project

## Table Of Contents

## Code Snippets:

### Variables to Start the Quiz Game

    var startBtn = document.querySelector("#Start");
    var playAgainBtn = document.querySelector("#playAgain");  
    var timer = document.querySelector("#quiz-title");

    startBtn.addEventListener("click", startgame);
    playAgainBtn.addEventListener("click", playAgain);
    
### Functions to Startand end the game

    function startgame() {
      timerStarts();
      startquiz();
      initialStart();
      getquiz();
    }
    //setting timer and how to reduce

    function initialStart () {
        startBtn.setAttribute("hidden","hidden");
        document.getElementById("submit").style.visibility = "visible";
        document.getElementById("quiz").style.visibility = "visible";  
    }

    function endQuiz () {
      startBtn.setAttribute("visible","visible");
      document.getElementById("submit").style.visibility = "hidden";
      document.getElementById("quiz").style.visibility = "hidden";
      document.getElementById("playAgain").style.visibility = "visible";
      logUserAndScore ()
      stopTimer()
    }

    function playAgain () {
      location.reload();
    }

### Timer functions and deduct timer function.  Two separate functions so I can easily restart the timer and deduct time.

    var secondsLeft = 60;
    var timerInterval =("");

    function timerStarts() {
        timerInterval = setInterval (function() {
            secondsLeft--;
            timer.textContent = secondsLeft + " left";
            if(secondsLeft <= 0) {
              endQuiz();
            }
        },1000);
    }

    function stopTimer () {
      clearInterval(timerInterval);
      timer.textContent = ("QUIZ ENDS");
    }

    // startTimer.textContent = "Time Reduced";
    function deductTime () {
        secondsLeft = secondsLeft - 10;
    } 





