
const url = 'https://jsonplaceholder.typicode.com/posts';
const album = 'https://jsonplaceholder.typicode.com/albums';

export function getData(){
    fetch(url)
        // .then(res=>res.json())
        .then((res)=>{
            console.log(res.status);
        })
        .then((data)=>console.log(data))
}

export function getAlbulm(){
    fetch(album, {
        method: "GET"
    })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch((err)=>{
            console.log(err.message);
        })
}



