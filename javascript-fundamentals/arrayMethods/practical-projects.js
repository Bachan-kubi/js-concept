 // split method
 const sentence = 'i love javascript';
 const sep = sentence.split("");
 console.log(sep.length);
 sep.forEach(s=>{
    console.log(s);
 });
 sep.map(s=>{
    console.log(s);
 });

//  const users ="Ritu , Mitu, Kitu";
//  console.log(users.split(",").map(f=>f.trim()));

 const inputs = document.getElementById("tags");
  const btn = document.getElementById("btn-add");

  btn.addEventListener("click", () => {
    const values = inputs.value; // get text
    const arr = values.split(",").map(m => m.trim()); // turn into array
    console.log(arr);
  });