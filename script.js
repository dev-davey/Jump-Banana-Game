const character = document.getElementById('character');
const block = document.getElementById('block');
const gameOver = document.getElementById('game-over');
const startBtn = document.getElementById('start');




function jump() {
    if (character.classList != 'animate') {
        character.classList.add('animate');
    }
    setTimeout(function () {
        character.classList.remove('animate')
    }
        , 500);
}

const checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<70 && blockLeft>30 && characterTop>=130){
        block.style.animation = "hidden";
        gameOver.textContent = "Game Over Try Again!"
        startBtn.style.display = "block";
    }
}, 10);

let currJump = 0;
let count = document.getElementById('score');
count.textContent = 'Score: ' + currJump
addEventListener("click", score);

function score(){
        currJump++;
        count.textContent = 'Score:' + currJump;
};

document.getElementById('start').addEventListener("click", reStart);

function reStart(){
    currJump = 0;
    gameOver.style.display = "none";
    startBtn.style.display = "none";
    block.style.animation = "visible";
}