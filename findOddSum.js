// get calculate sum
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element,sum);
    }
    return sum;
}
// odd numbers find out of an array
function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0 ){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12,65,45,78,32,45,91];

const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);

const oddNumbersSum = getSumOfAnArray(oddNumbers);
console.log(oddNumbersSum);



// even numbers find out array and sum calculate
function getSumOfAnArray(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}

function getEvenNumbersOfAnArrayFind(numbers){
    const evenNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        if(elements % 2 === 0){
            evenNumbers.push(elements);
        }
    }
    return evenNumbers;
}

const yourNumbers = [265,20,120,80,50,65,89,71,52,65,85,62,34,30];

const evenNumbers = getEvenNumbersOfAnArrayFind(yourNumbers)
console.log(evenNumbers);
const evenNumber = getSumOfAnArray(evenNumbers);
console.log(evenNumber);

