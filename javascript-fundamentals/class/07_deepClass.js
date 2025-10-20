const div = document.getElementById('class');

class User{
    constructor(name, age, email, address){
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.score = 0;
    };
    getInfo(){
        const div = document.createElement('div');
        div.classList.add('info');
        div.innerHTML = `
        <h3>User Info:</h3>
        <p>Name: ${this.name}</p>
        <p>Age: ${this.age}</p>
        <p>Email: ${this.email}</p>
        <p>Address: ${this.address}</p>
        <p>Score: ${this.score}</p>
        <hr>
        `;
        return div;
    }
    scoreUp(points){
        this.score += points;
    }
}
const kubi = new User('Kubi', 25, 'kubi@example.com', '123 Main St');
div.appendChild(kubi.getInfo());
kubi.scoreUp(200);
div.appendChild(kubi.getInfo());
const timData = {
    name: 'Tim',
    age: 30,
    email: 'tim@example.com',
    address: '456 Elm St',
    score: 15
}
const tim = new User(timData.name, timData.age, timData.email, timData.address, timData.score);
div.appendChild(tim.getInfo());
tim.scoreUp(50);
div.appendChild(tim.getInfo());