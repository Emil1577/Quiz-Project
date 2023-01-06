# Quiz-Project

## Decription

This JavaScript Code Quiz Project.  There are 5 multiple choice questions. You will be given 60 seconds to complete the test.  The timer will continue if your answer is correct. If incorrect answer or none is selected, the timer will reduce your time by 10 seconds. Your score will be based on the time remaining.  The more time left the higher your score is.  Your scores will appear after all questions are rendered and answered. You will be ask to enter your name.  If you make it to top 5 highest scores, your name will appear in the High Scores list.  High Scores list appear right after you enter your name.  Good luck and have fun!

Here is the link to my game.  Feel free to share with your friends and family.

https://emil1577.github.io/Quiz-Project


## Table Of Contents

1: [Webpage Screenshot](https://github.com/Emil1577/Quiz-Project/blob/main/README.md#webpage-screenshots)
2: [Code Snippets](https://github.com/Emil1577/Quiz-Project/blob/main/README.md#code-snippets)
3: [How to Play Instructions:](https://github.com/Emil1577/Quiz-Project/blob/main/README.md#how-to-play-instructions)
4: [My Contact Information](https://github.com/Emil1577/Quiz-Project/blob/main/README.md#my-contact-information)

## Webpage Screenshots:

<img width="1129" alt="Screen Shot 2023-01-05 at 7 23 25 PM" src="https://user-images.githubusercontent.com/119825000/210923698-cf7416b4-40a3-4b14-8244-2d2dac402117.png">

<img width="1129" alt="Screen Shot 2023-01-05 at 7 46 06 PM" src="https://user-images.githubusercontent.com/119825000/210925981-1a2f73fe-4c7d-4a4d-bb19-7d4d5f67497c.png">

<img width="1129" alt="Screen Shot 2023-01-05 at 7 23 15 PM" src="https://user-images.githubusercontent.com/119825000/210923968-e2714648-580a-4670-a0c0-2826c3c00b6d.png">


## Code Snippets:

### Variables to Start the Quiz Game

    var startBtn = document.querySelector("#Start");
    var playAgainBtn = document.querySelector("#playAgain");  
    var timer = document.querySelector("#quiz-title");

    startBtn.addEventListener("click", startgame);
    playAgainBtn.addEventListener("click", playAgain);
    
### Functions to Start and End the game

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

### function to start quiz and conditions when correct or wrong answer is selected.

    function deselectans() {
      all_answer.forEach((el) => {
        el.checked = false;
      });
    }
    //load the quiz data
    function getquiz() {
      deselectans();
      question.innerText = quizData[index].question;
      a.innerText = quizData[index].a;
      b.innerText = quizData[index].b;
      c.innerText = quizData[index].c;
    }

    //move forward the quiz
    function startquiz() {
        btn.addEventListener('click', () => {
        let ans = getSelected();

        if(ans===undefined){
          timer.textContent = "No Answer";
          deductTime();
        }
        else if (ans) {
          if (ans == quizData[index].correct) {
            score++;
            timer.textContent = "Correct";
          }
          else{
            timer.textContent = "Wrong";
            deductTime();
          }
        }
        console.log(ans);
        index++
        if (index < quizData.length) {
          getquiz();
        } 
        else  {
          endQuiz();
          }
        })
    }
    
### Function to store players and show high scores:
    
    ///function to log username and scores
    function logUserAndScore () {
        alert("Your score is: " + secondsLeft); 
        var players = prompt ("Enter your name"); 
        console.log(players);
        player = players;
        showHighScores();
    }

    //function for the high scores

    function showHighScores(){
      //variables to save to storage
    var result = {userName: player, score: secondsLeft}
    var savedScores = localStorage.getItem("highscore") || '[]' // get the score, or the initial value if empty
    var highscores = [...JSON.parse(savedScores), result] // add the result
    // constant to store scores in ascending order

    console.log (result);
      highscores.sort((a, b) => b.score- a.score) // sort descending
      highscores.splice(5) // take highest 5
    localStorage.setItem("highscore", JSON.stringify(highscores)) // store the scores

    //rendering high scores
    results.innerHTML = "High Scores:" +

      highscores
      .map (score => {
      return `<p class="high-score">${score.userName} : ${score.score} points</p>`;
      }) 
      .join ("");
    }

## How to Play Instructions:

The link of the webpage is: https://emil1577.github.io/Quiz-Project/

    Step 1 :Welcome homepage.
    Step 2 :Click on the "Click here to begin" button to start the quiz and the timer.  It will then show you the first questions.
    Step 3 :Choose one from the three choices of possible answers and hit the "Submit" button. The display timer will change it's text to "Correct", "Wrong" or "No Answer".  Depending on your answer.  Then it will show you the next question.
    Step 4 :When all questions are presented and answered, you will be prompted with your score and will ask you to write your name. 
    Step 5 :After submitting your name, Top 5 High Scores will be displayed. 
    Step 6 :"Play Again" button will also appear.  If you hit this button, it will bring you back to the initial webpage.

## My Contact Information:

* [My LinkedIn](https://www.linkedin.com/in/emil-ronquillo-76832a32/)
* [My Github](https://github.com/Emil1577)
* [My Email](mailto:emilronquillo@gmail.com)

## Thank you for stopping by. 

Special thanks to all my Instructor, tutors and my colleagues





