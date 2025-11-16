const h1 = document.getElementsByTagName('h1')[0]
const h2 = document.getElementsByTagName('h2')[0]
const h3 = document.getElementsByTagName('h3')[0]
const h4 = document.getElementsByTagName('h4')[0]
const h5 = document.getElementsByTagName('h5')[0]
const h6 = document.getElementsByTagName('h6')[0]
const button = document.getElementById('btn');
const inputText = document.querySelector(".input-txt");

inputText.addEventListener("keydown", function(e){
        console.log(e.target);
});
inputText.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        h1.textContent = inputText.value;
        console.log(inputText.value);
        inputText.value = "";
    }
});
h1.addEventListener('click', testEvents)
h2.addEventListener('dblick', testEvents)
h3.addEventListener('mouseover', testEvents)
h4.addEventListener('keydown', testEvents)
h5.addEventListener('select', testEvents)
h6.addEventListener('enter', testEvents)   
button.addEventListener('mouseleave', testEvents);

function testEvents(evt){
    console.log(evt);
}
// Event Delegation
const familiMembers = document.querySelectorAll("#famili-members li");
familiMembers.forEach(members=>{
    members.addEventListener("click", function(e){
        console.log(members);
        h1.textContent =e.target.textContent;
        console.log(e.target.textContent);
    })
})


