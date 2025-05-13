function register() {
  setTimeout(() => {
    console.log("register");
  }, 1000);
}
function sendEmail() {
  setTimeout(() => {
    console.log("send Email");
  }, 1000);
}
function logIn() {
  setTimeout(() => {
    console.log("Log in End");
  }, 3000);
}
function getUserData() {
  setTimeout(() => {
    console.log("get user data");
  }, 2000);
}
function displayUserData() {
  setTimeout(() => {
    console.log("display user data!");
  }, 1000);
}
register();
sendEmail();
logIn();
getUserData();
displayUserData();

console.log('ki ase dekhi');
