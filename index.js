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