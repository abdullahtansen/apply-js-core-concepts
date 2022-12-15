// hours to convert minutes problem
function hoursToConvertMinutes(hour){
    const minutes = 60;
    const result = hour * minutes;
    return result;
}
const result = hoursToConvertMinutes(5);
console.log(result);

// find leap year of an array
function findLeapYear(year){
    let years = [];
    for(let i = 0; i < year.length; i++){
        const index = i;
        const element = year[index];
        if(element % 4 === 0){
            years.push(element);
        }
    }
    return years;
}


const years = [2023, 2024, 2025, 2028, 2030]
const leapYear = findLeapYear(years);
console.log('year is a leap year',leapYear);
