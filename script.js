function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here let roman = '';

    for (let i = 0; i < 13; i++) {
        // Repeat while the current number is greater than or equal to the value of obj[i]
        while (num >= obj[i][1]) {
            // Append the symbol to the roman numeral
            roman += obj[i][0];
            // Subtract the value from the number
            num -= obj[i][1];
        }
    }
    return roman;
	

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
