const isLeapYear = require('./leapYear');

test("2025 is not a Leap Year ", () => {
  expect(isLeapYear(2025)).toBe(false);
});

test("Year divisible by 4 is a Leap Year ", () => {
  expect(isLeapYear(2024)).toBe(true);
});

test("Year divisible by 100 is not a Leap Year ", () => {
  expect(isLeapYear(1900)).toBe(false);
});

test("Year divisible by 400 is a Leap Year ", () => {
  expect(isLeapYear(2000)).toBe(true);
});