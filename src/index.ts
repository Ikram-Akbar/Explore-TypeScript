console.log("hello world ");
// create a variable with ts
let num: string = "this is a variable with typescript..";

let age: number = 25;
if (age < 18) {
    age += 10;
    console.log()
};

let price: number = 120;
let pc: string = "dell";
let is_your: boolean = false;
let level;

const fun = (doc: any) => {
    console.log(doc);
}

// Array in ts

const newNum: number[] = [12, 2, 3];
newNum.forEach(n => n.toFixed());



// tuples

let user: [number, string, boolean] = [1, "dell", false];


// enum

enum size { Small = 5, Medium, Large };
let mySize: size = size.Large;
console.log(mySize);
// for better code output 
const enum size1 { Small = 5, Medium, Large };
let mySize1: size1 = size1.Small;
console.log(mySize1);


// function in ts

function calculatesTex(income: number, taxYear: number): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;

}
calculatesTex(11_000, 2022,)




// create an another function for find out the sum

const multi = (para1: number, para2: number) => {
    if (para1 < 0) {
        return 0;
    }
    else {
        return para1 * para2;
    }
}

console.log(multi(20, 10));


// union types
function kgToLbs(weight: number | string): number {
    if (typeof weight === "number")
        return weight * 2;
    else {
        return parseInt(weight) * 2
    }
}

kgToLbs(10);
kgToLbs("10kg")


// optional chaining

type Customer = {
    birthday: Date;
};
function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };

}
let customer = getCustomer(0);
console.log(customer);