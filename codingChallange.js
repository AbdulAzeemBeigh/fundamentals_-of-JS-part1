// test data 1
let massMark = 78,
    heightMark = 1.69,
    massJohn = 92,
    heightJohn = 1.95;
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn,BMIMark);
if(BMIMark > BMIJohn){
    markHigherBMI = BMIMark;
    console.log("Mark",markHigherBMI);
}else{
    markHigherBMI = BMIJohn;
    console.log("John",markHigherBMI)
}

// test data 2
let mass_Mark = 95,
    height_Mark = 1.88,
    mass_John = 85,
    height_John = 1.76;
BMI_Mark = mass_Mark / (height_Mark * height_Mark);
BMI_John = mass_John / (height_John * height_John);
const mark_Higher_BMI = BMI_Mark > BMI_John;
console.log(BMI_Mark, BMI_John, mark_Higher_BMI);