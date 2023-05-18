// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	
    const trimSpaces = word.trim();
 	const capitalised = trimSpaces.charAt(0).toUpperCase() + trimSpaces.slice(1)

 	return(capitalised)

}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
			
	const initials = firstName.trim().charAt(0).toUpperCase() + "." + lastName.trim().charAt(0).toUpperCase()
	
	return(initials)

}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
		
	const vatIncluded = parseFloat((originalPrice * (1+vatRate / 100)).toFixed(2));

    return(vatIncluded)
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	
	const reducedPrice = parseFloat((originalPrice - (originalPrice * (reduction/100))).toFixed(2));

    return(reducedPrice)

}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	
	const strRemain = str.length % 2;
	const start = Math.ceil(str.length / 2) - 1;
	const len = strRemain === 0 ? 2 : 1;
 
	return(str.substr(start,len));
	
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Add your code here!
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// Add your code here!
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!
}
