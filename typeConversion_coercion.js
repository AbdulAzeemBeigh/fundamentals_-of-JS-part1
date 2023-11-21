// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(typeof(Number(inputYear)),typeof( inputYear));

console.log(Number(inputYear) + 18);
console.log(Number('Azeem'));
console.log(String(23),23);
console.log(typeof(String(23)), typeof(23));


// type coercion
console.log('I am' + 23 + 'years old');
console.log('23'-'10'-3);
console.log('23'/'2');
console.log('2'*'2');

let n = '1' + 1 ;
n = n-1;
console.log(n);