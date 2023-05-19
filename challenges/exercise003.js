export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] ** 2;
  }

  return nums;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let camelWords = [words[0].toLowerCase()];

  for (let i = 1; i < words.length; i++) {
    camelWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }

  return camelWords.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let countSubjects = 0;

  for (let i = 0; i < people.length; i++) {
    countSubjects = countSubjects + people[i].subjects.length;
  }

  return countSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let i = 0;
  let incIngredient = false;

  while (i < menu.length && incIngredient !== true) {
    incIngredient = menu[i].ingredients.includes(ingredient);
    i++;
  }

  return incIngredient;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  const intersection = [...new Set(arr1.filter((x) => arr2.includes(x)))];
  // Note for self: The arrow function inside the filter() method runs the includes() method against each item in arr1
  //                for each element 'x' in arr1 the arrow func checks if it is included arr2.
  //                if x is found the element is kept in the resultset.
  //                'Set' then wraps the whole thing and removes duplicats
  //                ...new converts the 'Set' object back into an array.

  return intersection.sort();
}
