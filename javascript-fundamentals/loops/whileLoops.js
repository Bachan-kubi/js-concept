// let n = 20;
// while(n>15){
//     console.log(n);
//     n--;
// }
// let i = 20;
// while(i<25){
//     console.log(i);
//     i++;
// }

// const startBtn = document.getElementById("start-btn");
// startBtn.addEventListener('click', function(){
//     let countdown = 10;
//     let counterTimer = document.getElementById('ct');
//     while(countdown>0){
//         setTimeout(function(currentValue){
//             counterTimer.textContent = currentValue;
//             if(currentValue ===0){
//                 counterTimer.textContent = 'Time is up!'
//             }
//         }, (10-countdown*1000, countdown))
//     }
//     countdown--;
    
// })
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener('click', function () {
    let countdown = 20;
    let counterTimer = document.getElementById('ct');
    function runCountdown(){
        if(countdown>=10){
            counterTimer.textContent = countdown;
            if(countdown===10){
                counterTimer.textContent = "no tme";
            }
            countdown--;
            setTimeout(runCountdown, 1000);
        }
    }

    // function runCountdown() {
    //     if (countdown >= 0) {
    //         counterTimer.textContent = countdown; // Update the counter display
    //         if (countdown === 0) {
    //             counterTimer.textContent = 'Time is up!';
    //         }
    //         countdown--; // Decrease the countdown
    //         setTimeout(runCountdown, 1000); // Call runCountdown again after 1 second
    //     }
    // }

    runCountdown(); // Start the countdown
});
