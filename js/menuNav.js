
function welcame() {
    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");
    var about_div = document.getElementById("AboutDiv");

    welcome_div.style.display = "block";
    login_div.style.display = "none";
    register_div.style.display = "none";
    settings_div.style.display = "block";       //  NeedToChangTO: none
    game_div.style.display = "none";
    about_div.style.display = "block";

    if (!paused) Pause();
  }

function login() {
    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");
    var about_div = document.getElementById("AboutDiv");

    welcome_div.style.display = "none";
    login_div.style.display = "block";
    register_div.style.display = "none";
    settings_div.style.display = "none";
    game_div.style.display = "none";
    about_div.style.display = "block";

    if (!paused) Pause();
}

function register() {
    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");
    var about_div = document.getElementById("AboutDiv");

    welcome_div.style.display = "none";
    login_div.style.display = "none";
    register_div.style.display = "block";
    settings_div.style.display = "none";
    game_div.style.display = "none";
    about_div.style.display = "block";

    if (!paused) Pause();
}


function about() {

    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");
    var about_div = document.getElementById("AboutDiv");

    welcome_div.style.display = "none";
    login_div.style.display = "none";
    register_div.style.display = "none";
    settings_div.style.display = "none";
    game_div.style.display = "none";
    about_div.style.display = "block";

    if (!paused) Pause();
}


function settings_nav() {
    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");
    var about_div = document.getElementById("AboutDiv");

    welcome_div.style.display = "none";
    login_div.style.display = "none";
    register_div.style.display = "none";
    settings_div.style.display = "block";
    game_div.style.display = "none";
    about_div.style.display = "block";
}


function game_nav() {
    var welcome_div = document.getElementById("WelcomeDiv");
    var login_div = document.getElementById("LoginDiv");
    var register_div = document.getElementById("RegisterDiv");
    var settings_div = document.getElementById("SettingsDiv");
    var game_div = document.getElementById("GameDiv");
    var about_div = document.getElementById("AboutDiv");

    welcome_div.style.display = "none";
    login_div.style.display = "none";
    register_div.style.display = "none";
    settings_div.style.display = "none";
    game_div.style.display = "block";
    about_div.style.display = "block";
    SetSettings();
   
}

$(document).ready(function () {
    $('.modal-toggle').on('click', function(e) {
        e.preventDefault();
        $('.modal').toggleClass('is-visible');
        addEventListener('keydown', function(e) {
            var code = e.keyCode || e.which;
            var mdl=$('.modal').attr('class');
            if (code == 27 && mdl==='modal is-visible')
            {
                e.preventDefault();
                $(".modal").toggleClass('is-visible');
            }
        });
    });
});
