// duplicateNumbers(arr1, arr2);
// "returns an array of numbers which appear in both arr1 and arr2"
//let arr1 = [1, 55, 4, 3, 7, 8];
//let arr2 = [55, 23, 65, 0];
// "returns the duplicate numbers in ascending order"
//let arr1 = [1, 55, 4, 3, 7, 8];
//let arr2 = [55, 23, 65, 0, 1];
// "returns each number only once, even if it appears in one array multiple times"
let arr1 = [1, 7, 2, 2, 2, 3, 4, 5];
let arr2 = [1, 2, 6, 7];

const intersection = [...new Set(arr1.filter((x) => arr2.includes(x)))];
// Note for self: The arrow function inside the filter() method runs the includes() method against each item arr1
//                for each element 'x' in arr1 the arrow func checks if it is included arr2.
//                if x is found the element is kept in the resultset.
//                'Set' then wraps the whole thing and removes duplicats
//                ...new converts the 'Set' object into an array.

console.log(intersection.sort());
