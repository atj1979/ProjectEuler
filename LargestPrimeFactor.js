// The prime factors of 13195 are 5, 7, 13 and 29.

//prime number are numbers that are tested between starting at 2 thru num* 0.25 or 0.5 thru 0.25


function isPrime (num){
	var start = Math.ceil(num/2);
	var end = Math.floor(num * .25);
	if (num <= 3){ return true; }
	
	for (var i = start; i > end; i--){
		// console.log(i + " | " + start + " | " + end);
		if (num % i === 0){
			return false;
		}  
	}
	return true
}




