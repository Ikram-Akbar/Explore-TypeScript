//  interface in typescript

const users: {
    id: number;
    fName: string;
    isStudent: boolean;
}[] = [];

const person3: {
    id: number;
    fName: string;
    isStudent: boolean;
} = {
    id: 1,
    fName: "Mr Mansur Ali ",
    isStudent: false
}
const person4: {
    id: number;
    fName: string;
    isStudent: boolean;
} = {
    id: 2,
    fName: "Mr Rahim  Ali ",
    isStudent: false
};


users.push(person3);

console.log(users);
