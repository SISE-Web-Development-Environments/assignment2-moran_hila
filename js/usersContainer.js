var userP = {Username:'p', FirstName:'p', LastName:"p", Email:"p@gmail.com" ,Password:'p',day:"15",month:"4",year:"1999"};
var usersArray=[];
usersArray.push(userP);
var userFullName;
var alphanumericReg=/^[a-zA-Z0-9]+$/;
var alphaReg=/^[a-zA-Z]+$/;
var emailReg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

$(document).ready(function () {
    jQuery.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) ||alphanumericReg.test(value);
    }, "Please try to input only letters and numbers");

    jQuery.validator.addMethod("alpha", function(value, element) {
        return this.optional(element) || alphaReg.test(value);
    }, "Please try to input only letters");

    $("#RegisterForm").validate({
        rules: {
            Username: {
                required: true
            },
            FirstName: {
            
                required: true,
                alpha: true
            },
            LastName: {
                required: true,
                alpha: true
            },
            Email: {
                required: true,
                email: true
            },
            Password: {
                alphanumeric:true,
                required: true,
                minlength: 6
            }
        }
    });
  });


function alphaTest(input) {
    if (alphaReg.test(input)) {
        return true;
    }
    else {
        return false;
    }
}

 function emailTest(input) {
    if (emailReg.test(input)) {
        return true;
    }
    else {
        return false;
    }
}

 function alphanumericTest(input) {
    if (input.length >= 6 && alphanumericReg.test(input)) {
        return true;
    }
    else {
        return false;
    }
}

function registerIn(){
    var Username = document.getElementById("Username_rgs").value;
    var Password = document.getElementById("Password_").value;
    var FirstName = document.getElementById("FirstName_").value;
    var LastName = document.getElementById("LastName_").value;
    var Email = document.getElementById("Email_").value;
    var days = document.getElementById("day").value;
    var months = document.getElementById("month").value;
    var years = document.getElementById("year").value;

    if(alphaTest(FirstName)&&alphaTest(LastName)&&emailTest(Email)&&alphanumericTest(Password)){
        usersArray.push({Username,FirstName,LastName,Email,Password,days,months, years});
        welcome();
    }
    else{
        alert("try to enter details again!");
    }
     var form = document.getElementById("RegisterForm");
     form.reset();
}

function loginSettings(){
    var Username = document.getElementById("usernameId").value;
        var Password = document.getElementById("passwordId").value;
        if(isExist(Username,Password)==true){
            document.getElementById("userName").innerHTML = "Welcome: "+Username;
            settings_nav();
        }
        else{
            alert("wrong input!");
            login();
        }
        var form = document.getElementById("LoginForm");
        form.reset();
}

function getFullName(username) {
    var userFullName="";
    var i;
    for (i = 0; i < usersArray.length; i++) {
        if(usersArray[i].Username == username){
            userFullName = usersArray[i].FirstName +" "+usersArray[i].LastName;
            return userFullName;
        }
    }
}


function isExist(name,pass){
    var i;
    for (i = 0; i < usersArray.length; i++) {
        if(usersArray[i].Username==name && usersArray[i].Password==pass){
         return true;
        }
    }
    return false;
}
    