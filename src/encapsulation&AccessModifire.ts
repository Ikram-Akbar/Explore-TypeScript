class User {
    // if u are not use any access modifiers then it will work default ( public )
     userName: string;
     age: number;


    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }
    display(): void{
        console.log("hello");
    }
}
 





































// class student extends User {
//     studentId: number;
//     constructor(userName: string, age: number, studentId: number) {
//         super(userName, age);
//         this.studentId = studentId;

//     }
//     display(): void {
//         console.log(`username: ${this.userName}, age:${this.age}, id: ${this.studentId}`);
//     }
// }

// let student1 = new student("Mr Akbar", 25, 12);
// let newStudent = new student("mr ali", 55, 14);
// newStudent.userName = " Ikram Akbar";
// console.log(newStudent);