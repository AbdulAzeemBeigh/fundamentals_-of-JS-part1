const day = 'monday';

switch (day){
    case 'monday':
        console.log("This is monday");
        break;
    case 'tuesday':
        console.log("This is tuesday");
        break;
    case 'wednesday':
        console.log("This is wednesday");
        break;
    case 'thursday':
    case 'friday':
        console.log("enjoy good days");
        break;
    case 'saturday':
    case 'sunday':
        console.log("enjoy weekend");
        break;
    default:
        console.log("Not a valid day")
        console.log("enter a valid day")
}

// switch with prompt

const _day = String(prompt());

// using if else 

if(day === 'monday'){
    console.log("Its switch case 'monday'");
}else if(day ==='tuesday'){
    console.log("Its switch case 'tuesday'");

}else if(day ==='wednesday'){
    console.log("Its switch case 'wednesday'");

}else if(day ==='thrusday' || day === 'friday'){
    console.log("Its switch case 'thursday' & 'friday'");

}else if(day ==='saturday' || day==='sunday'){
    console.log("Its switch case 'saturday' & 'sunday'");

}else{
    console.log("Its switch case 'wrong day'");

}


switch (_day){
    case 'monday':
        console.log("This is monday");
        break;
    case 'tuesday':
        console.log("This is tuesday");
        break;
    case 'wednesday':
        console.log("This is wednesday");
        break;
    case 'thursday':
    case 'friday':
        console.log("enjoy good days");
        break;
    case 'saturday':
    case 'sunday':
        console.log("enjoy weekend");
        break;
    default:
        console.log("Not a valid day");
}
