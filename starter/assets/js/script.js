let highScores = JSON.parse(localStorage.getItem("scores")) || [];

let time = 60;
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

document.getElementById('start').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById("start-screen").classList.add("hide")
    console.log(event.target.innerText)
    document.getElementById("questions").classList.remove("hide")
    timer();
})

function buildQuiz() {
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}"> ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            };

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );

        }
    );

    quizContainer.innerHTML = output.join('');
};  


//when done with all the questions
document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    let score = {
        user:document.getElementById("initials").value,
        score: time
    }
    highScores.push(score);
    localStorage.setItem("scores",JSON.stringify(highScores))
});

