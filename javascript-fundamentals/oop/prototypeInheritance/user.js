let user = {
    name: "Bachan",
    surname: "Kubi",
    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    },
    get fullName(){
        return `${this.name} ${this.surname}`
    }
};
let admin = {
    __proto__: user,
    isAdmin: true
};
admin.fullName = "Epa Ghagra";
console.log(admin.fullName);