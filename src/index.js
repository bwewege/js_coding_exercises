const str =
  "the cat is hairier than the rat, don't think thats all! He is big too";

const words = str
  .toLowerCase()
  .replace(/[^a-zA-Z0-9 ]/g, "")
  .split(" ");
console.log(words);
const wordCount = {};

for (let i of words) {
  //NTS - 'of' is used instead of in to iterate over arrays
  if (i === "") {
    continue;
  }

  if (wordCount[i]) {
    wordCount[i]++;
  } else {
    wordCount[i] = 1;
  }
}

console.log(wordCount);

//NTS - may want to figure out how to deal with apostraphe's e.g. don't
