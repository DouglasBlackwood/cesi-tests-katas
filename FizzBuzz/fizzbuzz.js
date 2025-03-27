function fizzbuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }
  if (number % 3 === 0){
    return "Fizz";
  }
  if (number % 5 == 0){
    return "Buzz";
  }
  return number.toString();
}

function main(n) {
  let result = [];
  for (let index = 1; index <= n; index++) {
    const element = fizzbuzz(index);
    result.push(element)
  }
  return result;
}

module.exports = {main, fizzbuzz};
