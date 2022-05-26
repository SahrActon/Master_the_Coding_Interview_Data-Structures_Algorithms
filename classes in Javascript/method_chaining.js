class Person {

    constructor(age, height, firstName, lastName) {
        /** The "this"  keyword allows us to create and attach properties to the new object */
        this.age = age;
        this.height = height;
        this.fName = firstName;
        this.lName = lastName;
        this.earning = 0; // we don't pass this in as a parameter- every user start's with 0
    }

    job() {
    }

    getAllPersonDetails() {
        let person = this.fName + " " + this.lName + " " + this.age + " " + this.height;
        return this;
    }

    getFirstName() {
        console.log(this.fName);
        return this;
    }

    earnings() {
        this.earning++;
        console.log(this.fName + " " + this.lName + " has earned " + this.earning);
        return this;
    }
}


let person1 = new Person(20, 6.3, "Sahr", "Acton");
console.log(person1.earnings() + person1.earnings() + person1.earnings());


person1.earnings().earnings().earnings().getFirstName();