// Функція-конструктор

const Manager = function(name, sales) {
    this.name = name;
    this.sales = sales;
};

Manager.prototype.sell = function() {
    this.sales +=1 ;
};

const mango = new Manager('Mango', 5);

console.log(mango);
mango.sell();
console.log(mango);
mango.sell();
console.log(mango);

const poly = new Manager('Poly', 10);
console.log(poly);