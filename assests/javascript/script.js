$(document).ready(() => {

  var totalScore = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
  var crystalOne= Math.floor(Math.random() * 12) + 1;
  var crystalTwo = Math.floor(Math.random() * 12) + 1;
  var crystalThree = Math.floor(Math.random() * 12) + 1;
  var crystalFour = Math.floor(Math.random() * 12) + 1;
  var wins = 0;
  var lose = 0;
  var playerScore= 0;

  
//  Generates computer score to match
$(".totalScore").html(totalScore);

// Players current score

$(".playerScore").text( playerScore);



// adds crystal score to player score
$(".crystalOne").click (function (){
  playerScore = playerScore + crystalOne
  $('.playerScore').text(playerScore);
});

$(".crystalTwo").click (function (){
  playerScore = playerScore + crystalTwo
  $('.playerScore').text(playerScore);
});

$(".crystalThree").click (function (){
  playerScore = playerScore + crystalThree
  $('.playerScore').text(playerScore);
});

$(".crystalFour").click (function (){
  playerScore = playerScore + crystalFour
  $('.playerScore').text(playerScore);
});

console.log(crystalOne, crystalTwo, crystalThree, crystalFour);

})