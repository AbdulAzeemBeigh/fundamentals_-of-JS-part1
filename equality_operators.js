const age ='18';
const aGE = 18;
if(age === 18) console.log("its 18, strict");
if(aGE ===18) console.log("its 18, STRICT");

if(age == 18) console.log("its 18, lose");
if(aGE == 18)console.log("its 18, lose");


const favourite = Number(prompt("whats your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite===23) {
    console.log("number is 23");
} else if(favourite === 7) {
    console.log("number is 7");
} else if(favourite===9){
    console.log("number is 9");
} else{
    console.log(`number is not 23,7 or 9 but the NUMBER is ${favourite}`);
}


if(favourite !== 22) console.log("why not 23,strict");
if(favourite != 24) console.log("why not 23, loose");

