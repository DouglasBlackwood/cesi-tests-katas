const leapYear = require('./leapYear');

test("leapYear returns empty string", () => {
  expect(leapYear()).toBe("");
});
