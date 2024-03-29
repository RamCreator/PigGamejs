// select Element

const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")
const score0 = document.querySelector("#score--0")
const score1 = document.getElementById("score--1")
const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")



const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")


// start condition
 score0.textContent = 0;
 score1.textContent = 0;
diceEl.classList.add("hidden");

// Game state variables
const scores = [0, 0]
let currentScore = 0;
let activeplayer = 0;
let playing = true;


// Function to switch players
const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activeplayer}`).textContent = currentScore;

    activeplayer = activeplayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}


//  Roll Dice button 
btnRoll.addEventListener("click", function () {
    if (playing) {
       // Generate a random dice roll

        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice)


        // Display the rolled dice
        diceEl.classList.remove("hidden");
        diceEl.src = `image/dice-${dice}.png`;

        //check the dice value
        if (dice !== 1) {
            // Update the current score and display it
            currentScore = currentScore+dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentScore;
       }
        else {
             // Switch to the next player
            switchPlayer();

        }
    }
});

// Event listener for the Hold button
btnHold.addEventListener("click", function () {
      // Add the current score to the active player's total score
    scores[activeplayer] += currentScore;


    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

 // Check if the active player has won
    if (scores[activeplayer] >= 100) {
        playing = false;
        diceEl.classList.add("hidden");
        document.querySelector(`player--${activeplayer}`).classList.add("player-winner");
        document.querySelector(`player--${activeplayer}`).classList.remove("player-active");
    } else {
        // Switch to the next player
        switchPlayer();
    }
});
