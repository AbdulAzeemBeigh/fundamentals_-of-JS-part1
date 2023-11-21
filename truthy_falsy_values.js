console.log("0,undefined, ' ',null,NaN are 5 falsy values");

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money=100;
if(money){
    console.log("Don't need to spend it all");
}else{
    console.log("You should get a job");
}

let height=0;
if(height){
    console.log("Height is defind");
}else{
    console.log("Height is undefined");
}