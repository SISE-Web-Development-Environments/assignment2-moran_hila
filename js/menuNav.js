
function welcome() {
    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");

    welcome_div.style.display = "block";
    login_div.style.display = "none";
    register_div.style.display = "none";
    settings_div.style.display = "none"; 
    game_div.style.display = "none";
    if (!paused) Pause();
}

function login() {
    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");

    welcome_div.style.display = "none";
    login_div.style.display = "block";
    register_div.style.display = "none";
    settings_div.style.display = "none";
    game_div.style.display = "none";
    if (!paused) Pause();
    
}

function register() {
    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");

    welcome_div.style.display = "none";
    login_div.style.display = "none";
    register_div.style.display = "block";
    settings_div.style.display = "none";
    game_div.style.display = "none";
    if (!paused) Pause();
   
}


function about() {

    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");

    welcome_div.style.display = "none";
    login_div.style.display = "none";
    register_div.style.display = "none";
    settings_div.style.display = "none";
    game_div.style.display = "none";
    if (!paused) Pause();
}


function settings_nav() {
    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");

    welcome_div.style.display = "none";
    login_div.style.display = "none";
    register_div.style.display = "none";
    settings_div.style.display = "block";
    game_div.style.display = "none";
}


function game_nav() {
    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");

    welcome_div.style.display = "none";
    login_div.style.display = "none";
    register_div.style.display = "none";
    settings_div.style.display = "none";
    game_div.style.display = "block";  
    
    // if(paused){
    //     Pause();
    // }
    Start();

}

$("#register").click(function() {
    register();
    return false;
});

$("#login").click(function() {
    login();
    return false;
});
