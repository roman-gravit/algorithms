export { FindNonRepeatingNumberInArrayBitwise, CountSetBitsBitwise, FindComplementBitwise, IsNumberPowerOfTwo, 
	IsNumberPowerOfTwoBitwise, SwapNumbersXOR, RangeBitwiseAND };


// XOR => ^            :  Sets each bit to 1 if ONLY ONE of TWO bits is 1
// AND => &            :  Sets each bit to 1 if BOTH bits are 1
// RIGHT SHIFT => >>   :  Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// NOT => ~            :  Inverts all the bits


/**
 * Bitwise AND of Numbers Range
 * 
 * This algorithm leverages the concept of finding the common prefix in the binary representation of the 
 * start and end numbers of the range.
 * Focusing on the sahred bits betweeen the start and end numbers, rather than iterating through all numbers.
 * 
 * Ex: 5,7 => 4         >> 1       >> 1+1    << 2
 *   1  0  1  = 5      0  1  0    0  0  1    1 0 0 
 *   1  1  0  = 6    
 *   1  1  1  = 7      0  1  1    0  0  1
 *   &&&&&&
 *   -------
 *   1  0  0  = 4 
 * 
 *  Common Prefix
 * 
 * Space: O(1)   Space: O(1)
 */
function RangeBitwiseAND(first: number, second: number): number {
	let shift = 0;

	while(first < second) {
		first >>= 1;
		second >>= 1;
		shift++;
	}
	return  first << shift;
}


/**
 * Swap Numbers using XOR
 *  
 * A number XOR itself equals 0
 * A number XOR 0 = the number itself
 * XOR is commutatitve and associative
 * 
 * Ex:  a =5 b =7 =>  a =7 b =5
 */
function SwapNumbersXOR(a: number, b: number): Array<number> {
	a = a ^ b;
	b = a ^ b;
	a = a ^ b;
	return [a, b];
}



/**
 * Check if a Number is a Power of Two
 * 
 * Only for positive numbers
 * 
 *  Ex:  1 => true  (1 is 2^0)
 *       16 => true  (16 is 2^4)
 *  Time: O(1)  Space O(1)
 */
function IsNumberPowerOfTwo(num: number): boolean {
	if(num<=0) {
		return false;
	}

	return (num & (num-1))===0;
}

// Time: O(log N)  Space O(1)
function IsNumberPowerOfTwoBitwise(num: number): boolean {
	if(num<=0) {
		return false;
	}

	while(num!==1) {
		if(num % 2 !==0) {
			return false;
		}
		num/=2;
	}

	return true;
}


/**
 * Find Complement
 *  Finds a bitwise complement of a number
 * Ex: 5 => 2   (101 complement is  010)
 *     7 => 0   (111 complement is  000)
 *     8 => 7   (1000 complement is 0111)
 * 
 * 	  X	   	x NOT     (Inverts all the bits)
 *  --------------------------
 *    0     =    1  
 *    1     =    0
 */
function FindComplementBitwise(n: number ): number {

	/* Variant 2: 
	    const binary = n.toString(2)
        let complement = "";
		for (const char of binary) {
			complement+= char === "0" ? "1" : "0"
		}
		return parseInt(complement, 2);
	*/

	/*
		const bits_count = Math.floor(Math.log2(n)) + 1;
		const mask = (1 << bits_count) -1; 
		return (~n) & mask;
	*/

	const binary = n.toString(2)
	let complement = "";
	for (const char of binary) {
		complement+= char === "0" ? "1" : "0"
	}
	return parseInt(complement, 2);
	
}


/**
 * Count Set bits (Population Count)
 * 
 * Implement a function that counts the number of set bits(1's)
 * in the binary integer.
 * 
 * Код Хэ́мминга — самоконтролирующийся и самокорректирующийся код. Построен применительно к двоичной системе счисления.
 * Позволяет исправлять одиночную ошибку (ошибка в одном бите слова) и находить двойную
 * 
 * Ex: 5 => 2 (101)
 *     7 => 3 (111)
 *     10 => 2 (1010)
 * 
 * (Sets each bit to 1 if BOTH bits are 1)             RIGHT SHIFT
 * 	  X	     Y		x AND y                       X	     Y		x >> y 
 *  --------------------------                  --------------------------
 *    0      0    =    0                         101(5)    1     010(2)    
 *    0      1    =    0                         111(7)    1     011(3)
 *    1      0    =    0                         100(4)    1     010(3)
 *    1      1    =    1
 * 
 *   Space: O(n)
 */
function CountSetBitsBitwise(n: number): number {

	// Variant 1:
	// Convert to binary representation 
	// toString(2).split("").filter(x=>x==="1").length
	// 

	let count = 0;
	while(n) {
		count= count + (n & 1);
		n = n >> 1;
	}
	return count;
}


// AND => &   OR => |  NOT => ~    XOR => ^   SHIFT => << >>  >>>

/**
 * 
 * Find Non-repeating Elements with XOR
 * 
 * Implement a function that finds the unique, non-repeating element in an array
 * where every other element repeats. It utilizes the XOR operation to cancel
 * out the repeating numbers, leaving only the unique number
 * 
 * NOTE: This algorithm assumes that all numbers ecxept one are repeated.
 * 
 * Ex: [1, 2, 1, 2, 3]  => 3
 *     [4, 5, 5, 4, 6]  => 6
 * 
 * 
 * 	  X	     Y		x XOR y    (Sets each bit to 1 if ONLY ONE of TWO bits is 1)
 *  --------------------------
 *    0      0    =    0  
 *    0      1    =    1 
 *    1      0    =    1
 *    1      1    =    0
 */  
function FindNonRepeatingNumberInArrayBitwise(arr: Array<number>): number {
	let result = 0;
	for(const num of arr) {
		// XOR will erase the same number to 0.
		result ^=num;
	}
	return result;
}
