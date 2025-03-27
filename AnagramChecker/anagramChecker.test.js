const anagramChecker = require('./anagramChecker');

test("Check anagram for `toto` and `tata` returns false", () => {
  // Arrange
  let words1 = "toto";
  let words2 = "tata";

  // Act
  let actual = anagramChecker(words1, words2);

  // Assert
  expect(actual).toBe(false);
});

test("Check anagram for `silent` and `listen` returns true", () => {
  // Arrange
  let words1 = "silent";
  let words2 = "listen";

  // Act
  let actual = anagramChecker(words1, words2);

  // Assert
  expect(actual).toBe(true);
});

test("Check anagram for `anagram` and `nagaram` returns true", () => {
  // Arrange
  let words1 = "anagram";
  let words2 = "nagaram";

  // Act
  let actual = anagramChecker(words1, words2);

  // Assert
  expect(actual).toBe(true);
});

test("Check anagram for `A            gentleman.!:` and `Elegant man` returns true", () => {
  // Arrange
  let words1 = "A            gentleman.!:";
  let words2 = "Elegant man";

  // Act
  let actual = anagramChecker(words1, words2);

  // Assert
  expect(actual).toBe(true);
});