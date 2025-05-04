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

const users = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: 'ami'
    })
})
    .then(res=>{
        return res.text()})
    .then(data=>console.log(data))

