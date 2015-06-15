var calculator = (function () {	
	var innerFactory = function(onResultUpdated){
		var innerCalc = {};	
		var currentTotal = 0;
		var lastVal = 0;
		var nextOp;

		function add(val){
			currentTotal = currentTotal + val;
		}
		function minus(val) {
			currentTotal = currentTotal - val;
		}
		function multiply(val){
			currentTotal = currentTotal * val;
		}
		function divide(val){
			if(val != 0){
				currentTotal = currentTotal / val;
			}
		}

		function handleNumber(val){
			val = parseInt(val);
			lastVal = val;
			if(nextOp){
				nextOp(val);
			} else {
				currentTotal = val;
			}	
			if(onResultUpdated){
				onResultUpdated(currentTotal);
			}
		}

		innerCalc.input = function(val) {
			if(val === "C"){
				currentTotal = 0;
				if(onResultUpdated){
					onResultUpdated(currentTotal);
				}
			} else if(val === "=" && nextOp) {
				handleNumber(lastVal);
			} else if(val === "+"){
				nextOp = add;
			} else if(val === "-") {
				nextOp = minus;
			} else if(val === "*") {
				nextOp = multiply;
			} else if(val === "/") {
				nextOp = divide;
			} else {
				handleNumber(val);
			}
		}

		return innerCalc;
	}
	return innerFactory;
}());