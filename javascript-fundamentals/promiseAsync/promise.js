export function simplePromise(){
    const data = fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(data);

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Hellow World!');
        }, 1000);
    });
    
}