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

function moveCactus() {
  const cactusRect = cactus.getBoundingClientRect();
  const dinoRect = dino.getBoundingClientRect();

  if (
    cactusRect.right > dinoRect.left &&
    cactusRect.left < dinoRect.right &&
    cactusRect.bottom > dinoRect.top &&
    cactusRect.top < dinoRect.bottom
  ) {
    alert('Game Over! Final Score: ' + score);
    location.reload(); 
  }

  if (cactusRect.right <= 0) {
    score++;
    cactus.style.animation = 'none'; 
    cactus.style.right = '-30px'; 
    cactus.style.animation = 'moveCactus 2s linear infinite'; 
  }
}

setInterval(() => {
  moveCactus();
}, 20);

setInterval(() => {
  console.log('Score: ' + score);
}, 1000);
