const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100
};

// console.log('Name:', hotel.name);
// console.log('Stars:', hotel.stars);
// console.log('Capacity:', hotel.capacity);


const {name: hotelName, stars, capacity} = hotel;
// console.log(hotelName);
// console.log(stars);
// console.log(capacity);

const rgb = [255, 100, 80];
const [red, green, blue] = rgb;

console.log(red, green, blue);