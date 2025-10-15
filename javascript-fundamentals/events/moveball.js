const dots = document.getElementById("dots");
const main = document.querySelector("main");
const ball = document.getElementById("ball");
console.dir(ball);
dots.textContent= ".".repeat(5728);
console.dir(main);;
main.addEventListener("click", (e)=>{
    console.log(e);
    const rect = main.getBoundingClientRect();
    console.log(rect);
    // Calculate new x, y positions
    let x = e.clientX - rect.left - ball.offsetWidth / 2;
    let y = e.clientY - rect.top - ball.offsetHeight / 2;
    

    // limit ball crossing boundaries 
    const maxX = rect.width - ball.offsetWidth;
    const maxY = rect.height - ball.offsetHeight;

    if(x<0)x=0;
    if(y<0)y=0;
    if(x>maxX)x=maxX;
    if(y>maxY)y=maxY;
    // now move the balls add with css
    ball.style.left= `${x}px`;
    ball.style.top= `${y}px`;
});