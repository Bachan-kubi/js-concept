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
  
