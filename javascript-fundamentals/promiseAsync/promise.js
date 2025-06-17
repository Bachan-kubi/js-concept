export function simplePromise(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    // console.log(fData)
        .then((res)=>{
            if(!res.ok){
                throw new Error('Lets learn more')
            }
            console.log(res);
            return res.json();
        })
        // .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    


    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Hellow World!');
        }, 1000);
    });
    
}