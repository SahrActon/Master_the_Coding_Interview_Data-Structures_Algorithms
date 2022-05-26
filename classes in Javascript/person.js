class Person {

    constructor(age, height, firstName, lastName) {
        /** The "this"  keyword allows us to create and attach properties to the new object */
        this.age = age;
        this.height = height;
        this.fName = firstName;
        this.lName = lastName;
    }

    job() {
    }

    getPerson() {
        let person = this.fName + " " + this.lName + " " + this.age + " " + this.height;
        return person;
    }
}


let person1 = new Person(20, 6.3, "Sahr", "Acton");

console.log(person1.age);
console.log(person1.height);
console.log(person1.fName);
console.log(person1.lName);

console.log(person1.getPerson());


console.log(person1)