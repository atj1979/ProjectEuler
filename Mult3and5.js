// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function mult3 (num){
	// find if num is multiple of 3 return true or false
	return num % 3 === 0;
}
function mult5 (num){
	// find if num is multiple of 5 return true or false
	return num % 5 === 0;
}
function sumMults (maxNum){
	//find the sum of all the multiples
	var mults = [];
	for (var i = 0; i < maxNum; i++){
		if ( mult3(i) || mult5(i) ){
			mults.push(i);
		}
	}
	return mults.reduce(function (acc, val) { return acc+val; },0);
}

console.log(sumMults(1000));
