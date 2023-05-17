//import { capitalize } from "../challenges/exercise001";



 function capitalize(word) {
 	if (word === undefined) throw new Error('word is required');
	
    const trimSpaces = word.trim();
 	const capitalised = trimSpaces.charAt(0).toUpperCase() + trimSpaces.slice(1)

 	return(capitalised)

 	// NTS - Can add checks to see if any leading spaces, first char is a number.
		
 }


console.log(capitalize("keith is a genius"));

console.log(capitalize("brian is great"));

console.log(capitalize(" we're out of time"));

console.log(capitalize(" i need this to work"));