const country = "Romania";
const continent = "Europe";
let population = 19;

console.log("LECTURE: Values and Variables");
console.log(`${country}, ${continent}, has a population of ${population} mln. people.`);

const isIsland = false;
let language;

console.log("LECTURE: Data Types");
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log("LECTURE: let, const and var");
language = "romanian";

console.log("LECTURE: Basic Operators");
console.log(`If Romania would be split in half, it would have ${population / 2} mln people.`);
console.log(`Population increased by 1: ${++population}`);

const finlandPopulation = 6;
console.log(`${population > finlandPopulation ? "Romania" : "Finland"} has more people.`);

const averagePopulation = 33;
console.log(`Romania has ${population > averagePopulation ? "more" : "less"} people than average country.`);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);
