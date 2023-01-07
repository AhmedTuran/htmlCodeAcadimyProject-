
var  point, totalPointP1, totalPointP2, s, msg, hold;
const p1 = [];
const p2 = [];
var player1= prompt(`name of farset player `);
var player2 = prompt(`name of second player `);
s = Math.floor(Math.random() * 2) + 1;
function doCase (title , total , p){
  do{
  point = Math.floor(Math.random() * 6) + 1;
  total += point;
  p.push(point);
  if (total == 30) {
  msg = title + " is winner";
  alert(msg);
  s = 3;
  }
  function switchS(){if (s==2){s = 1;}else if (s==1){s = 2;}}
  if (hold == true){switchS(); }
  else if(hold == false){
    for (var i = 0; i < p.length; i++) {
    document.getElementById("pointSeries").innerHTML +=
    p[i]+  " - ";
    }
    switchS();}}
  while (point != 1)
  if (point == 1){
    switchS();
  point = 0;
  p.length = 0;
  }}

  while (s != 3)
  {
    switch (s)
    {
    case 1:
      doCase(player1,totalPointP1,p1);
    break;
    case 2:
      doCase(player2,totalPointP2,p2);
    break;
    }
  }
  if (s == 3) {
  localStorage.clear();
  }

/*
// Create a function to simulate rolling the dice
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Initialize scores for both players
  let player1Score = 0;
  let player2Score = 0;
  
  // Initialize current player to player 1
  let currentPlayer = 1;
  
  while (true) {
    // Roll the dice
    let roll = rollDice();
  
    // Add the roll result to the current player's score
    if (currentPlayer === 1) {
      player1Score += roll;
    } else {
      player2Score += roll;
    }
  
    // Check if the current player rolled a 1
    if (roll === 1) {
      // Reset the current player's score for the turn
      if (currentPlayer === 1) {
        player1Score = 0;
      } else {
        player2Score = 0;
      }
  
      // Switch to the other player
      currentPlayer = currentPlayer === 1 ? 2 : 1;
    } else {
      // Display the current player's score for the turn
      console.log(`Current score: ${player1Score} (player 1) ${player2Score} (player 2)`);
  
      // Prompt the current player to hold or roll again
      let choice = prompt(`Player ${currentPlayer}, do you want to hold or roll again? (h/r)`);
  
      if (choice === 'h') {
        // Add the current player's score for the turn to their total score
        if (currentPlayer === 1) {
          player1Score += player1Score;
        } else {
          player2Score += player2Score;
        }
  
        // Check if the current player has won the game
        if (player1Score >= 30 || player2Score >= 30) {
            var msg = 'Player'+ currentPlayer +'wins!';
            console.log(msg);
            document.getElementById("msg").innerHTML = msg ;
          console.log(`Player ${currentPlayer} wins!`);
          break;
        }
  
        // Switch to the other player
        currentPlayer = currentPlayer === 1 ? 2 : 1;
      }
    }
  }
  */