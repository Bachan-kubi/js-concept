// style paragraph
const para = document.getElementById("txt");
const button = document.getElementById("changeBtn");
console.log(para, button);
// method-1
// button.addEventListener('click',function(){
//     console.log('btn paisi')
//     para.style.fontSize = '25px';
//     para.style.fontFamily = 'Comic Sans MS';
//     para.style.color = 'red';
// });

// function changeText() {
//   if (
//     para.style.fontSize === "25px" &&
//     para.style.fontFamily === "Comic Sans MS" &&
//     para.style.color === "red"
//   ) {
//     para.style.fontSize = "";
//     para.style.fontFamily = "";
//     para.style.color = "";
//   } else {
//     para.style.fontSize = "25px";
//     para.style.fontFamily = "Comic Sans MS";
//     para.style.color = "red";
//   }
// }

// function changeText() {
//     const computedStyle = window.getComputedStyle(para); // Get the computed styles
  
//     if (
//       computedStyle.fontSize === "25px" &&
//       computedStyle.fontFamily.includes("Comic Sans MS") && // Use includes() for font-family variations
//       computedStyle.color === "rgb(255, 0, 0)" // "red" is stored as "rgb(255, 0, 0)"
//     ) {
//       // Reset styles
//       para.style.fontSize = "";
//       para.style.fontFamily = "";
//       para.style.color = "";
//     } else {
//       // Apply styles
//       para.style.fontSize = "25px";
//       para.style.fontFamily = "Comic Sans MS";
//       para.style.color = "red";
//     }
//   }

// function changeText(){
// para.classList.toggle('txt')
// }

// get form value
function getFormValue(event) {
    event.preventDefault()
    // method-1
    const v = document.getElementById('form-1');
    console.dir(v.elements['fname'].value);
    console.dir(v.elements['lname'].value);
    
    // method-2
    // for (let i = 0; i < v.elements.length; i++) {
    //     let element = v.elements[i];
    //     if (element.type !== "button" && element.type !== "submit") {
    //         console.log(element.value);
    //     }
    // }
}
