// 当前设备屏幕的大小
documentWidth = window.screen.availWidth * 0.8;

// 游戏棋盘的大小(92%设备宽度)
gridContainerWidth = 0.92 * documentWidth;
// 小方块大小
cellSlideLength = 0.18 * documentWidth;
//小方块间间距
cellSpace = 0.04 * documentWidth;

// 确定小方格的位置（top，left）
function getPosTop(i,j) {
	return cellSpace + i*(cellSpace + cellSlideLength);
}

function getPosLeft(i,j) {
	return cellSpace + j*(cellSpace + cellSlideLength);
}

// 根据方格数字的不同显示不同的样式
function getNumberBackgroundColor(number) {
	switch(number) {
		case 2: return "#eee4da";break;
		case 4: return "#ede0c8";break;
		case 8: return "#f2b179";break;
		case 16: return "#f59563";break;
		case 32: return "#f67e5f";break;
		case 64: return "#f65e3b";break;
		case 128: return "#edcf72";break;
		case 256: return "#edcc61";break;
		case 512: return "#9c0";break;
		case 1024: return "#33b5e5";break;
		case 2048: return "#09c";break;
		case 4096: return "#a6e";break;
		case 8192: return "#93e";break;
	}
	return "black";
}

function getNumberColor(number) {
	if(number <= 4) {
		return "#776e65";
	}
	return "white";
}

//检查还有没有空间生成新的数字
function nospace (board) {
	for(var i=0;i<4;i++) {
		for(var j=0;j<4;j++) {
			if(board[i][j] == 0) {
				return false;
			}
		}
	}
	return true;
}


function canMoveLeft(board) {
	for(var i=0;i<4;i++) {
		for(var j=1;j<4;j++) {
			if(board[i][j] != 0)
				if(board[i][j-1] == 0 || board[i][j-1] == board[i][j])
					return true;
		}
	}

	return false;
}

function canMoveRight(board) {
	for(var i=0;i<4;i++)
		for(var j=2;j>=0;j--)
			if(board[i][j] != 0)
				if(board[i][j+1] == 0 || board[i][j+1] == board[i][j])
					return true;

	return false;
}

function canMoveUp(board) {
	for( var j = 0; j < 4; j++) 
		for( var i = 1; i < 4; i++)
			if( board[i][j] != 0)
				if( board[i-1][j] == 0 || board[i-1][j] == board[i][j])
					return true;

	return false;
}

function canMoveDown(board) {
	for( var j = 0; j < 4; j++)
		for( var i = 2; i >= 0; i--)
			if( board[i][j] != 0)
				if( board[i+1][j] == 0 || board[i][j] == board[i+1][j])
					return true;

	return false;
}

function noBlockHorizontal(row,col1,col2,board) {
	for(var i = col1+1;i<col2;i++) {
		if(board[row][i] != 0)
			return false; 
	}
	return true;
}

function noBlockVertical(col,row1,row2,board) {
	for(var i =row1+1;i<row2;i++)
		if(board[i][col] != 0)
			return false;
	return true;
}


function nomove(board) {
	if(canMoveDown(board) || canMoveLeft(board) || canMoveRight(board) || canMoveUp(board)) {
		return false;
	}

	return true;
}
