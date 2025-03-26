const morseTranslator = require('./morseTranslator');

test("morseTranslator returns empty string", () => {
  expect(morseTranslator()).toBe("");
});
