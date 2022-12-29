// create a button 
var startBtn = document.querySelector("#Start");
var quitBtn = document.querySelector("#quit");
var startTimer = document.querySelector("#time");


console.log(document.body);

startBtn.addEventListener("click", startquiz);
quitBtn.addEventListener("click", quit);
startBtn.addEventListener("click", timerStarts)


///playing with DOM
var welcome = document.body.children[0];
console.log(welcome);



// create a code that starts the timer as soon as the button start is selected
// start quiz
function startquiz () {
    // What to do

    console.log ("what is the best javascript ");

} 

function quit () {
    // What to do
    welcome.style.color = "blue";

    console.log("Quitiititie");
} 


//setting timer and how to reduce

var secondsLeft = 100;

function timerStarts() {

    var timerInterval = setInterval (function() {

        secondsLeft--;

        startTimer.textContent = secondsLeft + " left";


        if(secondsLeft === 0) {

            clearInterval(timerInterval);

            startTimer.textContent = "QUIZ ENDS";

        }

    },1000);

}


function quit () {
           
        
    secondsLeft = secondsLeft - 10;

    startTimer.textContent = "Time Reduced";
    
} 