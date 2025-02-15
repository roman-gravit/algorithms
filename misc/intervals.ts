export { intersection };

function intersection(user1: number[][], user2: number[][]): number[][] {
	const result: number[][] = [];
	user1.forEach(inteval1 => {
		user2.forEach(inteval2 => {
			const inter = _checkIntersection(inteval1, inteval2);
			if(inter){
				result.push(inter);
			}
		});
	});
	
	return result;
}

function _checkIntersection(time1: number[], 
							time2: number[]
							): number[] | undefined
{
	const start1 = time1[0];
	const start2 = time2[0];
	const finish1 = time1[1];
	const finish2 = time2[1];

	if( isValueInsideInterval(start1, time2) 
		|| isValueInsideInterval(start2, time1)
	    || isValueInsideInterval(finish1, time2)) 
	{
		return [Math.max(start1, start2), Math.min(finish1, finish2)];
	}
}

function isValueInsideInterval(value: number, 
							   interval: number[]
							   ): boolean 
{
	return value > interval[0] && value < interval[1];
}