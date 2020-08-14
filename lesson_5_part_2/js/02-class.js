// Вивчаємо класи. Переписуємо Hero з новим синтаксисом

class Hero {
  static description = "This is Hero base class";

  static showStats(hero) {
    console.log("Logging stats from Hero.showStats: ", hero);
  }

  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  get name() {
      return this._name;
  }

  set name(newName) {
      this._name = newName;
  }

//   changeName(name) {
//     this.name = name;
//   }

  gainXp(amount) {
    console.log(`${this.name} отримав ${amount} досвіду`);
    this.xp += amount;
  }
}

console.dir(Hero);

const mango = new Hero("Mango", 1000);

// mango.gainXp(2000);
// console.log(mango);

// Hero.showStats(mango);

console.log(mango.name);

mango.name = 'Mangocooldog';

console.log(mango.name);

