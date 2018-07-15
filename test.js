
function calAdd(a, b) {
	return a+b;
}

function rec(n, myArr) {
	var finalRes = [];

	var recReal = function(n, myArr, res=[]) {
		var tmpRes = 0;

		if(res.length == 0)
			tmpRes = 0;
		else if(res.length == 1)
			tmpRes = res[0];
		else 
			tmpRes = res.reduce(calAdd);

		// cmp
		if(tmpRes == n) {
			finalRes.push(res);
			return;
		}

		// cmp
		if(tmpRes > n)
			return;
	
		for(var i=0; i<myArr.length; i++) {
			var copyRes = res.slice();
			var item = myArr[i];

			// always new copy 
			copyRes = copyRes.concat([item]);	

			recReal(n, myArr, copyRes);
		}
	}

	recReal(n, myArr);

	return finalRes;

}


function myrec(n, myArr) {
	return rec(n, myArr);
}

var n = 10;
var myArr = [2, 3, 5, 6];
var out = myrec(n, myArr);
console.log(out);
