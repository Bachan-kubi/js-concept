
const url = 'https://jsonplaceholder.typicode.com/posts'

export function getData(){
    fetch(url)
        .then(res=>res.json())
        .then((data)=>console.log(data))
}



