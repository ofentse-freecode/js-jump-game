const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const game = document.querySelector('.game');

let gamestarted = false;
let isJumping = false;
let score = 0 ;



function jump() {
  isJumping = true;
  dino.style.animation = 'jump 0.5s ease-out forwards';

  setTimeout(() => {
    dino.style.animation = '';
    isJumping = false;

    score++;
  }, 300); 
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
    alert('Game Over! Final Score: ' + score * 0.5 * 1000 + ' points');
    location.reload(); 
  }
  
  if (cactusRect.right <= 0) {
   cactus.remove();
  }
}
function setupInputListners(){
    document.removeEventListener("touchstart", onTouchStart);
    document.addEventListener("keydown", onkeyDown);
}
function onkeyDown(event){
  if(event.code === "Space"){
    if(!gamestarted){
      gamestarted = true;
        cactus.classList.add("move")
    }
  }
    jump();
}

function onTouchStart(event){
    gamestarted = true;
      cactus.classList.add("move")
  jump()
}
setupInputListners();

setInterval(() => {
  moveCactus();
}, 20);

setInterval(() => {
  console.log('Score: ' + score);
}, 1000);

