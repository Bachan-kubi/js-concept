// function changeBgColor(){
//     const color = document.getElementById('bg-color');
//     color.classList.add('b-color');
// }

// const pageTitle = document.getElementById('page-title');
// console.log(pageTitle)
// const classNames = document.getElementsByClassName('family');
// console.log(classNames[1]);
// // const arr = classNames.forEach(ele=>console.log(ele))

// const convertedToArray = [...classNames];
// console.log(convertedToArray)
// convertedToArray.forEach(ele=>console.log(ele))

// const tags = document.getElementsByTagName('p');
// console.log(tags)
// const allTags = [...tags];
// allTags.map(elem=>console.log(elem));

// // const querySelectors = document.querySelectorAll('section button:nth-child(3)');
// const querySelectors = document.querySelectorAll('section button');
// console.log(querySelectors)
// querySelectors.forEach(ele=>console.log(ele));
// // change elements
// const changeContentJs = document.getElementById('js');
// const changeContentPara = document.getElementById('para');
// console.log(changeContentJs);
// changeContentJs.innerHTML= '<h1>ami change korte <b>parsi</b></h1>';
// changeContentJs.classList.add('c-color');
// // text content
const p = document.querySelector('p');
console.log(p.innerText)
console.log(p.textContent)

const footer = document.getElementById('footer');
console.log(footer.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
console.log(footer)