const drivingLicence = true;
const goodVision = true;

console.log(drivingLicence && goodVision);
console.log(!drivingLicence && goodVision);
console.log(drivingLicence || goodVision);
console.log(drivingLicence || !goodVision);
console.log(!drivingLicence || !goodVision);

if(drivingLicence && goodVision){
    console.log("Abdul is able to drive");
}else{
    console.log("Abdul should not be able to drive");
}

const isTired = true;

if(drivingLicence && goodVision && isTired) console.log("Able to drive")

if(drivingLicence && goodVision && !isTired){
    console.log("should be able to drive");
}else console.log("condition false");

