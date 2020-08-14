// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest("Mango", 28);
// const poly = new Guest("Poly", 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

// console.log(mango);
// console.log(poly);

const Traveler = function (name, country) {
  this.name = name;
  this.country = country;
};

Traveler.prototype.showTravelInfo = function() {
    console.log(`${this.name} їде у відпустку в ${this.country}`);
}

const serhii = new Traveler("Serhii", "Italy");
const iryna = new Traveler("Iryna", "France");

serhii.showTravelInfo();
iryna.showTravelInfo();

console.log(serhii);
console.log(iryna);
