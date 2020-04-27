var userP = {Username:'p', FirstName:'p', LastName:"p", Email:"p@gmail.com" ,Password:'p',day:"15",month:"4",year:"1999"};
var usersArray=[];
usersArray.push(userP);
var userFullName;

$(document).ready(function () {
    jQuery.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) ||/^[a-zA-Z0-9]+$/.test(value);
    }, "Please try to input only letters and numbers");

    jQuery.validator.addMethod("alpha", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]+$/.test(value);
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

function registerIn(){
    var Username = document.getElementById("Username_rgs").value;
        var Password = document.getElementById("Password_").value;
        var FirstName = document.getElementById("FirstName_").value;
        var LastName = document.getElementById("LastName_").value;
        var Email = document.getElementById("Email_").value;
        var days = document.getElementById("day").value;
        var months = document.getElementById("month").value;
        var years = document.getElementById("year").value;
        usersArray.push({Username,FirstName,LastName,Email,Password,days,months, years});
        welcome();
        var form = document.getElementById("RegisterForm")
        form.reset();
}

function loginSettings(){
    var Username = document.getElementById("usernameId").value;
        var Password = document.getElementById("passwordId").value;
        if(isExist(Username,Password)==true){
            document.getElementById("userName").innerHTML = "Welcome: "+getFullName(Username);
            settings_nav();
        }
        else{
            alert("wrong input!")
            login();
        }
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
    