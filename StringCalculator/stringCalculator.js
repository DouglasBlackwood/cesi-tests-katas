function stringCalculator(numbers) {
  if (numbers) {
    if (numbers.startsWith("//")) {
      return add(numbers.slice(4), numbers[2]);
    }
    return add(numbers, /,|\n/);
  }
  return 0;
}

function add(numbers, delimiter) {

  let arrayNumbers = numbers.split(delimiter).map(Number)

  if(arrayNumbers.some(v => v < 0)){
    throw new Error;  
  }
  return arrayNumbers.reduce((a, b) => a + b, 0);
}

module.exports = stringCalculator;
