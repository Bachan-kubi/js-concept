
const url = 'https://jsonplaceholder.typicode.com/posts';
const album = 'https://jsonplaceholder.typicode.com/albums';

export function getData(){
    fetch(url)
        .then(res=>res.json())
        .then((data)=>console.log(data))
}

export function getAlbulm(){
    fetch(album)
        .then(res=>res.json())
        .then(data=>console.log(data))
}



