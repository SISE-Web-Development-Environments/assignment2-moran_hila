var monstersPlaces=[];
var isUp=false;
var isDown=false;
var isLeft=true;
var isRight=false;
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
	isTheGameEnd=false;
	context= canvas.getContext("2d");
    shape = new Object();
	board = new Array();
	score = 0;

	pac_color = "yellow";
	cnt = 120;
	amountBalls.value=document.getElementById("showAmountBalls").innerHTML;
	amountMon.value=document.getElementById("showAmountMon").innerText;
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
	maxScore=numOf5PointBall*5+numOf15PointBall*15+numOf25PointBall*25;
	disqualifications = 5;//num of disqualifications to fail
	if(paused)
		Pause();
}

//TODO: add one medicine (trufa)
function Start() {
	initParams();
	for (var i = 0; i < 12; i++) {
		board[i] = new Array();
	}

	for(var i = 0; i < amountMon.valueAsNumber ; i++ ){
		if(i===0){
			var monsterPlace = [0,0];
			board[monsterPlace[0]][monsterPlace[1]]=8;
			monstersPlaces[i]=monsterPlace;
		}
		else if(i==1){
			var monsterPlace = [0,9];
			board[monsterPlace[0]][monsterPlace[1]]=3;
			monstersPlaces[i]=monsterPlace;
		}
		else if(i==2){
			var monsterPlace = [11,0];
			board[monsterPlace[0]][monsterPlace[1]]=3;
			monstersPlaces[i]=monsterPlace;
		}
		else if(i==3){
			var monsterPlace = [11,9];
			board[monsterPlace[0]][monsterPlace[1]]=3;
			monstersPlaces[i]=monsterPlace;
		}
	}

	for (var i = 0; i < 12; i++) {
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
	
	var timeotOfGame=amountTime.valueAsNumber*1000;
	setTimeout(DieAsTimeout,timeotOfGame);
	
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
		isUp = true;
		isDown = false;
		isLeft = false;
		isRight = false;
		return 1;
	}
	if (keysDown[moveDown]) {
		isUp = false;
		isDown = true;
		isLeft = false;
		isRight = false;
		return 2;
	}
	if (keysDown[moveLeft]) {
		isUp = false;
		isDown = false;
		isLeft = true;
		isRight = false;
		return 3;
	}
	if (keysDown[moveRight]) {
		isUp = false;
		isDown = false;
		isLeft = false;
		isRight = true;
		return 4;
	}
}


function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblLive.value = lives;
	lblTime.value = time_elapsed;
	let imgColor5=document.getElementById("image1");
	let imgColor15=document.getElementById("image2");
	let imgColor25=document.getElementById("image3");
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 50 ;
			center.y = j * 50 ;
			if (board[i][j] == 2) {
				center.x= i*50+25;
				center.y= j*50+25;
				if(isUp){		//move up
					context.beginPath();
					context.arc(center.x, center.y, 20, 1.65 * Math.PI, 3.35 * Math.PI);
					context.lineTo(center.x, center.y);
					context.fillStyle =pac_color;
					context.fill();				
    				context.beginPath();
					context.arc(center.x +15, center.y-5, 3, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color
					context.fill();
				}
				else if(isDown){ //move down
					context.beginPath();
					context.arc(center.x, center.y, 20, 0.65 * Math.PI, 2.35 * Math.PI);
					context.lineTo(center.x, center.y);
					context.fillStyle =pac_color;
					context.fill();				
    				context.beginPath();
					context.arc(center.x +15, center.y-5, 3, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color
					context.fill();
				}
				else if(isLeft){ //move left

					context.beginPath();
					context.arc(center.x, center.y, 20, 1.15 * Math.PI, 2.85 * Math.PI);
					context.lineTo(center.x, center.y);
					context.fillStyle =pac_color;
					context.fill();				
    				context.beginPath();
					context.arc(center.x +5, center.y-10, 3, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color
					context.fill();

				}
				else if(isRight){ //move right
					context.beginPath();
					context.arc(center.x, center.y, 20, 0.15 * Math.PI, 1.85 * Math.PI);
					context.lineTo(center.x, center.y);
					context.fillStyle =pac_color;
					context.fill();				
    				context.beginPath();
					context.arc(center.x +5, center.y-10, 3, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color
					context.fill();
				}

			} else if (board[i][j] == 5) {
				context.beginPath();
				context.drawImage(imgColor5,center.x+5, center.y+5,40,40);
				context.fill();
			} else if (board[i][j] == 6) {
				context.beginPath();
				context.drawImage(imgColor15,center.x+5, center.y+5,40,40);
				context.fill();
			} else if (board[i][j] == 7) {
				context.beginPath();
				context.drawImage(imgColor25,center.x+5, center.y+5,40,40);
				context.fill();
			} else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x, center.y, 50, 50);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
	for(var i=0;i<amountMon.valueAsNumber;i++){
		if(i===0){
			var extraMonster = new Image(40,40);
			extraMonster.src="monster2.gif";
			context.beginPath();
			context.drawImage(extraMonster,monstersPlaces[i][0]*50+5,monstersPlaces[i][1]*50+5,40,40);
			context.fill();
		}
		else{
			var regularMonster = new Image(40,40);
			regularMonster.src="monster.gif";
			context.beginPath();
			context.drawImage(regularMonster,monstersPlaces[i][0]*50+5,monstersPlaces[i][1]*50+5,40,40);
			context.fill();
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
	if (board[shape.i][shape.j] == 5) {
		score=score+5;
	}
	if (board[shape.i][shape.j] == 6) {
		score=score+15;
	}
	if (board[shape.i][shape.j] == 7) {
		score=score+25;
	}
	board[shape.i][shape.j] = 2;
	Draw();
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	//faild from disqualifications because of the monster
	if(disqualifications <= 0){
		setTimeout(DieAsMonster,50);
	}
	if(maxScore==score){
		setTimeout(End,50);
	}
}

function DieAsTimeout(){
	if(score >= 100){
		setTimeout(End,50);
	}
	else{
		if (!paused) Pause();
		window.clearInterval(interval);
		window.alert("You are better than "+score+" points!");
		Start();
	}
}

function DieAsMonster(){
	if (!paused) Pause();
	window.clearInterval(interval);
	window.alert("Loser!");
	Start();
}

function End(){
	if (!paused) Pause();
	window.clearInterval(interval);
	window.alert("Winner!!!");
	Start();
}

function addRanBalls(i ,j){
		let add= false;
		while(!add){
		let randomColor= Math.floor(Math.random() * 9);//0, 1, 2
			if(randomColor<10 && randomColor>3 &&numOf5PointBall>0 ) {
				board[i][j]=5;
				numOf5PointBall--;
				food_remain.valueAsNumber--;
				add=true;
			}
			else if( randomColor<4 && randomColor>0 &&numOf15PointBall>0 ){
				board[i][j]=6;
				numOf15PointBall--;
				food_remain.valueAsNumber--;
				add=true;
			}
			
			else if( randomColor==0  && numOf25PointBall>0){
				board[i][j]=7;
				numOf25PointBall--;
				food_remain.valueAsNumber--;
				add=true;
			}
	}
	
}

