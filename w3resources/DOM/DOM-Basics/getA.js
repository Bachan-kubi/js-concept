const getAtt = document.getElementById('getAtr');
console.log(getAtt.target);
const dis = document.getElementById('dis')

function getAttr() {
    if (getAtt) {
      dis.innerText += `Target: ${getAtt.target}\nHref: ${getAtt.href} \n Hreflang: ${getAtt.hreflang} \n Type: ${getAtt.type}`;
    } else {
      dis.innerText = 'Element not found!';
    }
  }

  // get form value
  const form = document.getElementById('form1');
  // console.log(form.elements);
  
  function getFormValue(e){
    e.preventDefault();
    const form = e.target;
    const firstName = form.elements['firstname'].value;
    const lastName = form.elements['lastname'].value;
    const email = form.elements['email'].value;
    console.log(firstName, lastName, email);
  }

  // form 2
  const form2 = document.getElementById("form2");
  form2.addEventListener('change', formTwo);
  function formTwo(e){
    console.log(e);
    const inputName = e.target
    console.log(inputName);
  }
  
