// create variables to start the game and buttons 
var startBtn = document.querySelector("#Start");
var playAgainBtn = document.querySelector("#playAgain");
var timer = document.querySelector("#quiz-title");

startBtn.addEventListener("click", startgame);
playAgainBtn.addEventListener("click", playAgain);


// create a code that starts the timer as soon as the button start is selected
// start quiz

// function that starts the game and other functions
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

var secondsLeft = 60;
var timerInterval =("");

function timerStarts() {
    timerInterval = setInterval (function() {
        secondsLeft--;
        timer.textContent = secondsLeft + "s left";
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

const question = document.getElementById('question');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const btn = document.getElementById('submit');
const all_answer = document.querySelectorAll('.answer');


/*quiz data */
const quizData = [
    {
      question: 'What is JavaScript?',
      a: 'JavaScript is a scripting language used to make the website interactive',
      b: 'JavaScript is an assembly language used to make the website interactive',
      c: 'JavaScript is a compiled language used to make the website interactive',
      correct: 'a',
    },
    {
      question: 'Arrays in JavaScript are defined by which of the following statements?',
      a: 'JavaScript is an Object-Oriented language',
      b: 'JavaScript is Assembly-language',
      c: 'JavaScript is an Object-Based language',
      correct: 'c',
    },
    {
      question: 'Which of the following is correct about JavaScript?',
      a: 'JavaScript is a scripting language used to make the website interactive',
      b: 'JavaScript is an assembly language used to make the website interactive',
      c: ' JavaScript is a compiled language used to make the website interactive',
      correct: 'b',
    },
    {
      question: 'Among the given statements, which statement defines closures in JavaScript?',
      a: 'JavaScript is a function that is enclosed with references to its inner function scope',
      b: 'JavaScript is a function that is enclosed with references to its lexical environment',
      c: 'JavaScript is a function that is enclosed with the object to its inner function scope',
      correct: 'b',
    },
    {
      question: 'Where is Client-side JavaScript code is embedded within HTML documents?',
      a: 'A URL that uses the special javascript:code',
      b: 'A URL that uses the special javascript:protocol',
      c: 'A URL that uses the special javascript:encoding',
      correct: 'b',
    },
  ];


/// quiz index
let index = 0;
let score = 0;

//get the getSelected answer
function getSelected() {
  let ans = undefined;
  all_answer.forEach((el) => {
    if (el.checked) {
      ans = el.id;
    }
  });
  return ans;
}

//disselect all answer
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
