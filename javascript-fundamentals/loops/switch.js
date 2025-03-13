// let a = 10;
// switch(a){
//     case 2:
//         console.log('this is 2');
//         break;
//     case 5:
//         console.log('exact!');
//         break;
//     case 6:
//         console.log('not valid');
//         break;
//     default:
//         console.log('let them go!')
// }

let avr = prompt("Enter number!");
let n = parseInt(avr);
switch(n){
    case 0:
    case 1:
        alert('zero or one!');
        break;
    case 2:
        alert('2');
        break;
    case 3:
    alert('3');
        break;
    default:
        alert('rest will be shown')
}