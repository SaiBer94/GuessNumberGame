"use strict"

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let curHighscore;

document.querySelector('.scoreVal').textContent = score;
document.querySelector('.highscoreVal').textContent = 0;

document.querySelector('.btnAnswer').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess) {
        document.querySelector('.message').textContent = "No number picked! Try again!";
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct!";
        document.querySelector('.number').style.backgroundColor = '#60b374';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '100%';
        if (score > Number(document.querySelector('.highscoreVal').textContent)) {
            document.querySelector('.highscoreVal').textContent = score;
        }
    } else if(guess > secretNumber) {
        document.querySelector('.message').textContent = "Too high";
        document.querySelector('.number').style.backgroundColor = 'red';
        score--;
        document.querySelector('.scoreVal').textContent = score;
    } else if(guess < secretNumber) {
        document.querySelector('.message').textContent = "Too Low";
        document.querySelector('.number').style.backgroundColor = 'red';
        score--;
        document.querySelector('.scoreVal').textContent = score;
    }
})

document.querySelector('.btnReplay').addEventListener('click', function() {
    score = 20;
    document.querySelector('.scoreVal').textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '';
    document.querySelector('.number').style.backgroundColor = '#ffcc00';
    document.querySelector('.guess').value =  "";
    document.querySelector('.message').textContent = "Pick a number";
    document.querySelector('body').style.backgroundColor = '#282c34';
})

document.querySelector('.btnReset').addEventListener('click', function() {
    score = 20;
    document.querySelector('.scoreVal').textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '';
    document.querySelector('.number').style.backgroundColor = '#ffcc00';
    document.querySelector('.guess').value =  "";
    document.querySelector('.message').textContent = "Pick a number";
    document.querySelector('.highscoreVal').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#282c34';
})