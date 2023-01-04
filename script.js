// create a button 
var startBtn = document.querySelector("#Start");
//var deductTimeBtn = document.querySelector("#deductTime");
var timer = document.querySelector("#time");


console.log(document.body);

startBtn.addEventListener("click", startgame);
//startBtn.addEventListener("click", timerStarts);
//deductTimeBtn.addEventListener("click", deductTime);

//startBtn.addEventListener("click", getQuiz);


///playing with DOM
var welcome = document.body.children[1];
console.log(welcome);

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
    document.getElementById("quiz-title").style.visibility = "hidden";
    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("quiz").style.visibility = "visible";  
}

function endQuiz () {
  startBtn.setAttribute("visible","visible");
  document.getElementById("quiz-title").style.visibility = "visible";
  document.getElementById("submit").style.visibility = "hidden";
  document.getElementById("quiz").style.visibility = "hidden";
  logUserAndScore ()
  stopTimer()
}

var secondsLeft = 20;
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
  timer.textContent = "QUIZ ENDS";
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
      question: 'Who is the current CEO of Google ?',
      a: 'Sunder Pichai',
      b: 'Larry Page ',
      c: 'Jhon Brown',
      correct: 'a',
    },
    {
      question: 'Who is the current CEO of Amazon ?',
      a: 'Jeff Bezos',
      b: 'Warren Buffet ',
      c: 'Andy Jassy',
      correct: 'c',
    },
    {
      question: 'Who is the current CEO of Tesla ?',
      a: 'Jeffry Black',
      b: 'Elon Musk ',
      c: 'Jhon Brown',
      correct: 'b',
    },
    {
      question: 'Who is the current CEO of Microsoft ?',
      a: 'Satya Nadella ',
      b: 'Tom Klington',
      c: 'Jhon Brown',
      correct: 'a',
    },
    {
      question: 'Which of the company is owned by Mark Zkerburg ?',
      a: 'Neuralink ',
      b: 'Meta Platforms Inc ',
      c: 'Metaverse LLC ',
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
    if (ans) {
      if (ans == quizData[index].correct) {
        score++;
        timer.textContent = "Correct";
      }
      else{
        timer.textContent = "incorrect";
        deductTime();
      }
    }
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

    alert('score :' + secondsLeft); 
    var gamer = prompt ("Enter your name"); 
    console.log(gamer);

var result = {userName: gamer, score: secondsLeft}
var savedScores = localStorage.getItem("highscore") || '[]' // get the score, or the initial value if empty
var highscores = [...JSON.parse(savedScores), result] // add the result
// constant to store scores in ascending order

//function for the high scores
console.log (result);

  highscores.sort((a, b) => b.score- a.score) // sort descending
  highscores.splice(5) // take highest 5

localStorage.setItem("highscore", JSON.stringify(highscores)) // store the scores


///getting the scores written

//console.log (highscores);

results.innerHTML = "High Scores" +

  highscores
  .map (score => {
  return `<li class="high-score">${score.userName} : ${score.score} </li>`;
  }) 
  .join ("");

}
