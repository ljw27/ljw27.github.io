function showNumberWithAnimation(i,j,randNumber) {
	var numberCell = $("#number-cell-" + i + "-" + j);
	numberCell.css('background-color',getNumberBackgroundColor(randNumber));
	numberCell.css('color',getNumberColor(randNumber));
	switch(randNumber) {
		case 2:numberCell.text('小白');break;
		case 4:numberCell.text('实习生');break;
	}

	numberCell.animate({
		width:cellSlideLength,
		height:cellSlideLength,
		top:getPosTop(i,j),
		left:getPosLeft(i,j)
	},100);
}


function showMoveAnimation(fromx,fromy,tox,toy) {
	var numberCell = $("#number-cell-" + fromx +"-"+fromy);
	numberCell.animate({
		top:getPosTop(tox,toy),
		left:getPosLeft(tox,toy)
	},200);
}

function updataScore(score) {
	$("#score").text(score);
}




