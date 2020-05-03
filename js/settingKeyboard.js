$(document).ready(function () {
    listener_changingKeysByUser();
});

function listener_changingKeysByUser() {
    document.getElementById("keyleft").addEventListener('keydown', function (event) {
    
    let key1 =event.key.toUpperCase();
    if(checkKeyIsValidLetterAndNumber(event.which)){
        document.getElementById("keyleft").value =key1;
        moveLeft= event.which;
    }
    else if(event.which==37){
        document.getElementById("keyleft").value ="left";
        moveLeft= event.which;
        
    }
    else if(event.which==38){
        document.getElementById("keyleft").value ="up";
        moveLeft= event.which;
    }
    else if(event.which==39){
        document.getElementById("keyleft").value ="right";
        moveLeft= event.which;
    }
    else if(event.which==40){
        document.getElementById("keyleft").value ="down";
        moveLeft= event.which;
    }

    });

    document.getElementById("keyright").addEventListener('keydown', function (event) {
        let key2 =event.key.toUpperCase();
    if(checkKeyIsValidLetterAndNumber(event.which)){
        document.getElementById("keyright").value =key2;
        moveRight= event.which;
    }
    else if(event.which==37){
        document.getElementById("keyright").value ="left";
        moveRight= event.which;
        
    }
    else if(event.which==38){
        document.getElementById("keyright").value ="up";
        moveRight= event.which;
    }
    else if(event.which==39){
        document.getElementById("keyright").value ="right";
        moveRight= event.which;
    }
    else if(event.which==40){
        document.getElementById("keyright").value ="down";
        moveRight= event.which;
    }
    });

    document.getElementById("keyup").addEventListener('keydown', function (event) {
        let key3 =event.key.toUpperCase();
        if(checkKeyIsValidLetterAndNumber(event.which)){
            document.getElementById("keyup").value =key3;
            moveUp= event.which;
        }
        else if(event.which==37){
            document.getElementById("keyup").value ="left";
            moveUp= event.which;
            
        }
        else if(event.which==38){
            document.getElementById("keyup").value ="up";
            moveUp= event.which;
        }
        else if(event.which==39){
            document.getElementById("keyup").value ="right";
            moveUp= event.which;
        }
        else if(event.which==40){
            document.getElementById("keyup").value ="down";
            moveUp= event.which;
        }
    });

    document.getElementById("keydown").addEventListener('keydown', function (event) {
        let key3 =event.key.toUpperCase();
        if(checkKeyIsValidLetterAndNumber(event.which)){
            document.getElementById("keydown").value =key3;
            moveDown= event.which;
        }
        else if(event.which==37){
            document.getElementById("keydown").value ="left";
            moveDown= event.which;
            
        }
        else if(event.which==38){
            document.getElementById("keydown").value ="up";
            moveDown= event.which;
        }
        else if(event.which==39){
            document.getElementById("keydown").value ="right";
            moveDown= event.which;
        }
        else if(event.which==40){
            document.getElementById("keydown").value ="down";
            moveDown= event.which;
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

$("#5Point").change(function(){
    if (event.target.value == "Azure") {
        image1.src =AzureBall.src;
    } else if (event.target.value == "Blue") {
        image1.src =BlueBall.src;
    } else if (event.target.value == "Brown") {
        image1.src = BrownBall.src;
    } else if (event.target.value == "Green") {
        image1.src = GreenBall.src;
    } else if (event.target.value == "Pink") {
        image1.src = PinkBall.src;
    } else if (event.target.value == "Red") {
        image1.src = RedBall.src;
    } else if (event.target.value == "Yellow") {
        image1.src = YellowBall.src;
    } else if (event.target.value == "Purple") {
        image1.src = PurpleBall.src;
    } else if (event.target.value == "Gray") {
        image1.src = GrayBall.src;
    }
});

// function pictureChange5Point (event) {
//     if (event.target.value == "Azure") {
//         document.getElementById("image1").src = document.getElementById("AzureBall");
//     } else if (event.target.value == "Blue") {
//         document.getElementById("image1").src =  document.getElementById("BlueBall");
//     } else if (event.target.value == "Brown") {
//         document.getElementById("image1").src = document.getElementById("BrownBall");
//     } else if (event.target.value == "Green") {
//         document.getElementById("image1").src = document.getElementById("GreenBall");
//     } else if (event.target.value == "Pink") {
//         document.getElementById("image1").src = document.getElementById("PinkBall");
//     } else if (event.target.value == "Red") {
//         document.getElementById("image1").src = document.getElementById("RedBall");
//     } else if (event.target.value == "Yellow") {
//         document.getElementById("image1").src = document.getElementById("YellowBall");
//     } else if (event.target.value == "Purple") {
//         document.getElementById("image1").src = document.getElementById("PurpleBall");
//     } else if (event.target.value == "Gray") {
//         document.getElementById("image1").src = document.getElementById("GrayBall");
//     }
// }

$("#15Point").change(function(){
    if (event.target.value == "Azure") {
        image2.src =AzureBall.src;
    } else if (event.target.value == "Blue") {
        image2.src =BlueBall.src;
    } else if (event.target.value == "Brown") {
        image2.src = BrownBall.src;
    } else if (event.target.value == "Green") {
        image2.src = GreenBall.src;
    } else if (event.target.value == "Pink") {
        image2.src = PinkBall.src;
    } else if (event.target.value == "Red") {
        image2.src = RedBall.src;
    } else if (event.target.value == "Yellow") {
        image2.src = YellowBall.src;
    } else if (event.target.value == "Purple") {
        image2.src = PurpleBall.src;
    } else if (event.target.value == "Gray") {
        image2.src = GrayBall.src;
    }
});

// function pictureChange15Point(event) {
//     if (event.target.value == "Azure") {
//         document.getElementById("image2").src = document.getElementById("AzureBall");
//     } else if (event.target.value == "Blue") {
//         document.getElementById("image2").src = document.getElementById("BlueBall");
//     } else if (event.target.value == "Brown") {
//         document.getElementById("image2").src = document.getElementById("BrownBall");
//     } else if (event.target.value == "Green") {
//         document.getElementById("image2").src = document.getElementById("GreenBall");
//     } else if (event.target.value == "Pink") {
//         document.getElementById("image2").src = document.getElementById("PinkBall");
//     } else if (event.target.value == "Red") {
//         document.getElementById("image2").src = document.getElementById("RedBall");
//     } else if (event.target.value == "Yellow") {
//         document.getElementById("image2").src = document.getElementById("YellowBall");
//     } else if (event.target.value == "Purple") {
//         document.getElementById("image2").src = document.getElementById("PurpleBall");
//     } else if (event.target.value == "Gray") {
//         document.getElementById("image2").src = document.getElementById("GrayBall");
//     }
// }


$("#25Point").change(function(){
    if (event.target.value == "Azure") {
        image3.src =AzureBall.src;
    } else if (event.target.value == "Blue") {
        image3.src =BlueBall.src;
    } else if (event.target.value == "Brown") {
        image3.src = BrownBall.src;
    } else if (event.target.value == "Green") {
        image3.src = GreenBall.src;
    } else if (event.target.value == "Pink") {
        image3.src = PinkBall.src;
    } else if (event.target.value == "Red") {
        image3.src = RedBall.src;
    } else if (event.target.value == "Yellow") {
        image3.src = YellowBall.src;
    } else if (event.target.value == "Purple") {
        image3.src = PurpleBall.src;
    } else if (event.target.value == "Gray") {
        image3.src = GrayBall.src;
    }
});

// function pictureChange25Point (event) {
//     if (event.target.value == "Azure") {
//         document.getElementById("image3").src = document.getElementById("AzureBall");
//     } else if (event.target.value == "Blue") {
//         document.getElementById("image3").src = document.getElementById("BlueBall");
//     } else if (event.target.value == "Gray") {
//         document.getElementById("image3").src = document.getElementById("GrayBall");
//     } else if (event.target.value == "Brown") {
//         document.getElementById("image3").src = document.getElementById("BrownBall");
//     } else if (event.target.value == "Green") {
//         document.getElementById("image3").src = document.getElementById("GreenBall");
//     } else if (event.target.value == "Pink") {
//         document.getElementById("image3").src = document.getElementById("PinkBall");
//     } else if (event.target.value == "Red") {
//         document.getElementById("image3").src = document.getElementById("RedBall");
//     } else if (event.target.value == "Yellow") {
//         document.getElementById("image3").src = document.getElementById("YellowBall");
//     } else if (event.target.value == "Purple") {
//         document.getElementById("image3").src = document.getElementById("PurpleBall");
//     }
// }

function setElements(){
    //moveUp = document.getElementById("keyup");
    document.getElementById("showUpKey").innerText =document.getElementById("keyup").value+"";
    //moveDown = document.getElementById("keydown");
    document.getElementById("showDownKey").innerText =document.getElementById("keydown").value+"";
    //moveRight = document.getElementById("keyright");
    document.getElementById("showRightKey").innerText =document.getElementById("keyright").value+"";
    //moveLeft= document.getElementById("keyleft");
    document.getElementById("showLeftKey").innerText =document.getElementById("keyleft").value+"";
    amountMon= document.getElementById("amountMonsters");
    document.getElementById("showAmountMon").innerText =amountMon.value+"";
    amountTime = document.getElementById("amountTime");
    document.getElementById("showAmountTime").innerText =amountTime.value+"";
    amountBalls = document.getElementById("amountBalls");
    document.getElementById("showAmountBalls").innerText =amountBalls.value+"";
    point5 = document.getElementById("5Point");
    point15 = document.getElementById("15Point");
    point25 = document.getElementById("25Point");
    document.getElementById("image1set").src = document.getElementById("image1").src;
    document.getElementById("image2set").src = document.getElementById("image2").src;
    document.getElementById("image3set").src = document.getElementById("image3").src;
}

function applySettings(){
    let valid= true;
    setElements();
    if(!checkValidButton()){
        document.getElementById("ButtonError").style.display="block";
        document.getElementById("ButtonError").style.color="red";
        document.getElementById("ButtonError").style.backgroundColor="black";
        valid=false;
    }
    else{
        document.getElementById("ButtonError").style.display="none";
    }
    
    if(!checkValidBallsColors()){
        document.getElementById("ColorError").style.display="block";
        document.getElementById("ColorError").style.color="red"
        document.getElementById("ColorError").style.backgroundColor="black";
        valid=false;
    }
    else{
        document.getElementById("ColorError").style.display="none";
    }
    if(amountBalls.value<49 || amountBalls.value>91 ){
        document.getElementById("amountBallsError").style.display="block";
        document.getElementById("amountBallsError").style.color="red"
        document.getElementById("amountBallsError").style.backgroundColor="black";
        valid=false;

    }
    else{
        document.getElementById("amountBallsError").style.display="none";
    }
    
    if(amountMon.value<1 || amountMon.value>4 ){
        document.getElementById("amountMonstersError").style.display="block";
        document.getElementById("amountMonstersError").style.color="red"
        document.getElementById("amountMonstersError").style.backgroundColor="black";
        valid=false;

    }
    else{
        document.getElementById("amountMonstersError").style.display="none";
    }
    
    if(amountTime.value<59 ){
        document.getElementById("amountTimeError").style.display="block";
        document.getElementById("amountTimeError").style.color="red"
        document.getElementById("amountTimeError").style.backgroundColor="black";
        valid=false;

    }
    else{
        document.getElementById("amountTimeError").style.display="none";
    }
    if(valid){
        game_nav();
    }
    else{
        valid=true;
    }
}

function checkValidButton(){
    
    if( moveUp != moveDown &&
        moveUp != moveLeft &&
        moveUp != moveRight &&
        moveDown != moveLeft &&
        moveDown != moveRight &&
        moveRight != moveLeft ) {
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

$(document).ready(function(){   
    $("#randomButton").on("click", function(e){
        e.preventDefault();
        moveUp = 38;
        moveDown = 40;
        moveRight= 39;
        moveLeft = 37;
        document.getElementById("keyup").value = "up";
        document.getElementById("keydown").value = "down";
        document.getElementById("keyright").value = "right";
        document.getElementById("keyleft").value = "left";
        document.getElementById("amountMonsters").value = Math.floor(Math.random() * 4) + 1;
        document.getElementById("amountBalls").value = Math.floor(Math.random() * 41) + 50;
        document.getElementById("amountTime").value = Math.floor(Math.random() * 1000) + 60;
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
    }); 
 });

// function randomSettings(){
//     moveUp = 38;
//     moveDown = 40;
//     moveRight= 39;
//     moveLeft = 37;
//     document.getElementById("keyup").value = "up";
//     document.getElementById("keydown").value = "down";
//     document.getElementById("keyright").value = "right";
//     document.getElementById("keyleft").value = "left";
//     document.getElementById("amountMonsters").value = Math.floor(Math.random() * 4) + 1;
//     document.getElementById("amountBalls").value = Math.floor(Math.random() * 41) + 50;
//     document.getElementById("amountTime").value = Math.floor(Math.random() * 1000) + 60;
//     let num1=Math.floor(Math.random() * 9) + 1;
//     let num2=Math.floor(Math.random() * 9) + 1;
//     let num3=Math.floor(Math.random() * 9) + 1;
//     let color1=randomColor(num1);
//     document.getElementById("5Point").value = color1;
//     pictureChange5PointRandom(color1);
//     while(num1==num2){
//         num2=Math.floor(Math.random() * 9) + 1;
//     }
//     let color2=randomColor(num2);
//     document.getElementById("15Point").value = color2;
//     pictureChange15PointRandom(color2);
//     while(num3==num2 || num1==num3){
//         num3=Math.floor(Math.random() * 9) + 1;
//     }
//     let color3=randomColor(num3);
//     document.getElementById("25Point").value = color3;
//     pictureChange25PointRandom(color3);
//     setElements();
// }

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
        image1.src =AzureBall.src;
    } else if (color == "Blue") {
        image1= BlueBall.src;
        
    } else if (color == "Brown") {
        image1.src= BrownBall.src;
        
    } else if (color == "Green") {
        image1.src= GreenBall.src;
     
    } else if (color== "Pink") {
        image1.src = PinkBall.src;
      
    } else if (color == "Red") {
        image1.src = RedBall.src;
       
    } else if (color == "Yellow") {
        image1.src = YellowBall.src;
       
    } else if (color == "Purple") {
        image1.src = PurpleBall.src;
      
    } else if (color == "Gray") {
        image1.src= GrayBall.src;
      
    }
}

function pictureChange15PointRandom(color) {
    if (color == "Azure") {
        image2.src =AzureBall.src;
    } else if (color == "Blue") {
        image2= BlueBall.src;
        
    } else if (color == "Brown") {
        image2.src= BrownBall.src;
        
    } else if (color == "Green") {
        image2.src= GreenBall.src;
     
    } else if (color== "Pink") {
        image2.src = PinkBall.src;
      
    } else if (color == "Red") {
        image2.src = RedBall.src;
       
    } else if (color == "Yellow") {
        image2.src = YellowBall.src;
       
    } else if (color == "Purple") {
        image2.src = PurpleBall.src;
      
    } else if (color == "Gray") {
        image2.src= GrayBall.src;
    }
}

function pictureChange25PointRandom (color) {
    if (color == "Azure") {
        image3.src =AzureBall.src;
    } else if (color == "Blue") {
        image3= BlueBall.src;
        
    } else if (color == "Brown") {
        image3.src= BrownBall.src;
        
    } else if (color == "Green") {
        image3.src= GreenBall.src;
     
    } else if (color== "Pink") {
        image3.src = PinkBall.src;
      
    } else if (color == "Red") {
        image3.src = RedBall.src;
       
    } else if (color == "Yellow") {
        image3.src = YellowBall.src;
       
    } else if (color == "Purple") {
        image3.src = PurpleBall.src;
      
    } else if (color == "Gray") {
        image3.src= GrayBall.src;
    }
}
