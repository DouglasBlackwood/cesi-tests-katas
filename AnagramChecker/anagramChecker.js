function anagramChecker(words1, words2) {
  let sort_word1 = sort(clean(words1));
  let sort_word2 = sort(clean(words2));

  return sort_word1 === sort_word2;
}

function clean(words){
  return words.toLowerCase().replace(/[^a-z]/g, '');
}

function sort(words) {
  return words.split("").sort().join("");
}

module.exports = anagramChecker;
