
main();

function main() {
	var len = 12;
	var arr = new Array(len + 1).fill(0);
	var coinArr = [1, 2, 5];

	arr[0] = 1;

	for(var i=0; i<coinArr.length; i++) {
		var coin = coinArr[i];
		for(var j=1; j<=len; j++) {
			var vTotal = j;
			if(vTotal >= coin) {
				arr[j] = arr[j] + arr[vTotal - coin];
			}	
		} // end loop
	} // end loop

	var res = arr[arr.length - 1];
	console.log(res);
}

