import { simplePromise } from "./promise.js";


// simplePromise().then((msg)=>{
//     console.log(msg);
// });

async function getData() {
    const res = await simplePromise();
    console.log(res);
}
getData();

