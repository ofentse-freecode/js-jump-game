const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const game = document.querySelector('.game');

let gamestarted = false;
let isJumping = false;
// let score = 0;
let score = 0 ;

function jump() {
  isJumping = true;
  dino.style.animation = 'jump 0.5s ease-out forwards';

  setTimeout(() => {
    dino.style.animation = '';
    isJumping = false;

    score++;
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
    alert('Game Over! Final Score: ' + score * 0.5 * 1000 + ' points');
    location.reload(); 
  }
  
  if (cactusRect.right <= 0) {
    console.log("cactus is off-screen")
   // score++;
    cactus.style.animation = 'none'; 
    cactus.style.right = '-30px'; 
    cactus.style.animation = 'moveCactus 2s linear infinite'; 
  }
}
function setupInputListners(){
  if(window.innerWidth > 768){
    document.removeEventListener("touchstart", onTouchStart);
    document.addEventListener("keydown", onkeyDown);
  } else {
    document.removeEventListener("keydown", onkeyDown);
    document.addEventListener("touchstart", onTouchStart);
  }
}
function onkeyDown(event){
  if(event.code === "Space"){
    if(!gamestarted){
      gamestarted = true;
      if(!cactus.classList.contains("move")){
        cactus.classList.add("move")
      }
    }
  }
  if ( !isJumping) {
    jump();
  }
}

function onTouchStart(event){
  if(!gamestarted){
    gamestarted = true;
    if(!cactus.classList.contains("move")){
      cactus.classList.add("move")
    }
  }
  jump()
}
setupInputListners();
window.addEventListener("resize", setupInputListners)

/* document.addEventListener('keydown', (event) => {
  if(event.code === "Space"){
    if(!gamestarted){
      gamestarted = true;
      if(!cactus.classList.contains("move")){
        cactus.classList.add("move")
      }
    }
  }
  if ( !isJumping) {
    jump();
  }
}); */


setInterval(() => {
  moveCactus();
}, 20);

setInterval(() => {
  console.log('Score: ' + score);
}, 1000);

