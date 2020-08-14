// Вивчаємо класи. Переписуємо Hero з новим синтаксисом

class Hero {
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

  gainXp(amount) {
    console.log(`${this.name} отримав ${amount} досвіду`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp);
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакує використовуючи ${this.weapon}`);
  }
}

const mango = new Warrior("Mango", 1000, "Спис");
console.log(mango);
mango.attack();