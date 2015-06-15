var calcEle = $('#calculator');
var resultEle = calcEle.find('.result')[0];

function updateResult(value){
	resultEle.textContent = value;
}

var calc1 = calculator(updateResult);

calcEle.find('.cbutton').click(function(e){
	var val = e.target.textContent;
	calc1.input(val);
})

var calcEle2 = $('#calculator2');
var resultEle2 = calcEle2.find('.result2')[0];

function updateResult2(value){
	resultEle2.textContent = value;
}

var calc2 = calculator(updateResult2);

calcEle2.find('.cbutton').click(function(e){
	var val = e.target.textContent;
	calc2.input(val);
})

