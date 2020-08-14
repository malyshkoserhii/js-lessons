
const Hero = function (name, xp) {
    this.name = name;
    this.xp = xp;
};

const mango = new Hero ('Mango', 1000);

Hero.description = 'This is Hero base class';

Hero.showStats = function (hero) {
    console.log('Logging stats from Hero.showStats: ', hero);
}

Hero.prototype.changeName = function (name) {
    this.name = name;
}

console.log(mango);
// Hero.showStats(mango);


