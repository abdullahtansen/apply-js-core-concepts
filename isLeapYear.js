function isLeapYear (year){
    const reminder = year % 4;
    if(reminder === 0){
        return true;
    }
    else{
       return false;
    }
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('my year', isMyYearLeapYear);
const isHerYearLeapYear = isLeapYear(1960);
console.log('her year', isHerYearLeapYear);