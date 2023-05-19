
const n = 7// fizz
//const n = 5; // buzz
//const n = 4; // 4
//const n = 15; //fizzbuzz

const three = n % 3;
const five = n % 5;

if (three === 0 && five === 0) {
    const message = "fizzbuzz";
    return(message);

} else if (three === 0) {
    const message = "fizz";
    return(message);
    
} else if (five === 0) {
    const message = "buzz";
    return(message);

} else {
    return(n);

};


