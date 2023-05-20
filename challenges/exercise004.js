export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const smallNums = nums.filter((a) => a < 1);

  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const includesChar = names.filter((a) => a.charAt(0) === char[0]);

  return includesChar;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = words.filter((a) => a.substring(0, 3) === "to ");

  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const integers = nums.filter((a) => Number.isInteger(a) === true);

  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  const cityNames = users.map((a) => a.data.city.displayName);

  return cityNames;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const sqrtNums = nums.map((a) => parseFloat(Math.sqrt(a).toFixed(2)));

  return sqrtNums;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const sentencesWithStr = sentences.filter((a) =>
    a.toLowerCase().includes(str.toLowerCase())
  );

  return sentencesWithStr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longestSide = triangles.map((a) => {
    const uniqueNumbers = [...new Set(a)];
    return Math.max(...uniqueNumbers);
  });

  return longestSide;
}
