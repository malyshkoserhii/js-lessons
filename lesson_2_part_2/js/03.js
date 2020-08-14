"use strict";

//Slugify

// const title = 'Top 10 benefits of React framework';
// const words = title.toLocaleLowerCase().split(' ');
// const slug = words.join('-');

// console.log(slug);

const slugify = function (string) {
  const words = string.toLocaleLowerCase().split(" ");
  const slug = words.join("-");

  return slug;
};

const slug1 = slugify("Top 10 benefits of React framework");
console.log(slug1);


// Робимо масив  слагів

// const articles = [
//   "Top 10 benefits of React framework",
//   "Build Mean Stack Application",
//   "11 fruitfull resourses to improve Javascript knowledge"
// ];

// const slugs = [];

// for (const article of articles) {
//     const slug = slugify(article);
//     slugs.push(slug);
// }

// console.log(slugs);