var moveUp;
var moveDown;
var moveRight;
var moveLeft;
var amountMon;
var amountTime;
var amountBalls;
var point5;
var point15;
var point25;

$(document).ready(function () {
    listener_changingKeysByUser();
});

function listener_changingKeysByUser() {
    document.getElementById("keyleft").addEventListener('keydown', function (event) {
    
    let key1 =event.key.toUpperCase();
    if(checkKeyIsValidLetterAndNumber(event.which)){
        document.getElementById("keyleft").value =key1;
        moveLeft= key.which;
    }
    else if(event.which==37){
        document.getElementById("keyleft").value ="Left";
        moveLeft= key.which;
        
    }
    else if(event.which==38){
        document.getElementById("keyleft").value ="Up";
        moveLeft= key.which;
    }
    else if(event.which==39){
        document.getElementById("keyleft").value ="Right";
        moveLeft= key.which;
    }
    else if(event.which==40){
        document.getElementById("keyleft").value ="Down";
        moveLeft= key.which;
    }

    });

    document.getElementById("keyright").addEventListener('keydown', function (event) {
        let key2 =event.key.toUpperCase();
    if(checkKeyIsValidLetterAndNumber(event.which)){
        document.getElementById("keyright").value =key2;
        moveRight= key.which;
    }
    else if(event.which==37){
        document.getElementById("keyright").value ="Left";
        moveRight= key.which;
        
    }
    else if(event.which==38){
        document.getElementById("keyright").value ="Up";
        moveRight= key.which;
    }
    else if(event.which==39){
        document.getElementById("keyright").value ="Right";
        moveRight= key.which;
    }
    else if(event.which==40){
        document.getElementById("keyright").value ="Down";
        moveRight= key.which;
    }
    });

    document.getElementById("keyup").addEventListener('keydown', function (event) {
        let key3 =event.key.toUpperCase();
        if(checkKeyIsValidLetterAndNumber(event.which)){
            document.getElementById("keyup").value =key3;
            moveUp= key.which;
        }
        else if(event.which==37){
            document.getElementById("keyup").value ="Left";
            moveUp= key.which;
            
        }
        else if(event.which==38){
            document.getElementById("keyup").value ="Up";
            moveUp= key.which;
        }
        else if(event.which==39){
            document.getElementById("keyup").value ="Right";
            moveUp= key.which;
        }
        else if(event.which==40){
            document.getElementById("keyup").value ="Down";
            moveUp= key.which;
        }
    });

    document.getElementById("keydown").addEventListener('keydown', function (event) {
        let key3 =event.key.toUpperCase();
        if(checkKeyIsValidLetterAndNumber(event.which)){
            document.getElementById("keydown").value =key3;
            moveDown= key.which;
        }
        else if(event.which==37){
            document.getElementById("keydown").value ="Left";
            moveDown= key.which;
            
        }
        else if(event.which==38){
            document.getElementById("keydown").value ="Up";
            moveDown= key.which;
        }
        else if(event.which==39){
            document.getElementById("keydown").value ="Right";
            moveDown= key.which;
        }
        else if(event.which==40){
            document.getElementById("keydown").value ="Down";
            moveDown= key.which;
        }
    });
}

function checkKeyIsValidLetterAndNumber(key) {
    if (48 <= key && key <= 90) {
        return true;
    } else if (76 <= key && key <= 105) {
        return true;
    } else {
        return false;
    }
}

function pictureChange5Point (event) {
    if (event.target.value == "Azure") {
        document.getElementById("image1").src = "css/picturesOfBalls/AzureBall.png";
    } else if (event.target.value == "Blue") {
        document.getElementById("image1").src = "css/picturesOfBalls/BlueBall.png";
    } else if (event.target.value == "Brown") {
        document.getElementById("image1").src = "css/picturesOfBalls/BrownBall.png";
    } else if (event.target.value == "Green") {
        document.getElementById("image1").src = "css/picturesOfBalls/GreenBall.png";
    } else if (event.target.value == "Pink") {
        document.getElementById("image1").src = "css/picturesOfBalls/PinkBall.png";
    } else if (event.target.value == "Red") {
        document.getElementById("image1").src = "css/picturesOfBalls/RedBall.png";
    } else if (event.target.value == "Yellow") {
        document.getElementById("image1").src = "css/picturesOfBalls/YellowBall.png";
    } else if (event.target.value == "Purple") {
        document.getElementById("image1").src = "css/picturesOfBalls/PurpleBall.png";
    } else if (event.target.value == "Gray") {
        document.getElementById("image1").src = "css/picturesOfBalls/GrayBall.png";
    }
}
function pictureChange15Point(event) {
    if (event.target.value == "Azure") {
        document.getElementById("image2").src = "css/picturesOfBalls/AzureBall.png";
    } else if (event.target.value == "Blue") {
        document.getElementById("image2").src = "css/picturesOfBalls/BlueBall.png";
    } else if (event.target.value == "Brown") {
        document.getElementById("image2").src = "css/picturesOfBalls/BrownBall.png";
    } else if (event.target.value == "Green") {
        document.getElementById("image2").src = "css/picturesOfBalls/GreenBall.png";
    } else if (event.target.value == "Pink") {
        document.getElementById("image2").src = "css/picturesOfBalls/PinkBall.png";
    } else if (event.target.value == "Red") {
        document.getElementById("image2").src = "css/picturesOfBalls/RedBall.png";
    } else if (event.target.value == "Yellow") {
        document.getElementById("image2").src = "css/picturesOfBalls/YellowBall.png";
    } else if (event.target.value == "Purple") {
        document.getElementById("image2").src = "css/picturesOfBalls/PurpleBall.png";
    } else if (event.target.value == "Gray") {
        document.getElementById("image2").src = "css/picturesOfBalls/GrayBall.png";
    }
}
function pictureChange25Point (event) {
    if (event.target.value == "Azure") {
        document.getElementById("image3").src = "css/picturesOfBalls/AzureBall.png";
    } else if (event.target.value == "Blue") {
        document.getElementById("image3").src = "css/picturesOfBalls/BlueBall.png";
    } else if (event.target.value == "Gray") {
        document.getElementById("image3").src = "css/picturesOfBalls/GrayBall.png";
    } else if (event.target.value == "Brown") {
        document.getElementById("image3").src = "css/picturesOfBalls/BrownBall.png";
    } else if (event.target.value == "Green") {
        document.getElementById("image3").src = "css/picturesOfBalls/GreenBall.png";
    } else if (event.target.value == "Pink") {
        document.getElementById("image3").src = "css/picturesOfBalls/PinkBall.png";
    } else if (event.target.value == "Red") {
        document.getElementById("image3").src = "css/picturesOfBalls/RedBall.png";
    } else if (event.target.value == "Yellow") {
        document.getElementById("image3").src = "css/picturesOfBalls/YellowBall.png";
    } else if (event.target.value == "Purple") {
        document.getElementById("image3").src = "css/picturesOfBalls/PurpleBall.png";
    }
}

function setElements(){
    moveUp = document.getElementById("keyup");
    moveDown = document.getElementById("keydown");
    moveRight = document.getElementById("keyright");
    moveLeft= document.getElementById("keyleft");
    amountMon= document.getElementById("amountMonsters");
    amountTime = document.getElementById("amountTime");
    amountBalls = document.getElementById("amountBalls");
    point5 = document.getElementById("5Point");
    point15 = document.getElementById("15Point");
    point25 = document.getElementById("25Point");
}

function applySettings(){
    setElements();
    if(!checkValidButton()){
        document.getElementById("ButtonError").style.display="block";
        document.getElementById("ButtonError").style.color="red";
        document.getElementById("ButtonError").style.backgroundColor="black";
    }
    else{
        document.getElementById("ButtonError").style.display="none";
    }
    
    if(!checkValidBallsColors()){
        document.getElementById("ColorError").style.display="block";
        document.getElementById("ColorError").style.color="red"
        document.getElementById("ColorError").style.backgroundColor="black";
    }
    else{
        document.getElementById("ColorError").style.display="none";

    }

    if(checkValidButton() && checkValidBallsColors() ){
        game_nav();
    }
}

function checkValidButton(){
    
    if( moveUp.value != moveDown.value &&
        moveUp.value != moveLeft.value &&
        moveUp.value != moveRight.value &&
        moveDown.value != moveLeft.value &&
        moveDown.value != moveRight.value &&
        moveRight.value != moveLeft.value ) {
            return true;
    }
    else{
        return false;
    }
}

function checkValidBallsColors(){
    if( point5.value != point15.value &&
        point5.value != point25.value &&
        point15.value != point25.value){
        return true;
    }
    else{
        return false;
    }
}

function randomSettings(){
    moveUp = 38;
    moveDown = 40;
    moveRight= 39;
    moveLeft = 37;
    document.getElementById("keyup").value = "Up";
    document.getElementById("keydown").value = "down";
    document.getElementById("keyright").value = "right";
    document.getElementById("keyleft").value = "left";
    document.getElementById("amountMonsters").value = Math.floor(Math.random() * 4) + 1;
    document.getElementById("amountBalls").value = Math.floor(Math.random() * 41) + 50;
    document.getElementById("amountTime").value = Math.floor(Math.random() * 100000) + 60;
    let num1=Math.floor(Math.random() * 9) + 1;
    let num2=Math.floor(Math.random() * 9) + 1;
    let num3=Math.floor(Math.random() * 9) + 1;
    let color1=randomColor(num1);
    document.getElementById("5Point").value = color1;
    pictureChange5PointRandom(color1);
    while(num1==num2){
        num2=Math.floor(Math.random() * 9) + 1;
    }
    let color2=randomColor(num2);
    document.getElementById("15Point").value = color2;
    pictureChange15PointRandom(color2);
    while(num3==num2 || num1==num3){
        num3=Math.floor(Math.random() * 9) + 1;
    }
    let color3=randomColor(num3);
    document.getElementById("25Point").value = color3;
    pictureChange25PointRandom(color3);
    setElements();
}


function randomColor (number) {
    if(number==1){
        return "Azure";
    }
    else if( number==2 ){
        return "Blue";
    }
    else if( number==3 ){
        return "Gray";
    }
    else if( number==4 ){
        return "Brown";
    }
    else if( number==5 ){
        return "Green";
    }
    else if( number==6 ){
        return "Pink";
    }
    else if( number==7 ){
        return "Red";
    }
    else if( number==8 ){
        return "Yellow";
    }
    else if( number==9 ){
        return "Purple";
    }

}

function pictureChange5PointRandom (color) {
    if (color == "Azure") {
        document.getElementById("image1").src = "css/picturesOfBalls/AzureBall.png";
    } else if (color == "Blue") {
        document.getElementById("image1").src = "css/picturesOfBalls/BlueBall.png";
    } else if (color == "Brown") {
        document.getElementById("image1").src = "css/picturesOfBalls/BrownBall.png";
    } else if (color == "Green") {
        document.getElementById("image1").src = "css/picturesOfBalls/GreenBall.png";
    } else if (color== "Pink") {
        document.getElementById("image1").src = "css/picturesOfBalls/PinkBall.png";
    } else if (color == "Red") {
        document.getElementById("image1").src = "css/picturesOfBalls/RedBall.png";
    } else if (color == "Yellow") {
        document.getElementById("image1").src = "css/picturesOfBalls/YellowBall.png";
    } else if (color == "Purple") {
        document.getElementById("image1").src = "css/picturesOfBalls/PurpleBall.png";
    } else if (color == "Gray") {
        document.getElementById("image1").src = "css/picturesOfBalls/GrayBall.png";
    }
}
function pictureChange15PointRandom(color) {
    if (color == "Azure") {
        document.getElementById("image2").src = "css/picturesOfBalls/AzureBall.png";
    } else if (color == "Blue") {
        document.getElementById("image2").src = "css/picturesOfBalls/BlueBall.png";
    } else if (color == "Brown") {
        document.getElementById("image2").src = "css/picturesOfBalls/BrownBall.png";
    } else if (color == "Green") {
        document.getElementById("image2").src = "css/picturesOfBalls/GreenBall.png";
    } else if (color == "Pink") {
        document.getElementById("image2").src = "css/picturesOfBalls/PinkBall.png";
    } else if (color == "Red") {
        document.getElementById("image2").src = "css/picturesOfBalls/RedBall.png";
    } else if (color == "Yellow") {
        document.getElementById("image2").src = "css/picturesOfBalls/YellowBall.png";
    } else if (color == "Purple") {
        document.getElementById("image2").src = "css/picturesOfBalls/PurpleBall.png";
    } else if (color == "Gray") {
        document.getElementById("image2").src = "css/picturesOfBalls/GrayBall.png";
    }
}
function pictureChange25PointRandom (color) {
    if (color == "Azure") {
        document.getElementById("image3").src = "css/picturesOfBalls/AzureBall.png";
    } else if (color == "Blue") {
        document.getElementById("image3").src = "css/picturesOfBalls/BlueBall.png";
    } else if (color == "Gray") {
        document.getElementById("image3").src = "css/picturesOfBalls/GrayBall.png";
    } else if (color == "Brown") {
        document.getElementById("image3").src = "css/picturesOfBalls/BrownBall.png";
    } else if (color == "Green") {
        document.getElementById("image3").src = "css/picturesOfBalls/GreenBall.png";
    } else if (color == "Pink") {
        document.getElementById("image3").src = "css/picturesOfBalls/PinkBall.png";
    } else if (color == "Red") {
        document.getElementById("image3").src = "css/picturesOfBalls/RedBall.png";
    } else if (color == "Yellow") {
        document.getElementById("image3").src = "css/picturesOfBalls/YellowBall.png";
    } else if (color == "Purple") {
        document.getElementById("image3").src = "css/picturesOfBalls/PurpleBall.png";
    }
}
