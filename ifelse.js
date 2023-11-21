const age = 15;

if(age >=18){
    console.log('Abdul can start driving');
}else{
    const yearsLeft = 18-age;
    console.log(`Abdul can wait another ${yearsLeft} years`);
}

const birthYear = 2005;
let century;
if(birthYear <=2000){
    century = '20th century';
}else{
    century='21st century';
}
console.log(century);