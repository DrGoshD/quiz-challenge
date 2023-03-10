const questions = [
    {
        question: "Who invented JavaScript?",
        answers: [
          "Michael Douglas",
            "Michelle Pfeifer",
            "Michael Jordan",
            "Brendan Eich",
        ],
        correctAnswer: "Brendan Eich"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            "<javascript>",
            "<js>",
            "<scripting>",
            "<script>"
        ],
        correctAnswer: "<script>"
    },
    // {
    //     question: What is the correct JavaScript syntax to change the content of the HTML element below `<p id="demo">This is a demonstration.</p>?`,
    //     answers: `
    //         `<document.getElementById("demo").innerHTML = "Hello World!";>`,
    //         `<demo.innerHTML = "Hello World!">`
    //         `<document.getElementByName("p").innerHTML = "Hello World!";>`
    //         `<document.getElement("p").innerHTML = "Hello World!";>`
    //     `,
    //     correctAnswer: `<document.getElementById("demo").innerHTML = "Hello World!";>`
    // },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: [
           "Node.js",
            "npm",
            "TypeScript",
             "axios",
        ],
        correctAnswer: "npm"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: [
           "Angular",
            "jQuery",
            "RequireJS",
            "ESLint",
        ],
        correctAnswer: "ESLint"
    },
];

const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector('#next-btn');
const choicesContainer = document.getElementById('choices-buttons');
const questionsDiv = document.getElementById('question');
const timerDiv = document.getElementById('time');
const highScores = localStorage.getItem("scores") || [];
const highScoresDiv = document.querySelector("#highScores");
const submitBtn = document.getElementById('submit');

let currentPosition = 0;
let time = 60;
let currentQuestion = {}
let acceptingAnswers = true

startBtn.addEventListener("click",startGame)

function startGame() {
    console.log('Started')
    startBtn.classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    timer();
    setNextQuestion();
}

function timer (){
    function timerTick(){
        time--;
        document.getElementById('time').innerText=time;
        if(time<=0){
            clearInterval(interval);
            }
    };

    const interval = setInterval(timerTick, 1000);
        
}

function setNextQuestion(){
    questionsDiv.innerText = questions[currentPosition].question;
    document.querySelectorAll(".btn")[0].innerText = questions[currentPosition].answers[0];
    document.querySelectorAll(".btn")[1].innerText = questions[currentPosition].answers[1];
    document.querySelectorAll(".btn")[2].innerText = questions[currentPosition].answers[2];
    document.querySelectorAll(".btn")[3].innerText = questions[currentPosition].answers[3];
   currentPosition++
   if(currentPosition === 4) {
    endGame();
   }
}

choicesContainer.addEventListener("click",function(event){
    if(event.target.innerText === questions[currentPosition].correctAnswer){
        setNextQuestion();

    }
    else if(event.target.innerText !== questions[currentPosition].correctAnswer){
        time-10;
        setNextQuestion();
    }
})

//you need to set an if statement to end the game when the questions array is finished
function endGame() {
    console.log("end-game")
    clearInterval(timerId)
    
}
//need to set an if statement for if the timer equals 0 to end the Game

//need to set an event for when the game ends, to display the high scores div, append the high scores in a for loop to the table, and also sort the high scores array before doing so. you need to push the initials and time left into the high scores array and then re-setItem for localStorage, overwriting the previous array

document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    let score = {
        user:document.getElementById("initials").value,
        score: time
    }
    highScores.push(score);
    localStorage.setItem("scores",JSON.stringify(highScores))
});