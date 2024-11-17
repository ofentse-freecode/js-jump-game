const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const game = document.querySelector(".game");

let gamestarted = false;
let isJumping = false;
let score = 0;


function randomCacti() {
  const cacti = [
    'images/cactus (1).png',
    'images/cactus (2).png',
    'images/cactus (3).png'
  ];
  const numberOfCacti = Math.floor(Math.random() * cacti) + 1;
}




function jump() {
  if (!isJumping) {
    isJumping = true;
    dino.classList.add("jump");

    setTimeout(() => {
      dino.classList.remove("jump");
      isJumping = false;
      score++;
    }, 500);
  }
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
    alert("Game Over! Final Score: " + score * 0.5 * 1000 + " points");
    location.reload();
  }

  if (cactusRect.right <= 0) {
    cactus.style.animation = "none";
    cactus.style.right = "-30px";
    cactus.style.animation = "moveCactus 2s linear infinite";
  }
  if (cactusRect.right <= 0) {
    cactus.remove(); 
  }
}

function setupInputListeners() {
  if (window.innerWidth > 768) {
    document.removeEventListener("touchstart", onTouchStart);
    document.addEventListener("keydown", onKeyDown);
  } else {
    document.removeEventListener("keydown", onKeyDown);
    document.addEventListener("touchstart", onTouchStart);
  }
}

function onKeyDown(event) {
  if (event.code === "Space") {
    if (!gamestarted) {
      gamestarted = true;
      if (!cactus.classList.contains("move")) {
        cactus.classList.add("move");
      }
    }
  }
  if (!isJumping) {
    jump();
  }
}

function onTouchStart(event) {
  if (!gamestarted) {
    gamestarted = true;
    if (!cactus.classList.contains("move")) {
      cactus.classList.add("move");
    }
  }
  jump();
}

setupInputListeners();
window.addEventListener("resize", setupInputListeners);

setInterval(() => {
  moveCactus();
}, 20);

setInterval(() => {
  console.log("Score: " + score);
}, 1000);