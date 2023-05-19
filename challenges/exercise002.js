export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  const fromManchester = person.city === "Manchester" ? true : false;

  return fromManchester;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const buses = Math.ceil(people / 40);

  return buses;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!

  let countSheep = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "sheep") {
      countSheep++;
    }
  }

  return countSheep;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  const postCode = person.address.postCode.charAt(0);
  const city = person.address.city;

  if (postCode === "M" && city !== "Manchester") {
    return false;
  } else if (postCode !== "M") {
    return false;
  } else if (postCode === "M") {
    return true;
  }
}
