// using async and await instead chaining then();
// still needs error handling with try...cath
const str = "https://jsonplaceholder.typicode.com/posts";

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
