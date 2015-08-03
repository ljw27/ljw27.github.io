// 游戏数据部分
var board = new Array();
var score = 0;
var hasConflicted = new Array();

var startx = 0;
var starty = 0;
var endx = 0;
var endy = 0;


$(document).ready(function(){
	prepareForMobile();
	newgame();

});

function prepareForMobile() {

	if(documentWidth > 500) {
		gridContainerWidth = 500;
		cellSpace = 20;
		cellSlideLength = 100;
	}

	$("#grid-container").css('width',gridContainerWidth - 2*cellSpace);
	$("#grid-container").css('height',gridContainerWidth - 2*cellSpace);
	$("#grid-container").css('padding',cellSpace);
	$("#grid-container").css('border-radius',0.02*gridContainerWidth);

	$(".grid-cell").css('width',cellSlideLength);
	$(".grid-cell").css('height',cellSlideLength);
	$(".grid-cell").css('border-radius',0.02*cellSlideLength);

}


function newgame() {
	// 初始化操作棋盘 
	init();

	//并且随机在两个格子里生成2或4
	generateOneNumber();
	generateOneNumber();
}

function init() {
	for(var i=0;i<4;i++) {
		for(var j=0;j<4;j++) {

			var gridCell = $("#grid-cell-" +i+"-"+j);
			gridCell.css('top', getPosTop(i,j));
			gridCell.css('left', getPosLeft(i,j));
		}
	}

	for(var i=0;i<4;i++) {
		board[i] = new Array();
		hasConflicted[i] = new Array();
		for(var j=0;j<4;j++) {
			board[i][j] = 0;
			hasConflicted[i][j] = false;
		}
	}

	updateBoardView();
	score = 0;
	$("#score").text(score);
}

function updateBoardView() {
	$(".number-cell").remove();
	for(var i=0;i<4;i++) {
		for(var j=0;j<4;j++) {
			$("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
			var theNumberCell = $('#number-cell-'+i+'-'+j);

			if(board[i][j] == 0) {
				theNumberCell.css('width','0px');
				theNumberCell.css('height','0px');
				theNumberCell.css('top', getPosTop(i,j) + cellSlideLength/2);
				theNumberCell.css('left', getPosLeft(i,j) + cellSlideLength/2); //放在grid-cell的中心

			}else {//显示位置跟grid-cell一样
				theNumberCell.css('width',cellSlideLength);
				theNumberCell.css('height',cellSlideLength);
				theNumberCell.css('top', getPosTop(i,j));
				theNumberCell.css('left', getPosLeft(i,j)); 
				// 背景色根据数字的不同为不同
				theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
				theNumberCell.css('color',getNumberColor(board[i][j]));
				theNumberCell.text(board[i][j]);
			}
			hasConflicted[i][j] = false;//新的一轮开始，都为false
		}
	}

	$(".number-cell").css('line-height',cellSlideLength + 'px');//设置小方格的行高，文字居中
	$(".number-cell").css('font-size',0.6*cellSlideLength + 'px');//设置小方格的字号
}

function generateOneNumber() {
	if(nospace(board)) {
		return false;
	}

	//随机一个位置
	// var randx = parseInt(Math.floor(Math.random() * 4));
	// var randy = parseInt(Math.floor(Math.random() * 4));

	// while(true) {
	// 	if(board[randx][randy] == 0) {
	// 		break;
	// 	}
	// 	randx = parseInt(Math.floor(Math.random() * 4));
	// 	randy = parseInt(Math.floor(Math.random() * 4));
	// }

	var index0 = new Array();
	for(var i = 0; i < 4; i++){
		for( var j = 0; j < 4; j++) {
			if(board[i][j] == 0) {
				index0.push([i,j]);
			}
		}
	}

	var len = index0.length;
	var randnum = parseInt(Math.floor(Math.random() * len));
	var randx = index0[randnum][0];
	var randy = index0[randnum][1];


	//随机一个数字
	var randNumber = Math.random() < 0.5 ? 2 : 4;

	//在随机的位置上显示随机数字
	board[randx][randy] = randNumber;
	showNumberWithAnimation(randx,randy,randNumber);

	return true;
}

$(document).keydown(function(event) {

	//页面滚动条滑动
	// event.preventDefault();

	switch(event.keyCode) {
		case 37://left
		event.preventDefault();
		if(moveLeft()) {
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
		break;
		case 38://up
		event.preventDefault();
		if(moveUp()) {
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
		break;
		case 39://right
		event.preventDefault();
		if(moveRight()) {
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
		break;
		case 40://down
		event.preventDefault();
		if(moveDown()) {
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
		break;
		default://其他
		break;
	}
});


//设备触摸的捕捉
document.addEventListener('touchstart',function(event) {
	startx = event.touches[0].pageX;
	starty = event.touches[0].pageY;
});

document.addEventListener('touchmove',function(event) {
	event.preventDefault();
});

document.addEventListener('touchend',function(event) {
	endx = event.changedTouches[0].pageX;
	endy = event.changedTouches[0].pageY;

	var deltax = endx - startx;
	var deltay = endy - starty;
	//点击操作时，不触发游戏滑动
	if(Math.abs(deltax) < 0.2*documentWidth && Math.abs(deltay) < 0.2*documentWidth) {
		return;
	}
	//X方向
	if(Math.abs(deltax) >= Math.abs(deltay)) {
		if(deltax > 0) {
			//move right
			if(moveRight()) {
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
			}
		}else {
			//move left
			if(moveLeft()) {
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
			}
		}	
	}
	//Y方向
	else {
		if(deltay > 0) {
			//move dowm
			if(moveDown()) {
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
			}
		}else{
			//move up
			if(moveUp()) {
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
			}
		}
	}
});




function isgameover() {
	if( nospace(board) && nomove(board)) {
		gameover();
	}
}

function gameover() {
	alert("哼，再来一局！");
}

function moveLeft() {
	if(!canMoveLeft(board)) {
		return false;
	}

	for(var i=0;i<4;i++)
		for(var j=1;j<4;j++) {
			if(board[i][j] != 0) {

				for(var k=0;k<j;k++) {
					if(board[i][k] == 0 && noBlockHorizontal(i,k,j,board)) {
						showMoveAnimation(i,j,i,k);
						board[i][k] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if(board[i][k] == board[i][j] && noBlockHorizontal(i,k,j,board) && !hasConflicted[i][k]) {
						//数字相加
						showMoveAnimation(i,j,i,k);
						board[i][k] += board[i][j];
						board[i][j] = 0;
						//add score
						score += board[i][k];
						updataScore(score);

						hasConflicted[i][k] = true;
						continue;
					}
				}
			}
		}
	setTimeout("updateBoardView()",200);
	return true;
}

function moveRight() {
	if(!canMoveRight(board)) {
		return false;
	}

	for(var i=0;i<4;i++)
		for(var j=2;j>=0;j--) {
			if(board[i][j] != 0) {
				for(var k=3;k>j;k--) {

					if(board[i][k] == 0 && noBlockHorizontal(i,k,j,board)) {
						showMoveAnimation(i,j,i,k);
						board[i][k] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if (board[i][k] == board[i][j] && noBlockHorizontal(i,k,j,board) && !hasConflicted[i][k]) {
						showMoveAnimation(i,j,i,k);
						board[i][k] += board[i][j];
						board[i][j] = 0;
						score += board[i][k];
						updataScore(score);

						hasConflicted[i][k] = true;
						continue;
					}
				}
			}
		}
	setTimeout("updateBoardView()",200);
	return true;
}

function moveUp() {
	if(!canMoveUp(board)){
		return false;
	}

	for( var j = 0; j < 4; j++)
		for( var i = 1; i < 4; i++)
			if(board[i][j] != 0) {
				for( var k = 0; k < i; k++) {

					if( board[k][j] == 0 && noBlockVertical(j,k,i,board)) {
						showMoveAnimation(i,j,k,j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if(board[k][j] == board[i][j] && noBlockVertical(j,k,i,board) && !hasConflicted[k][j]) {
						showMoveAnimation(i,j,k,j);
						board[k][j] += board[i][j];
						board[i][j] = 0;
						score += board[i][k];
						updataScore(score);

						hasConflicted[k][j] = true;
						continue;
					}
				}
			}

	setTimeout("updateBoardView()",200);
	return true;
}

function moveDown() {
	if( !canMoveDown(board) ){
		return false;
	}

	for( var j = 0; j < 4; j++)
		for( var i = 2; i >= 0; i--)
			if(board[i][j] != 0) {
				for(var k = 3; k > i; k--) {
					if(board[k][j] == 0 && noBlockVertical(j,k,i,board)) {
						showMoveAnimation(i,j,k,j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if(board[k][j] == board[i][j] && noBlockVertical(j,k,i,board) && !hasConflicted[k][j]) {
						showMoveAnimation(i,j,k,j);
						board[k][j] += board[i][j];
						board[i][j] = 0;
						score += board[i][k];
						updataScore(score);

						hasConflicted[k][j] = true;
						continue;
					}
				}
			}

	setTimeout("updateBoardView()",200);
	return true;
}