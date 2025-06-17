// using async and await instead chaining then();
// still needs error handling with try...cath
<<<<<<< HEAD
const str = "https://jsonplaceholder.typicode.com/posts";

=======
const url = "https://jsonplaceholder.typicode.com/posts";
console.log('object');
>>>>>>> 101e7f0c4decf366922f66e5062c4365d4fee2fd
export async function asyncAwait() {
  // fetch().then().then()
  const url  = new URL(str)
  console.log(url);
  try {
    const response = await fetch(url);
    console.log(response);
    if(!response.ok) throw new Error('not valid line')
    const dataObj = await response.json();
    console.log(dataObj);
  } catch (error) {
    console.log(error);
  }
}
