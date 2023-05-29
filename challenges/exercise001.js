// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.trim().charAt(0).toUpperCase() + word.trim().slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return (
    firstName.trim().charAt(0).toUpperCase() +
    "." +
    lastName.trim().charAt(0).toUpperCase()
  );
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  return parseFloat((originalPrice * (1 + vatRate / 100)).toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  const reducedPrice = parseFloat(
    (originalPrice - originalPrice * (reduction / 100)).toFixed(2)
  );

  return reducedPrice;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  const strRemain = str.length % 2;

  return str.substr(Math.ceil(str.length / 2) - 1, strRemain === 0 ? 2 : 1);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  let newWords = [];
  words.forEach((w) => newWords.push(w.split("").reverse().join("")));

  return newWords;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let countLinux = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].type === "Linux") {
      countLinux++;
    }
  }

  return countLinux;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  const average = scores.reduce((a, c) => a + c, 0) / scores.length;

  return parseFloat(average.toFixed(2));
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  const three = n % 3;
  const five = n % 5;

  if (three === 0 && five === 0) {
    return "fizzbuzz";
  } else if (three === 0) {
    return "fizz";
  } else if (five === 0) {
    return "buzz";
  } else {
    return n;
  }
}
