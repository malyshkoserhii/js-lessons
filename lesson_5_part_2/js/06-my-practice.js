// class Doctor {
//   constructor(name, specialization, isOnWorkNow) {
//     this._name = name;
//     this.specialization = specialization;
//     this._isOnWorkNow = isOnWorkNow;
//   }

//   get name() {
//       return this._name;
//   }

//   set name (value) {
//     this._name = value;
//   }

//   getFullInfo() {
//     console.log(
//       `Doctor name: ${this.name}, Specialization: ${this.specialization}, On work: ${this._isOnWorkNow}`,
//     );
//   }
// }

// const kongo = new Doctor("Kongo", "dentist", true);

// console.log(kongo);
// console.log(kongo instanceof Doctor);
// console.log(kongo instanceof Doctor);

// const ajax = new Doctor("Ajax", "surgeon", false);
// console.log(ajax);
// console.log(ajax instanceof Doctor);
// console.log(ajax instanceof Doctor);

// kongo.getFullInfo();
// ajax.getFullInfo();

// console.log(kongo.name);
// console.log(ajax.name);

// kongo.name = 'Kongo-Mango';
// console.log(kongo.name);

class Sportsman {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  run() {
    console.log(`${this.name} біжить.`);
  }
}

const footballer = new Sportsman("Ronaldo", 32, "футболіст");
console.log(footballer);

footballer.run();

class Swimmer extends Sportsman {
  constructor(name, age, type, swim) {
    super(name, age, type);
    this.swim = swim;
  }

  swimming() {
    console.log(`${this.name} пливе.`);
  }

  move() {
      super.run();
      this.swimming();
  }
}

const swimmer = new Swimmer ("Ivanov", 32, "swimmer", "100 meter");

console.log(swimmer);
swimmer.run();
swimmer.swimming();
swimmer.move();
