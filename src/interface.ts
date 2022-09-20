//  interface in typescript

// interface as a types
interface IUser {
    id: number;
    fName: string;
    isStudent: boolean;
}

const users: IUser[] = [];

const person3: IUser = {
    id: 1,
    fName: "Mr Mansur Ali ",
    isStudent: false
}
const person4: IUser = {
    id: 2,
    fName: "Mr Rahim  Ali ",
    isStudent: false
};


users.push(person3);

console.log(users);


// interface in class -


class InterfaceClass {
    constructor(
        public fullName: string,
        public age: number) {
        
    }
}


let one = new InterfaceClass("ikram akbar ", 45);
console.log(one);
