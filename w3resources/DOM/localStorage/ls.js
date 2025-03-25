// initialize pages 
const textArea = document.getElementById('myTextArea');
function initializeTextArea(){
    console.log(textArea);
    
    // checkde whether saved in local storage
    if(localStorage.getItem('savedText')){
        textArea.value = localStorage.getItem('savedText');
    }
    textArea.addEventListener('input', saveText);
}
// save text to local storage
function saveText(e){
    const currentText = e.target.value;
    localStorage.setItem('savedText', currentText);
}
function clearText(){
    localStorage.removeItem('savedText');
    textArea.value = "";
}

window.onload = initializeTextArea;
