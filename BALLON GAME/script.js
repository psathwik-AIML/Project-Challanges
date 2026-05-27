let score=0
let timeleft=60
const scoreDisplay=document.querySelector("#score")
const timerDisplay = document.getElementById("timer");
const gameContainer = document.getElementById("game-container");
// logic 
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add("balloon");

  if (Math.random() < 0.8) {
    balloon.classList.add("red");
  } else {
    balloon.classList.add("black");
  }

  balloon.style.left = Math.random() * 90 + "%";
  balloon.style.bottom = "0px";

  gameContainer.appendChild(balloon);

  let moveUp = setInterval(() => {
    let bottom = parseInt(balloon.style.bottom) || 0;

    if (bottom >= 500) {
      clearInterval(moveUp);
      balloon.remove();
    } else {
      balloon.style.bottom = bottom + 1 + "px"; // slower speed
    }
  }, 10);

  balloon.onclick = () => {
  if (balloon.classList.contains("red")) {
    score += 10;
  } else if (balloon.classList.contains("black")) {
    score -= 10;
  }

  scoreDisplay.textContent = score;

  balloon.style.transform = "scale(1.3)"; // pop effect

  setTimeout(() => {
    balloon.remove();
  }, 100); // small delay to show effect

  clearInterval(moveUp);
};

}

createBalloon()
// Start creating balloons repeatedly
let gameInterval = setInterval(createBalloon, 700);
// Timer countdown
let timerInterval = setInterval(() => {
  timeleft--;
  timerDisplay.textContent = timeleft;

  if (timeleft === 0) {
    clearInterval(timerInterval); // stop timer
    clearInterval(gameInterval);  // stop balloon generation
    alert("⏰ Time's up! Your score: " + score);
  }
}, 1000);
