// while loop
let i = 2;
while(i<5){
    console.log('i is zero');
    i++;
}
document.getElementById("start-game").addEventListener("click", function () {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let guess = null;
    let attempts = 0;
    
    while (guess !== targetNumber) {
      guess = parseInt(prompt("Enter your guess (1-100):"));
      attempts++;

      if (guess === targetNumber) {
        document.getElementById("message").innerText = `🎉 Correct! You guessed it in ${attempts} attempts.`;
      } else if (guess > targetNumber) {
        alert("Too high! Try again.");
      } else if (guess < targetNumber) {
        alert("Too low! Try again.");
      } else {
        alert("Invalid input. Please enter a number.");
      }
    }
  });