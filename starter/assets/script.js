let highScores = JSON.parse(localStorage.getItem("scores")) || []; //help from TA

let time = 60;
function timer (){
    setInterval(function(){
    time--;
    document.getElementById('time').innerText=time;
}, 1000);
}


document.getElementById('start').addEventListener('click',function(event){
    event.preventDefault();
    console.log(event.target.innerText)
    document.getElementById("questions").classList.remove("hide")
    timer();
    if(time<=0){
        clearInterval(timer)
    }
}) //help from TA


//when done with all the questions
document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    let score = {
        user:document.getElementById("initials").value,
        score: time
    }
    highScores.push(score);
    localStorage.setItem("scores",JSON.stringify(highScores))
}); //help from TA
