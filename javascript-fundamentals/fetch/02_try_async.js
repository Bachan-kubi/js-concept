// using async and await instead chaining then();
// still needs error handling with try...cath
const url = "https://jsonplaceholder.typicode.com/posts";
console.log('object');
export async function asyncAwait() {
  // fetch().then().then()
  try {
    const response = await fetch(url);
    console.log(response);
    const dataObj = await response.json();
    console.log(dataObj);
  } catch (error) {
    console.log(error);
  }
}
