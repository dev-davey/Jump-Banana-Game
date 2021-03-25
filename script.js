const character = document.getElementById('character');
const block = document.getElementById('block');

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
        block.style.animation = "none";
        alert("Game Over");
    }
}, 10);

let currJump = 0;
let count = document.getElementById('score');
count.textContent = 'Score: ' + currJump;
addEventListener("click", score);

function score(){
    currJump++;
    count.textContent = 'Score:' + currJump;
}