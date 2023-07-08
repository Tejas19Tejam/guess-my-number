'use strict';
/* 
// select the element whose class name is message 
const query=document.querySelector('.message').textContent;
console.log(query);

// changing the message class name text 
document.querySelector('.message').textContent="Correct number ! ";

// select the element whose class name is number
document.querySelector('.number').textContent=30;

// select the element whose class name is highscore
document.querySelector('.highscore').textContent=20;

// select the element whose class name is guess and get that value
document.querySelector('.guess').value=30; // setting value  
console.log(document.querySelector('.guess').value); // getting value 

*/

// Random Number Generate 

const secNumber = Math.trunc(Math.random() * 20) + 1;

// Reloading the current page 
// document.querySelector('.again').addEventListener('click',function(){
//     window.location.reload();

// })


let score = 20;
let flag = true;
let highscore = 0;

// Display message function 
const displayMessage = function(message){
    document.querySelector('.message').textContent =message;
}
// Handling the click event 
document.querySelector('.check').addEventListener('click', function () {    
    // Every input getting from user is in the String type 
    const guess = Number(document.querySelector('.guess').value);

    // Condition_01 : If user click without entering value
    if (!guess) {
        displayMessage("No Input !");
        // document.querySelector('.message').textContent = "No Input !";
    }

    // If guess is correct 
    if (flag) {

        if (guess === secNumber) {

            score++;
            
            // manipulating css property backgroundColor 
            document.querySelector('body').style.backgroundColor = '#60b347';

            // manipulating css property number element width 
            document.querySelector('.number').style.width = '30rem';

            // Display secrate number after guess is correct 
            document.querySelector('.number').textContent = secNumber;

            document.querySelector('.score').textContent = score;
            displayMessage("Correct number !");
            // document.querySelector('.message').textContent = "Correct number !";

            if(score>highscore){
                highscore = document.querySelector('.score').textContent;
                document.querySelector('.highscore').textContent = highscore;
            }
            flag = false;

        }
        else if(guess !== secNumber){
            if (score > 1) {

                score--;
                document.querySelector('.score').textContent = score;
                displayMessage((guess>secNumber)?"Too High!":"Too Low!");
                // document.querySelector('.message').textContent = (guess>secNumber)?"Too High!":"Too Low!";
            }
            else {
                displayMessage("You loss !");
                // document.querySelector('.message').textContent = "You loss !";
                document.querySelector('.score').textContent = 0;
                flag = false;

            }
        }
    }
    // if match win or Loss
    else {

        displayMessage("Play Again!");
        // document.querySelector('.message').textContent = "Play Again!";
    }

});

// Implementing play again 

document.querySelector('.again').addEventListener('click', function () {   
    score = 20;
    flag = true;
    document.querySelector('.guess').value="";
    // creating new secreate Number 
    const secNumber = Math.trunc(Math.random() * 20) + 1;

    // resetting the secrate number 
    document.querySelector('.number').textContent = "?";

    // resetting message
    // document.querySelector('.message').textContent = "Start guessing...";
    displayMessage("Start guessing...");

    // resetting the background
    document.querySelector('body').style.backgroundColor = '#222';

    // restting the width 
    document.querySelector('.number').style.width = '15rem';

    // resetting the scrore 
    document.querySelector('.score').textContent = score;

})



