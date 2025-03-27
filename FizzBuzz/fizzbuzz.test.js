const {main, fizzbuzz} = require('./fizzbuzz');

test("fizzbuzz 1 returns 1", () => {
  expect(fizzbuzz(1)).toBe("1");
});

test("fizzbuzz 3 returns Fizz", () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test("fizzbuzz 5 returns Buzz", () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

test("fizzbuzz 6 returns Fizz", () => {
  expect(fizzbuzz(6)).toBe("Fizz");
});

test("fizzbuzz 10 returns Buzz", () => {
  expect(fizzbuzz(10)).toBe("Buzz");
});

test("fizzbuzz 15 returns FizzBuzz", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});

test("main(n=15) returns 15 FizzBuzz elements", () => {
  expect(main(15)).toStrictEqual([
       "1",
       "2",
       "Fizz",
       "4",
       "Buzz",
       "Fizz",
       "7",
       "8",
       "Fizz",
       "Buzz",
       "11",
       "Fizz",
       "13",
       "14",
       "FizzBuzz",
     ]);
});
