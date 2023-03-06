const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement= document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //nextButton.
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Michael Douglas",
            b: "Michelle Pfeifer",
            c: "Michael Jordan",
            d: "Brendan Eich",
        },
        correctAnswer: "d"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<javascript>",
            b: "<js>",
            c: "<scripting>",
            d: "<script>"
        },
        correctAnswer: "d"
    },
    // {
    //     question: `"What is the correct JavaScript syntax to change the content of the HTML element below 
    // <p id="demo">This is a demonstration.</p>?",
    //     answers: {
    //         a: "<document.getElementById("demo").innerHTML = "Hello World!";>",
    //         b: "<#demo.innerHTML = "Hello World!";>",
    //         c: ",<document.getElementyByName("p").innerHTML = "Hello World!";>",
    //         d: "document.getElement("p").innerHTML = "Hello World!";>",
    //     },
    //     correctAnswer: "a"
    // },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "npm",
            c: "TypeScript",
            d: "axios",
        },
        correctAnswer: "b"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint",
        },
        correctAnswer: "d"
    },
];