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
    console.log("cactus is oof-screan")
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
