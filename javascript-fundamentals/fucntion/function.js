function register(callback) {
  setTimeout(() => {
    console.log("register");
    callback();
  }, 1000);
}
function sendEmail(callback) {
  setTimeout(() => {
    console.log("send Email");
    callback();
  }, 2000);
}
function logIn(callback) {
  setTimeout(() => {
    console.log("Log in End");
    callback();
  }, 3000);
}
function getUserData(callback) {
  setTimeout(() => {
    console.log("get user data");
    callback();
  }, 2000);
}
function displayUserData() {
  setTimeout(() => {
    console.log("display user data!");
  }, 2000);
}
register(function () {
  sendEmail(function () {
    logIn(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });
});

console.log("ki ase dekhi");
