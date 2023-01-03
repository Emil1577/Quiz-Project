// create a button 
var startBtn = document.querySelector("#Start");
//var deductTimeBtn = document.querySelector("#deductTime");
var timer = document.querySelector("#time");


console.log(document.body);

startBtn.addEventListener("click", startquiz);
startBtn.addEventListener("click", timerStarts);
//deductTimeBtn.addEventListener("click", deductTime);

//startBtn.addEventListener("click", getQuiz);


///playing with DOM
var welcome = document.body.children[1];
console.log(welcome);

// create a code that starts the timer as soon as the button start is selected
// start quiz

//function startquiz () {
  //  console.log ("what is the best javascript ");
//} 

//setting timer and how to reduce

var secondsLeft = 50;

function timerStarts() {

    startBtn.setAttribute("hidden","hidden");
    document.getElementById("quiz-title").style.visibility = "hidden";
    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("quiz").style.visibility = "visible";

    getquiz();


    var timerInterval = setInterval (function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " left";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timer.textContent = "QUIZ ENDS";
        }
    },1000);
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
    index++;
    if (index < quizData.length) {
      getquiz();
    } else {
      alert('score :' + secondsLeft);
      var gamer = prompt ("What is your name");

    


      const result = {userName: gamer, score: secondsLeft}


const savedScores = localStorage.getItem('highscore') || '[]' // get the score, or the initial value if empty

const highscores = [JSON.parse(savedScores), result] // add the result

  .sort((a, b) => b.score- a.score) // sort descending
  .slice(0, 5) // take highest 5

localStorage.setItem('highscore', JSON.stringify(highscores)) // store the scores

location.reload();

    }
  




})

  };

  //
/// Storing scores



// getquiz();
//startquiz();