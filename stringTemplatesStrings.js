const firstName = "Abdul";
const job = "Teacher";
const birthYear = 1995;
const year = 2024;

const azeem = "I'm" + firstName + ', a ' + (birthYear - year) + ' years old' + job + '!';
console.log(azeem);

// template literals

const azeemNew = ` I'm ${firstName} ,a ${birthYear-year} year's old ${job}!`;

console.log(azeemNew);

console.log('just a regular string......');

console.log('string with \n\
multiple \n\
lines');

console.log(`string
with multiple
lines`);