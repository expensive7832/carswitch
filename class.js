
class Car{
   constructor(name, model, year){
    this.carName = name;
    this.carModel = model;
    this.carYear = year;
   }

   getInfo(){
    return console.log(`the available car is ${this.carName} and the model is ${this.carModel} and the year is ${this.carYear}`)
   }
}

class Person extends Car{
    constructor(surname, gender, name, model, year){
        super(name, model,year);
        this.surname = surname;
        this.gender = gender;
    }
    myInfo(){
        return console.log(`my name is ${this.surname} and i am a ${this.gender} and i drive ${this.carName}`)
    }
}

var person1 = new Person("kayode", "male", "Toyota");
var person2 = new Person("Linda", "female");
var person3 = new Person("Bobby", "he/she or she/he");

person1.myInfo()


const calc = (a,b) => {
    return a*b;
}

console.log(calc(4,7))