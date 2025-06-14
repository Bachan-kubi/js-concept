// const data = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=>{
//         data.map(t=>console.log(t.name))
//     })

// const names = document.getElementById("names");
// console.log(names);
// async function fetchData() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         names.innerHTML = data.map(n=>`<p>${n.name}</p>`).join('');

//     } catch (error) {
//         console.log(error.message);
//     }
// }
// fetchData();

// const users = fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: 'ami'
//     })
// })
//     .then(res=>{
//         return res.text()})
//     .then(data=>console.log(data))


// const url = 'https://jsonplaceholder.typicode.com/photos'

// .then(data=>data.json())
// // .then(finalData=>console.log(finalData));
// .then(finalData=>displayData(finalData));

// function displayData(photos) {
//     const namesDiv = document.getElementById('names');
//     if (!namesDiv) {
//         console.error("Element with ID 'names' not found.");
//         return;
//     }
//     namesDiv.innerHTML = photos
//         .slice(0, 10)
//         .map(photo => `
//             <div style="margin: 10px;">
//                 <img src="${photo.url}" alt="${photo.title}">
//                 <h3>${photo.title}</h3>
//             </div>
//         `).join('')
// }

import { getData, getAlbulm } from "./01_basic_fetch.js";
import { asyncAwait } from "./02_try_async.js";


getData();
getAlbulm(); 
asyncAwait();




