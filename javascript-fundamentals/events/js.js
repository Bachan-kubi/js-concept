const h1 = document.getElementsByTagName('h1')[0]
const h2 = document.getElementsByTagName('h2')[0]
const h3 = document.getElementsByTagName('h3')[0]
const h4 = document.getElementsByTagName('h4')[0]
const h5 = document.getElementsByTagName('h5')[0]
const h6 = document.getElementsByTagName('h6')[0]
const button = document.getElementById('btn')


h1.addEventListener('click', testEvents)
h2.addEventListener('dblick', testEvents)
h3.addEventListener('mouseover', testEvents)
h4.addEventListener('keydown', testEvents)
h5.addEventListener('select', testEvents)
h6.addEventListener('enter', testEvents)   
button.addEventListener('mouseleave', testEvents);

function testEvents(evt){
    console.log(evt.view);
}

