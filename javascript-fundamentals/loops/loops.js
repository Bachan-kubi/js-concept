// while loop
// let i = 2;
// while(i<5){
//     console.log('i is zero');
//     i++;
// }
// document.getElementById("start-game").addEventListener("click", function () {
//     const targetNumber = Math.floor(Math.random() * 100) + 1;
//     let guess = null;
//     let attempts = 0;
    
//     while (guess !== targetNumber) {
//       guess = parseInt(prompt("Enter your guess (1-100):"));
//       attempts++;

//       if (guess === targetNumber) {
//         document.getElementById("message").innerText = `🎉 Correct! You guessed it in ${attempts} attempts.`;
//       } else if (guess > targetNumber) {
//         alert("Too high! Try again.");
//       } else if (guess < targetNumber) {
//         alert("Too low! Try again.");
//       } else {
//         alert("Invalid input. Please enter a number.");
//       }
//     }
//   });

  // let p = 5;
  // while(p<10){
  //   p++;
  //   console.log("increment", p);
  // };

  // let c = 5;
  // while(c>0){
  //   c--;
  //   console.log("derement", c);
  // }

// do while loop- The loop will firt execute the body then check the conditons. 


// let i = 2;
// do{
//   i++;
//   console.log(i)
// }while(i<5);

// let p = 5;
// do{
//   p--;
//   console.log(p);
// }while(p>1);

// for loop for(begin, condition, step){}
// increment
for(i=0; i<10; i++){
  console.log(i);
}
// decrement
for(i=10; i>0; i--){
  console.log(i);
}
let a = 0;
for(;a<5; a++){
  console.log("method-2", a)
}
let p = 0;
for(; p<5;){
console.log("method-3",p++);
}

