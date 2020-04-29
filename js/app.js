//draw the board with the parameters :
/**
 amountMon;
 amountTime;
 amountBalls;
 point5;
 point15;
 point25;
 */
//fonction for music
/*
$(document).ready(function () {
    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        
        src.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
            this.sound.play();
        }
        this.stop = function(){
            this.sound.pause();
        }    
    }
});*/

function Pause() {
    if (paused) {
        bgSound.play();
		paused = false;
		document.getElementById("soundImg").src="css/soundButton.png";
    }
    else {
        bgSound.pause();
		paused = true;
		document.getElementById("soundImg").src="css/muteSoundButton.png";
    }
}

function initParams(){
	context= canvas.getContext("2d");
    shape = new Object();
	board = new Array();
	score = 0;
	pac_color = "yellow";
    cnt = 120;
	food_remain = amountBalls;
	pacman_remain = 1;
	start_time = new Date();
	numOf5PointBall = Math.floor(food_remain.valueAsNumber*0.6);
	numOf15PointBall = Math.floor(food_remain.valueAsNumber*0.3);
	numOf25PointBall = Math.floor(food_remain.valueAsNumber*0.1);
	if(  food_remain.valueAsNumber-(numOf5PointBall+numOf25PointBall+numOf15PointBall) ==1 ){
		numOf5PointBall++;
	}
	if(  food_remain.valueAsNumber-(numOf5PointBall+numOf25PointBall+numOf15PointBall) ==2 ){
		numOf5PointBall++;
		numOf15PointBall++;
	}
	if(  food_remain.valueAsNumber-(numOf5PointBall+numOf25PointBall+numOf15PointBall) ==3 ){
		numOf5PointBall++;
		numOf15PointBall++;
		numOf25PointBall++;
	}
	disqualifications = 5;//num of disqualifications to fail
	if(paused)
		Pause();
}

//TODO: add one medicine (trufa)
function Start() {
	initParams();
	for (var i = 0; i < 12; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 10; j++) {
			if (
				(i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2) ||
				(i == 10 && j == 6) ||
				(i == 10 && j == 7)
			) {
				board[i][j] = 4;
			} 
			else {

				var randomNum = Math.random();
				if(randomNum <= (1.0 * food_remain.valueAsNumber) / cnt){
					addRanBalls(i,j);
				} else if (randomNum < (1.0 * (pacman_remain + food_remain.valueAsNumber)) / cnt) {
					shape.i = i;
					shape.j = j;
					pacman_remain--;
					board[i][j] = 2;
				} else {
					board[i][j] = 0;
				}
				cnt--;
			}
		}
	}
	while (numOf5PointBall > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 5;
		numOf5PointBall--;
		food_remain.valueAsNumber--;
	}

	while (numOf15PointBall > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 6;
		numOf15PointBall--;
		food_remain.valueAsNumber--;
	}

	while (numOf25PointBall > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 7;
		numOf25PointBall--;
		food_remain.valueAsNumber--;
	}

	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.which] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.which] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 100);
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 11 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 11 + 1);
		j = Math.floor(Math.random() * 9 + 1);
	}
	return [i, j];
}

//update arrows from settings (from init)
//update direction of packman
function GetKeyPressed() {
	if (keysDown[moveUp]) {
		return 1;
	}
	if (keysDown[moveDown]) {
		return 2;
	}
	if (keysDown[moveLeft]) {
		return 3;
	}
	if (keysDown[moveRight]) {
		return 4;
	}
}


function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 50 + 30;
			center.y = j * 50 + 30;
			if (board[i][j] == 2) {
				context.beginPath();
				context.arc(center.x, center.y, 20, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 10, 3, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 5) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "red"; //color
				context.fill();

			} else if (board[i][j] == 6) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "blue"; //color
				context.fill();
			} else if (board[i][j] == 7) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "white"; //color
				context.fill();


			} else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 50, 50);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
}

function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 11 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 1) {
		score++;
	}
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	//faild from disqualifications because of the monster
	if(disqualifications <= 0){
		window.clearInterval(interval);
		window.alert("Loser!");
	}
	//faild as the time is over
	if(amountTime <= time_elapsed){
		if (score >= 100 ) {
			window.clearInterval(interval);
			window.alert("Winner!!!");
		}
		else{
			window.clearInterval(interval);
			window.alert("You are better than "+score+" points!");
		}
	}
	 else {
		Draw();
	}
}


function addRanBalls(i ,j){
		let add= false;
		while(!add){
		let randomColor= Math.floor(Math.random() * 3);//0, 1, 2
			if( randomColor==0 &&numOf5PointBall>0 ) {
				board[i][j]=5;
				numOf5PointBall--;
				food_remain.valueAsNumber--;
				add=true;
			}
			else if( randomColor==1 &&numOf15PointBall>0 ){
				board[i][j]=6;
				numOf15PointBall--;
				food_remain.valueAsNumber--;
				add=true;
			}
			
			else if( randomColor==2  && numOf25PointBall>0){
				board[i][j]=7;
				numOf25PointBall--;
				food_remain.valueAsNumber--;
				add=true;
			}
	}
	
}

