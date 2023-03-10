const highScoresList = document.getElementById('highscores')
// highScores = JSON.parse(localStorage.getItem('highScores') || [])
const data = JSON.parse(localStorage.getItem('scores'))
const reset = document.getElementById('clear')

// Loop through the data and create list items
for(var i=0;i<data.length;i++){
  const listItem = document.createElement("li");
  listItem.textContent = data[i].user + " " + data[i].score;
  console.log(data[i]);
  highScoresList.appendChild(listItem);
}

reset.addEventListener("click", function(event){
  window.localStorage.clear();
  
  location.reload();
  
})