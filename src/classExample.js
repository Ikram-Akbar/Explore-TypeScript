class myobject  {
  constructor(name, age, sports,) {
    this.name = name;
    this.age = age;
      this.sports = sports;
      this.year = year;

    }
    
    age() {
        let latestDate = new Date();
        return latestDate.getFullYear() - this.year;
    }
}












// crete a class 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    play(score) {
        console.log(`${this.name} is playing and his score is : ${score} `);
    }
}

const person1 = new Person("sakib al hasan ", 25);
const playCricket = person1.play(100);
console.log(playCricket);