describe("test",  () => {
	test("test", () => {

		function sum(num1?: number): any {
			if(num1 === undefined) {
				return 0;				
			}
			const args = [num1];
			return function inner(num2?: number) {
				if(num2 === undefined) {
					return args.reduce((accum, current) => {
						return accum + current;
					}, 0);				
				}
				args.push(num2);
				return inner;
			};

		}


		console.log(sum()); //0
		console.log(sum(1)()); //1
		console.log(sum(2)(3)()); //5
		console.log(sum(12)(13)(11)()); //36
	});
	
});