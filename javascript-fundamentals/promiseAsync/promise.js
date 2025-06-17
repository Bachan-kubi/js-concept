export function simplePromise(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const fData = fetch(url)
    // console.log(fData)
        .then((fData)=>{
            if(!fData.ok){
                throw new Error('Lets learn more')
            }
            console.log(fData.text());
            return fData.json()
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