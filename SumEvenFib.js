// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.




function fibEvenSum (maxNum, acc){
	// initialize the acc
	acc = acc || {
		last1:1,
		last2:0,
		total:0,
		swap:0
	};

	//add the last two together
	acc.swap = acc.last1 + acc.last2;
	//move last1 to last2
	acc.last2 = acc.last1;
	//put the total in last1
	acc.last1 = acc.swap;

	//if last1 % 2 then add it to the total
	if (acc.swap % 2 === 0){
		acc.total += acc.swap;
	}
	//return either the next iteration of the function or the final value
	if (acc.swap < maxNum){
		return fibEvenSum(maxNum, acc);
	} else {
		return acc.total;
	}
}

console.log(fibEvenSum(4000000));
