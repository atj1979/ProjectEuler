// The prime factors of 13195 are 5, 7, 13 and 29.

function isPrime (num, previousPrimes){
	//anything less than 3 is a gimmie
	if (num <= 3){ return true; }
	
	//skip previous prime numbers
	if (previousPrimes !== undefined){
		if (previousPrimes[(previousPrimes.length-1).toString()])
		return true;
	}
	for (var i = 2; i <= Math.sqrt(num); i++){
		if (num % i === 0){
			return false;
		}  
	}
	return true
}

function LargestPrimeFactors(num){
	var end = Math.sqrt(num);
	var primesChecked = {};
	var largestPrime = 0;
	var numi = 1;
	
	for (var i = 2; i < end; i++){ // build a list of all the prime numbers from 0 to sqrt(num)
		if (num % i === 0){ 
			if (isPrime(i, primesChecked)){ // check to see if the number is prime, send along the prime list
				primesChecked[i.toString()]=true; // if the number is prime - add it to the seive
				largestPrime = i > largestPrime ? i : largestPrime; // check to see if the new number is the largest
			}
			numi = num / i;  // calculate the other factor of the input number
			if (isPrime(numi, primesChecked)){ // check to see if the number is prime, send along the prime list
				primesChecked[numi.toString()]=true; // if the number is prime - add it to the seive
				largestPrime = numi > largestPrime ? numi : largestPrime; // check to see if the new number is the largest
			}
		}
	}
	return largestPrime;
}

	
console.log(LargestPrimeFactors(600851475143));


// The largest increase in speed was adding in the ternarys in place of if statements.



