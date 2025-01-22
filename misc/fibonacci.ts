export { fib_Recursive, fib_While };

function fib_While(num: number): number {
	let first = 0;
	let second = 1;
	let iteration = 0;
	let summa = 0;
	while(iteration < num) {
		summa = first + second;
		second = first;
		first = summa;
		iteration++;
	}
	return summa;
}

function fib_Recursive(num: number): number {
	if(num === 0) {
		return 0; 
	}
	if(num <= 2) {
		return 1; 
	}
	
	return fib_Recursive(num - 1) + fib_Recursive(num - 2);
}