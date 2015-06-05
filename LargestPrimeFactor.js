// The prime factors of 13195 are 5, 7, 13 and 29.

function isPrime (num, previousPrimes){
	var end = Math.sqrt(num);
	if (num <= 3){ return true; } //anything less than 3 is a gimmie
	if (previousPrimes !== undefined){ 	
		if (previousPrimes[""+(previousPrimes.length-1)]){ return true; }
	} //skip previous prime numbers
	for (var i = 2; i <= end; i++){
		if (num % i === 0){ return false;} 
	}
	return true;
}

function LargestPrimeFactors(num){
	var a = new Date();
	var end = Math.sqrt(num);
	var primesChecked = {"2":true};
	var largestPrime = 0;
	var numi = 1;
	for (var i = 3; i < end; i+=2){ // build a list of all the prime numbers from 0 to sqrt(num)
		if (num % i === 0){ 
			if (isPrime(i, primesChecked)){ // check to see if the number is prime, send along the prime list
				primesChecked[""+i]=true; // if the number is prime - add it to the seive
				largestPrime = i > largestPrime ? i : largestPrime; // check to see if the new number is the largest
			}
			numi = num / i;  // calculate the other factor of the input number
			if (isPrime(numi, primesChecked)){ // check to see if the number is prime, send along the prime list
				primesChecked[""+numi]=true; // if the number is prime - add it to the seive
				largestPrime = numi > largestPrime ? numi : largestPrime; // check to see if the new number is the largest
	} } }
	var b = new Date();
	console.log( b-a);
	return largestPrime;
}

console.log(LargestPrimeFactors(23423523522342232));


// The largest increase in speed was adding in the ternarys in place of if statements.
// Placing the simple if statement on a single line can also yield slight improvments

// Changing num to string from .toString() to ""+num does not yield faster results however JSperf tests disagree
// Moving var declaration such that vars are only declared once did not yield much faster results, but did make this hard to read



