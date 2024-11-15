//(1)get dom elements of  the dino div and the cactus div  
//(2) create function to handle the jumping dino image and handle timing

//checking if is ALIVE
let isAlive = setInterval(function () {
  let dinoJumping = parseInt(
    window.getComputedStyle(jumpingDino).getPropertyValue("top")
  );
  let cactusMovingLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("game Over");
  }
}, 10);


//(3) Add event listener to allow user to play game


const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const game = document.querySelector('.game');

let isJumping = false;
let score = 0;

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && !isJumping) {
    jump();
  }
});

function jump() {
  isJumping = true;
  dino.style.animation = 'jump 0.5s ease-out forwards';

  setTimeout(() => {
    dino.style.animation = '';
    isJumping = false;
  }, 500); 
}

