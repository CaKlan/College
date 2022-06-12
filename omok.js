var omokBoard = document.querySelector('.omok_board');
var boardWidth = omokBoard.offsetWidth;
var boardHeight = omokBoard.offsetHeight;
var omokCanvas = document.querySelector('.omok_canvas');

var point = new Array(15);
for(let i=0;i<15;i++){
    point[i] = new Array(15);
    for(let j=0;j<15;j++){
        point[i][j] = [(boardWidth - 60.0) * i/14.0 + 30, (boardHeight - 60) * j/14 + 30];
        
    }
}



function drawCirle(x, y, radius, color){
    
    var ctx = omokCanvas.getContext("2d");
    ctx.globalCompositeOperation='destination-over';
    omokCanvas.width = boardWidth;
    omokCanvas.height = boardHeight;
    ctx.fillStyle = color;
    if(color == 'black'){
        ctx.fillStyle = "FFFFFF";
    }else if(color == 'white')
    {
        ctx.fillStyle = "000000";
    }else{
        ctx.fillStyle = "FF0000";
    }
    ctx.beginPath();
    ctx.arc(point[x][0][0], point[0][y][1], radius, 0, 2 * Math.PI); //x, y, rad, ?, border 2 *pi == circle
    ctx.stroke();
    ctx.fill();
    
}
console.log(boardWidth);
console.log(boardHeight);
drawCirle(0, 0, 25, 'white'); // white, black, or error(red)
console.log(point[0][0].x, point[0][0].y);


function getMousePosition(){
    var cursorX;
    var cursorY;
    var putX;
    var putY;
    document.onmousedown = function (e) {
        cursorX = e.pageX;
        cursorY = e.pageY;
        putX = new Array(15);
        putY = new Array(15);
        for(let i=0; i <15; i++){
            putX[i] = Math.abs(point[i][0][0] - cursorX + 215);
            putY[i] = Math.abs(point[0][i][1] - cursorY + 80);
        }
        console.log(putX.indexOf(Math.min(...putX)), putY.indexOf(Math.min(...putY)));
        //drawCircle(putX, putY, 25, 'white');
        if(e.which == 1)
        {
            drawCirle(putX.indexOf(Math.min(...putX)), putY.indexOf(Math.min(...putY)), 25, 'black')
        }else if(e.which == 3){
            drawCirle(putX.indexOf(Math.min(...putX)), putY.indexOf(Math.min(...putY)), 25, 'white')
        }
        
    }
    
}

getMousePosition();