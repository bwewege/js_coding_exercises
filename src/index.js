//import { capitalize } from "../challenges/exercise001";



function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	// Add your code here!
		
	const initials = firstName.trim().charAt(0).toUpperCase() + "." + lastName.trim().charAt(0).toUpperCase()
	
	return(initials)

	// NTS - Can add checks for leading and trailing spaces, numbers, and also apostraphes like O'Brien

}


console.log(generateInitials("keith", "wewege"));
console.log(generateInitials("Brian", "wewege"));
console.log(generateInitials("julia", "Wewege"));
console.log(generateInitials("nathan john", "wewege"));
console.log(generateInitials(" julia", " wewege"));
console.log(generateInitials("123bbgun", "wewege"));
console.log(generateInitials("marGie", "wewege"));
console.log(generateInitials("Paddy", "O'Brien"));


