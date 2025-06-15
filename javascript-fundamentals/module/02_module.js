class Car{
    constructor(name, model, year){
        this.name = name;
        this.model = model;
        this.year = year
    }
    aboutAll(){
        return(`${this.name}, model is ${this.model}, and year is ${this.year}`);
    }
}
export const nissan = new Car("Nissan", "Fiata", 20054);