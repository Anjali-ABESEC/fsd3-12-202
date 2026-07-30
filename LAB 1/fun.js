//write a function to take any digit (0-9)and return it in word
//0-zero , 5- five
 const toWords = (digit)=>{
    const words = ["zero" , "one", "two" , "three", "four" , "five", "six", "seven" , "eight", "nine"];
    return words[digit];
 }

 console.log(toWords(5));
 console.log(toWords(0));
 console.log(toWords(9));

 