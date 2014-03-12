var packageNumbers = [
27,
2,
7,
5,
2,
12,
16,
13,
1,
2,
1,
1,
20,
1,
7,
5,
5,
2,
1,
6,
14,
7,
7,
19,
14,
4,
1,
5,
14,
5,
2,
23,
1,
9,
9,
8,
1,
19,
19,
2,
28,
5,
1,
1,
15,
6,
1,
1,
3,
1,
6,
8,
1,
14,
2,
1,
7,
2,
8,
14,
8,
2,
20,
6,
2,
5,
6,
2,
1,
14,
10,
2,
1,
2,
13,
6,
26,
12,
15,
2,
1,
6,
2,
2,
5,
1,
1,
4,
4,
1,
1,
1,
2,
1,
1,
1,
1,
1,
1];



/*ctrl + D -->next
ctrl + G --> all
shift + ctrl + click on one --> select it*/



function mean (numbers) {
	var sum = 0;

	// sum = sum + numbers[0];
	// sum = sum + numbers[1];
	// sum = sum + numbers[2];
	// sum = sum + numbers[3];
	// sum = sum + numbers[4];

	for (var i = 0; i < numbers.length; i = i + 1) {
		sum = sum + numbers[i];
	}
	console.log('sum', sum);

	console.log('average: ', sum / numbers.length);

}

mean(packageNumbers);

/*total packages 636
mean 6.42
median 5
mode
*/
packageNumbers.sort(function (a,b) {return a-b;});
console.log(packageNumbers);
var middleIndex = Math.ceil(packageNumbers.length/2);
console.log(middleIndex);
var medianValue = packageNumbers[middleIndex];
console.log(medianValue);

function mode(array)
{
    if(array.length == 0)
    	return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
    	var el = array[i];
    	if(modeMap[el] == null)
    		modeMap[el] = 1;
    	else
    		modeMap[el]++;	
    	if(modeMap[el] > maxCount)
    	{
    		maxEl = el;
    		maxCount = modeMap[el];
    	}
    }
    return maxEl;
}
console.log(mode(packageNumbers));