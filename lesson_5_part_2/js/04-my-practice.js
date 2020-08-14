const Hotel = function(name, stars, capacity) {
    this.name = name;
    this.stars = stars;
    this.capacity = capacity;
  };
  
  // В результате вызова
  const hotel = new Hotel('Resort Hotel', 5, 100);
  // Получаем такой объект
  console.log(hotel);
  // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

const Lawyer  = function(name, position, experience, specialization) {
    this.name = name;
    this.position = position
    this.experience = experience;
    this.specialization = specialization;

    this.success = function(nameOfLawyer) {
        console.log(`${this.name} має ${this.experience} років стажу роботи`);
    }
};

const lawyer = new Lawyer('Ivanenko Ivan', 'senior partner', 10, 'criminal law');
console.table(lawyer);

lawyer.success('Ivanenko Ivan');