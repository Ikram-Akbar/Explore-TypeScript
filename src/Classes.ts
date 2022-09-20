/*
A class in terms of OOP is a blueprint for creating objects.
 A class encapsulates data for the object. 
*/

class Person{
    first_name: string;
    last_name: string;
    id: number

    constructor(fName:string, lName:string, id:number) {
        this.first_name = fName;
        this.last_name = lName;
        this.id = id;
    }
}

const person1 = new Person("ikram", "akbar", 125);
console.log(person1);