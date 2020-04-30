var monstersPlaces=[];
var isUp=false;
var isDown=false;
var isLeft=true;
var isRight=false;
var timeotOfGame;
var timeOutInit=[];
var candyCell;
var timeOutCandy=[];
var eatCandy=false;
var numOfEatenBalls;

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
	
	for(var i= 0; i< timeOutInit.length ; i++){
		clearTimeout(timeOutInit[i]);	
	}
	if(!eatCandy){
		for(var j= 0; j< timeOutCandy.length ; j++){
			clearTimeout(timeOutCandy[j]);
		}
	}
	numOfEatenBalls=0;
	eatCandy=false;
	timeOutCandy=new Array();
	timeOutInit=new Array();
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
	timeotOfGame=amountTime.valueAsNumber*1000;
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
	lives = 5;//num of disqualifications to fail
	if(paused)
		Pause();
	
	isIntervalSet = true;
//	setTimeout(StartInterval,1000);
}

function initMonsters(){
	monstersPlaces= new Array();
	for(var i = 0; i < amountMon.valueAsNumber ; i++ ){
		var monsterPlace = new Object();
		if(i===0){
			monsterPlace.lastX =0 ;
			monsterPlace.lastY = 0;
			monsterPlace.x=0;
			monsterPlace.y=0;
			board[monsterPlace.x][monsterPlace.y]=8;
			monstersPlaces[i]=monsterPlace;
			monsterPlace.direction = "right";

		}
		else if(i==1){
			monsterPlace.lastX =0 ;
			monsterPlace.lastY = 9;
			monsterPlace.x=0;
			monsterPlace.y=9;
			board[monsterPlace.x][monsterPlace.y]=3;
			monstersPlaces[i]=monsterPlace;
			monsterPlace.direction = "down";
			
		}
		else if(i==2){
			monsterPlace.lastX =11 ;
			monsterPlace.lastY = 0;
			monsterPlace.x=11;
			monsterPlace.y=0;
			board[monsterPlace.x][monsterPlace.y]=3;
			monstersPlaces[i]=monsterPlace;
			monsterPlace.direction = "up";
		}
		else if(i==3){
			monsterPlace.lastX =11 ;
			monsterPlace.lastY = 9;
			monsterPlace.x=11;
			monsterPlace.y=9;
			board[monsterPlace.x][monsterPlace.y]=3;
			monstersPlaces[i]=monsterPlace;
			monsterPlace.direction = "left";


		}
	}
}


//TODO: add one medicine (trufa)
function Start() {
	initParams();
	for (var i = 0; i < 12; i++) {
		board[i] = new Array();
	}
	initMonsters();
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

	var emptyCell = findRandomEmptyCell(board);
	board[emptyCell[0]][emptyCell[1]] = 1;
	
	candyCell = findRandomEmptyCell(board);
	board[candyCell[0]][candyCell[1]] = 9;
	
	timeOutInit.push(setTimeout(DieAsTimeout,timeotOfGame));

	for(var time=0; time<timeotOfGame ; time=time+1000){
		timeOutInit.push(setTimeout(moveMonsters,time));
	}
	for(var time2=0; time2<timeotOfGame ; time2=time2+2000){
		timeOutCandy.push(setTimeout(moveCandy,time2));
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


function moveCandy(){
	let randomMove= Math.floor(Math.random()*3+1);
	if(randomMove==1 &&  candyCell[1]>0 && board[candyCell[0]][candyCell[1]-1] != 4){ //up
		candyCell[1]--;
	}
	else if(randomMove==2 &&  candyCell[1]<11 && board[candyCell[0]][candyCell[1]+1] != 4){ //down
		candyCell[1]++;
	}
	else if(randomMove==3 &&  candyCell[0]<9 && board[candyCell[0]+1][candyCell[1]] != 4){ //right
		candyCell[0]++;
	}
	else if(randomMove==4 &&  candyCell[0]>0 && board[candyCell[0]-1][candyCell[1]] != 4){ //right
		candyCell[0]--;
	}
	
		if( !eatCandy&& candyCell[0]==shape.i && candyCell[1]==shape.j){
			score=score+50;
			lblScore.value = score;
			eatCandy=true;
			drowCandy();
			for(var j= 0; j< timeOutCandy.length ; j++){
				clearTimeout(timeOutCandy[j]);
			}
		}
	
	else if(!eatCandy){
		drowCandy();
	}
	
	
}

function drowCandy(){
	var imgCandy=new Image(40,40);
	imgCandy.src="css/candy.jpg";
	context.beginPath();
	context.drawImage(imgCandy,candyCell[0]*50+5, candyCell[1]*50+5,40,40);
	context.fill();
	
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
			if(board[i][j]==1){
				let imgMedicine=new Image(40,40);
				imgMedicine.src="css/liveImg.jpg"
				context.beginPath();
				context.drawImage(imgMedicine,center.x+5, center.y+5,40,40);
				context.fill();
			}

			
		}
	}
	drawMonsters();
	if(!eatCandy){
		drowCandy();
	}
}

function StartInterval() {
    if (!isIntervalSet) {
        interval = setInterval(Start, timeotOfGame);
        isIntervalSet = true;
    }
}

function ClearInterval() {
    window.clearInterval(interval);
	isIntervalSet = false
	for(var i= 0; i< timeOutInit.length ; i++){
		clearTimeout(timeOutInit[i]);
	}
	for(var j= 0; j< timeOutCandy.length ; j++){
		clearTimeout(timeOutCandy[j]);
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
		numOfEatenBalls++;
	}
	if (board[shape.i][shape.j] == 6) {
		score=score+15;
		numOfEatenBalls++;
	}
	if (board[shape.i][shape.j] == 7) {
		score=score+25;
		numOfEatenBalls++;
	}
	if((board[shape.i][shape.j] == 1)){
		lives++;
		
	}
	
	board[shape.i][shape.j] = 2;
	Draw();
	if( !eatCandy&& candyCell[0]==shape.i && candyCell[1]==shape.j){
		score=score+50;
		lblScore.value = score;
		eatCandy=true;
		for(var j= 0; j< timeOutCandy.length ; j++){
			clearTimeout(timeOutCandy[j]);
		}
	}

	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	//faild from disqualifications because of the monster
	if(lives <= 0){
		timeOutInit.push(setTimeout(DieAsMonster,50));
	}
	var num= document.getElementById("showAmountBalls").innerHTML.value;
	if(num===numOfEatenBalls){
		timeOutInit.push(setTimeout(End,50));
	}
}

function DieAsTimeout(){
	if(score >= 100){
		setTimeout(End,50);
	}
	else{
		if (!paused) Pause();
		ClearInterval();
		window.alert("You are better than "+score+" points!");
		Start();
	}
}

function DieAsMonster(){
	if (!paused) Pause();
	ClearInterval();
	window.alert("Loser!");
	Start();
}

function End(){
	if (!paused) Pause();
	ClearInterval();
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

function livesAndScoreDown(i){
	if(i===0){
		score=score-20;
		lives= lives-2;
	}
	else{
		score=score-10;
		lives= lives-1;
	}
}

function drawMonsters(){
	for(var i=0;i<amountMon.valueAsNumber;i++){
		if(i===0){
			var extraMonster = new Image(40,40);
			extraMonster.src="monster2.gif";
			context.beginPath();
			context.drawImage(extraMonster,monstersPlaces[i].x*50+5,monstersPlaces[i].y*50+5,40,40);
			context.fill();
		}
		else{
			var regularMonster = new Image(40,40);
			regularMonster.src="monster.gif";
			context.beginPath();
			context.drawImage(regularMonster,monstersPlaces[i].x*50+5,monstersPlaces[i].y*50+5,40,40);
			context.fill();
		}
	}
}

function moveMonsters() {
for (var i = 0; i < monstersPlaces.length; i++){
	var monster = monstersPlaces[i];
	monster.lastX = monster.x;
	monster.lastY = monster.y;
	var deltaX = monster.x - shape.i;
	var deltaY = monster.y - shape.j;

	var moveSuccessful = false;
	// Check which direction the ghost would like to move
	if (Math.abs(deltaX) > Math.abs(deltaY)){
		if (deltaX > 0) moveSuccessful = moveMonster(monster, "left",i);
		else moveSuccessful = moveMonster(monster, "right",i);
		if (!moveSuccessful){
			if (deltaY > 0) moveSuccessful = moveMonster(monster, "up",i);
			else moveSuccessful = moveMonster(monster, "down",i);
		}
	}
	else {
		if (deltaY > 0) moveSuccessful = moveMonster(monster, "up",i);
		else moveSuccessful = moveMonster(monster, "down",i);
		if (!moveSuccessful){
			if (deltaX > 0) moveSuccessful = moveMonster(monster, "left",i);
			else moveSuccessful = moveMonster(monster, "right",i);
		}
	}
	// continue in same direction
	if (!moveSuccessful) {
		if (monster.direction === "up" && isLegalMove(monster.y-1,monster.x,i)) {
			monster.y--;
			moveSuccessful = true;
		}
		if (monster.direction === "down" && isLegalMove(monster.y+1,monster.x,i)) {
			monster.y++;
			moveSuccessful = true;
		}
		if (monster.direction === "left" && isLegalMove(monster.y,monster.x-1,i)) {
			monster.x--;
			moveSuccessful = true;
		}
		if (monster.direction === "right" && isLegalMove(monster.y,monster.x+1,i)) {
			monster.x++;
			moveSuccessful = true;
		}
	}
	// random direction
	if (!moveSuccessful) {
		if (monster.direction === "left" || monster.direction === "right") {
			if (isLegalMove(monster.y-1, monster.x,i)) {
				monster.direction = "up";
				monster.y--;
			} else if (isLegalMove(monster.y+1, monster.x,i)) {
				monster.direction = "down";
				monster.y++;
			}
		}
		else {
			if (isLegalMove(monster.y,monster.x-1,i)) {
				monster.direction = "left";
				monster.x--;
			} else if (isLegalMove(monster.y,monster.x+1,i)){
				monster.direction = "right";
				monster.x++;
			}
		}
	}
	if(deltaX==0 && deltaY==0){
		livesAndScoreDown(i);
		initMonsters();
	}
}
drawMonsters();
}

function isLegalMove(y,x,ghostID) {
if (board[x][y] == 4) return false;
for (var i = 0; i < monstersPlaces.length; i++){
	if (i !== ghostID && monstersPlaces[i].x === x && monstersPlaces[i].y === y)
		return false;
}
return true;
}

function moveMonster(ghost, direction,i) {
var moveSuccessful = false;
try {
	// if wants to go in certain direction and is not currently going in the opposite direction without blockages
	if (direction === "up" && isLegalMove(ghost.y - 1, ghost.x, i)
		&& !( ghost.direction === "down" && isLegalMove(ghost.y + 1, ghost.x, i))) {
		ghost.direction = "up";
		ghost.y--;
		moveSuccessful = true
	} else if (direction === "down" && isLegalMove(ghost.y + 1, ghost.x, i)
		&& !( ghost.direction === "up" && isLegalMove(ghost.y - 1, ghost.x, i))) {
		ghost.direction = "down";
		ghost.y++;
		moveSuccessful = true
	} else if (direction === "left" && isLegalMove(ghost.y, ghost.x - 1, i)
		&& !(ghost.direction === "right" && isLegalMove(ghost.y, ghost.x + 1, i))) {
		ghost.direction = "left";
		ghost.x--;
		moveSuccessful = true
	} else if (direction === "right" && isLegalMove(ghost.y, ghost.x + 1, i)
		&& !(ghost.direction === "left" && isLegalMove(ghost.y, ghost.x - 1, i))) {
		ghost.direction = "right";
		ghost.x++;
		moveSuccessful = true
	}
} catch (e) {
	return false;
}
return moveSuccessful;
}



