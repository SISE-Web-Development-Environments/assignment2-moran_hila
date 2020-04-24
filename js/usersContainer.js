var userP = {Username:"p", FirstName:"p", LastName:"p", Email:"p@gmail.com" ,Password:"p",days:"15",months:"4",years:"1999"};
var usersArray=[userP];

$(document).ready(function () {
    jQuery.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[0-9a-zA-Z]+$/.test(value);
    }, "Please try to input only letters and numbers");

    jQuery.validator.addMethod("alpha", function(value, element) {
        return this.optional(element) || /^[A-Za-z]+$/.test(value);
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


  $(document).ready(function () {
    $("#RegisterForm").submit(function(e) {
        var Usermname = document.getElementById("Usermname").value;
        var Password = document.getElementById("Password").value;
        var FirstName = document.getElementById("FirstName").value;
        var LastName = document.getElementById("LastName").value;
        var Email = document.getElementById("Email").value;
        var days = document.getElementById("days").value;
        var months = document.getElementById("months").value;
        var years = document.getElementById("years").value;
        const user =  username, password ;  //create a user object to go in the array
        var newUser = {
            Usermname,
            Password,
            FirstName,
            LastName,
            Email,
            days,
            months,
            years
        };
        usersArray.push(newUser);
    });
});

    