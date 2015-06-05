// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


function isPalindromic (number){
	var numberString = number + "";
	for (var i = 0; i < numberString.length; i++){
		//if the two digits don't match , and we are not at the center it's not a palindromic
		if (numberString[i] !== numberString[numberString.length-1-i] && i <= numberString.length-1-i){
			return false
		} else if ( numberString.length-1-i-i < -1 ){ 
		// if we've reached the center and haven't returned yet, it's palindromic
			return true
		}
	}
}

function findLargestPalinProduct (numOfDigits){
	//get two of the biggest #
	var bigNum = ""; 
	var biggestPalindromicProduct = 0;
	var k;
	//make a number string, then a number out of the number of digits we have as input
	for ( var i = 0; i < numOfDigits; i++ ){
		bigNum += 9;
	}
	bigNum = parseInt(bigNum);
	//Calculate everything ha, ha, ha, ha!!!!!!
	for (var i = bigNum; i >= 0; i--) {
		for (var j = bigNum; j >= 0; j--) {
			k= i*j;
			biggestPalindromicProduct = isPalindromic(k) && k > biggestPalindromicProduct ? k : biggestPalindromicProduct;
		}	
	}
	// return the answer
	return biggestPalindromicProduct;
}
console.log(findLargestPalinProduct(4));

