let massMark = 78,
    heightMark = 1.69,
    massJohn = 92,
    heightJohn = 1.95;
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
if(BMIMark>BMIJohn){
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
}else{
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}