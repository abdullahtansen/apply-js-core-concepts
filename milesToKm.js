function milesToKilometer(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}
const dhakaMiles = 117.94 ;
const dhakaKilometer = milesToKilometer(dhakaMiles);
console.log(dhakaKilometer);