let score = 0;
const box = document.getElementById("game-box");
const scoreDisplay = document.getElementById("score");

box.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;

    // Move box to a random position
    const newX = Math.random() * (window.innerWidth - 50);
    const newY = Math.random() * (window.innerHeight - 50);
    box.style.left = `${newX}px`;
    box.style.top = `${newY}px`;
});
