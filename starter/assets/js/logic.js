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
const choicesContainer = document.getElementById('choices-buttons');
const questionsDiv = document.getElementById('question');
const timerDiv = document.getElementById('time');
const highScores = [];
const highScoresDiv = document.querySelector("#highScores");
const submitBtn = document.getElementById('submit');
const feedback = document.getElementById("feedback");
const soundCorrect = new Audio("../sfx/correct.wav");
const soundIncorrect = new Audio("../sfx/incorrect.wav");

let currentPosition = 0;
let time = 60;
let currentQuestion = {};
let acceptingAnswers = true;

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
           endGame(); 
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

}

choicesContainer.addEventListener("click",function(event){
    if(event.target.innerText === questions[currentPosition-1].correctAnswer){
        feedback.textContent = "Correct!";
            feedback.style.display = "block";
            soundCorrect.play();
            setTimeout(function () {
                feedback.style.display = "none";
            }, 1000);
        setNextQuestion();
       
    } else if(event.target.innerText !== questions[currentPosition-1].correctAnswer){
        feedback.textContent = "Incorrect!";
            feedback.style.display = "block";
            soundIncorrect.play();
            setTimeout(function () {
                feedback.style.display = "none";
            }, 1000);        
        time-=10;
        console.log(questions[currentPosition-1].correctAnswer);
    }
    
    if (questionsDiv >= questions) {
        endGame();
    } 
    
    event.target.innerText.appendChild(choicesContainer);
})



function endGame() {
 
    console.log("end-game")
    document.getElementById("end-screen").classList.remove("hide");
    document.getElementById("questions").classList.add("hide");
    document.getElementById("start-screen").classList.add("hide");
}

submitBtn.addEventListener("click",function(event){
    event.preventDefault();
    
    let score = {
        user:document.getElementById("initials").value,
        score: time
    }
    highScores.push(score);
    localStorage.setItem("scores",JSON.stringify(highScores))
    
});