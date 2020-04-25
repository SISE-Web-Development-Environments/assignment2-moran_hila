function checkKeyIsValid(key) {
    if (37 <= key && key <= 40) {
        return true;
    } else if (48 <= key && key <= 90) {
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