

function getMiddleCharacter(str) {
    if (str === undefined) throw new Error('str is required');
    //Add your code here!

   const strRemain = str.length % 2

   if (strRemain === 0) {
        const strMiddle1 = (str.length / 2) - 1; 
        const strMiddle2 = strMiddle1 + 1;
        return(str.charAt(strMiddle1) + str.charAt(strMiddle2));
   } else {
        const strMiddle = str.length / 2;
        return(str.charAt(strMiddle))
           
   }
 
}

function getMiddleCharacter2(str) {
    if (str === undefined) throw new Error('str is required');
    //Add your code here!

   const strRemain = str.length % 2;
   const start = Math.ceil(str.length / 2) - 1;
   const len = strRemain === 0 ? 2 : 1;

   console.log(str + ":" + str.length + " " + start + " " + len);
   return(str.substr(start,len));
}


 //console.log(getMiddleCharacter("bears!!!!"));
 //console.log(getMiddleCharacter("help!!"));
 console.log(getMiddleCharacter2("bears!!!!"));
 console.log(getMiddleCharacter2("help!!"));


 const a = parseFloat("1.2");
 console.log(a);


