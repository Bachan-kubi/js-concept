// initialize pages
const textArea = document.getElementById("myTextArea");

function initializeText(){
    if(localStorage.getItem('savedTxt')){
        textArea.value = localStorage.getItem('savedTxt')
    }

    textArea.addEventListener('input', saveText);
}

function saveText(e){
    const currentText = e.target.value;
    localStorage.setItem('savedTxt', currentText);
}
function clearText(){
    localStorage.removeItem('savedTxt');
    textArea.value = "";
}

window.onload = initializeText;

