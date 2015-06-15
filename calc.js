var calcEle = $('#calculator');
var resultEle = calcEle.find('.result')[0];

function updateResult(value){
	resultEle.textContent = value;
}

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
	if(updateResult){
		updateResult(currentTotal);
	}
}

function input(val) {
	if(val === "C"){
		currentTotal = 0;
		if(updateResult){
			updateResult(currentTotal);
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

calcEle.find('.cbutton').click(function(e){
	var val = e.target.textContent;
	input(val);
})