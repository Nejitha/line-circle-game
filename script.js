let line = document.getElementById("line");
let circle = document.getElementById("circle");

let lineLeft = window.innerWidth;
let running = true;
const circleOriginalTop = circle.offsetTop;

function moveLine() {
  if (!running) return;

  lineLeft -= 4;
  line.style.left = lineLeft + "px";

  if (lineLeft < -line.offsetWidth) {
    lineLeft = window.innerWidth;
  }

  checkCollision();
}

function jumpUp() {
  if (!running) return;

  circle.style.top = (circleOriginalTop - 50) + "px";
  setTimeout(() => {
    circle.style.top = circleOriginalTop + "px";
  }, 150);
}

function checkCollision() {
  let l = line.getBoundingClientRect();
  let c = circle.getBoundingClientRect();

  if (
    l.left < c.right &&
    l.right > c.left &&
    l.top < c.bottom &&
    l.bottom > c.top
  ) {
    running = false;
    clearInterval(loop);
    alert("Game Over");
  }
}

let loop = setInterval(moveLine, 20);
circle.addEventListener("click", jumpUp);