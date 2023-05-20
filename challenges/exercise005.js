export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  if (nums.includes(n) === false || nums.indexOf(n) === nums.length - 1) {
    return null;
  } else {
    return nums[nums.indexOf(n) + 1];
  }
  // NTS - this can be more concise by using a ternery operator
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  let onesCount = 0;
  let zerosCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      onesCount++;
    } else if (str[i] === "0") {
      zerosCount++;
    }
  }

  return { 1: onesCount, 0: zerosCount };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  const reverseNum = parseInt(n.toString().split("").reverse().join(""));

  return reverseNum;
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  let sum = 0;

  for (let i = 0; i < arrs.length; i++) {
    sum = sum + arrs[i].reduce((a, b) => a + b);
  }

  return sum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length < 2) {
    return arr;
  } else {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }

  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  for (let i in haystack) {
    if (
      typeof haystack[i] === "string" && //NTS - typeof is used to check if property is a string as includes() works with strings
      haystack[i].toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  const words = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ");

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

  return wordCount;
};
