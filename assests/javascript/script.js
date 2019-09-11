$(document).ready(() => {

  var totalScore = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
  var crystalOne = Math.floor(Math.random() * 12) + 1;
  var crystalTwo = Math.floor(Math.random() * 12) + 1;
  var crystalThree = Math.floor(Math.random() * 12) + 1;
  var crystalFour = Math.floor(Math.random() * 12) + 1;
  var wins = 0;
  var lose = 0;
  var playerScore = 0;



  //  Generates computer score to match
  $(".totalScore").html(totalScore);

  // Players current score

  $(".playerScore").text(playerScore);

  // win condition

  function win() {
    wins++
    $(".win").text(wins)
  }
  // loss condition
  function loss() {
    lose++
    $(".loss").text(lose);
  }



  // Asses rather wins or loses

  function outcome() {
    if (playerScore === totalScore) {
      win();
      start();
      reset();


    } else if (playerScore > totalScore) {
      loss();
      start();
      reset();


    }
  }


  // adds crystal score to player score
  $(".crystalOne").click(function () {
    playerScore = playerScore + crystalOne
    $('.playerScore').text(playerScore);
    outcome();

  });

  $(".crystalTwo").click(function () {
    playerScore = playerScore + crystalTwo
    $('.playerScore').text(playerScore);
    outcome();

  });

  $(".crystalThree").click(function () {
    playerScore = playerScore + crystalThree
    $('.playerScore').text(playerScore);
    outcome();

  });

  $(".crystalFour").click(function () {
    playerScore = playerScore + crystalFour
    $('.playerScore').text(playerScore);
    outcome();

  });

  console.log(crystalOne, crystalTwo, crystalThree, crystalFour);

  // Reset the game
  function reset() {
    playerScore = 0;

    $(".playerScore").text(playerScore);

  }

  function start() {
    totalScore = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    crystalOne = Math.floor(Math.random() * 12) + 1;
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    crystalThree = Math.floor(Math.random() * 12) + 1;
    crystalFour = Math.floor(Math.random() * 12) + 1;
    $(".totalScore").html(totalScore);
    console.log(crystalOne, crystalTwo, crystalThree, crystalFour);
  }


})