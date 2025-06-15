function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("register");
        resolve("resolved!");
    //   resolve();
    }, 1000);
  });
}
function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('sending email');
      console.log("send Email");
    }, 2000);
  });
}
function logIn() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
    console.log("Log in End");
    resolve();
  }, 3000);
    })
  
}
function getUserData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
    console.log("get user data");
    resolve();
  }, 2000);
    })
  
}
function displayUserData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
    console.log("display user data!");
    resolve()
  }, 2000);
    })
  
}
// register(function () {
//   sendEmail(function () {
//     logIn(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// promise
// register().then(sendEmail).then(logIn).then(getUserData).then(displayUserData).catch((err)=>{
//     console.log('error', err);
// });
// console.log("ki ase dekhi");

async function authenticaton(){
    try {
        const msg = await register();
                    await sendEmail();
                    await logIn();
                    await getUserData();
                    await displayUserData();
                    console.log(msg);
    } catch (error) {
        console.log(error);
        throw new Error();
    }

};
authenticaton().then(()=>{
    console.log('all set!');
}).catch((error)=>{
    console.log(error);
})