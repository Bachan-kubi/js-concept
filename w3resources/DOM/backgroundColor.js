function changeBgColor(){
    const color = document.getElementById('bg-color');
    color.classList.add('b-color');
}

const pageTitle = document.getElementById('page-title');
console.log(pageTitle)
const classNames = document.getElementsByClassName('family');
console.log(classNames[1]);
// const arr = classNames.forEach(ele=>console.log(ele))

const convertedToArray = [...classNames];
console.log(convertedToArray)
convertedToArray.forEach(ele=>console.log(ele))

const tags = document.getElementsByTagName('p');
console.log(tags)
const allTags = [...tags];
allTags.map(elem=>console.log(elem));

// const querySelectors = document.querySelectorAll('section button:nth-child(3)');
const querySelectors = document.querySelectorAll('section button');
console.log(querySelectors)