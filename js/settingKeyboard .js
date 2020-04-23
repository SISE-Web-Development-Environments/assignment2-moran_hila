
$( "#upTarget" ).keydown(function( event ) { 
    if(checkKeyIsValid(event.which)){
        var keyName = event.key;
        document.getElementById("upTarget").value = keyName;
        //var keyUp =event.which;
    }

});


$( "#downTarget" ).keydown(function( event ) { 
    if(checkKeyIsValid(event.which)){
        var keyName = event.key;
        document.getElementById("downTarget").value = keyName;
        //var keyUp =event.which;
    }

});
$( "#rigthTarget" ).keydown(function( event ) { 
    if(checkKeyIsValid(event.which)){
        var keyName = event.key;
        document.getElementById("rigthTarget").value = keyName;
        //var keyUp =event.which;
    }

});
$( "#leftTarget" ).keydown(function( event ) { 
    if(checkKeyIsValid(event.which)){
        var keyName = event.key;
        document.getElementById("leftTarget").value = keyName;
        //var keyUp =event.which;
    }

});

function checkKeyIsValid(key){
    if(37<= key  && key<=40){
        return true;
    }
    else if(48<=key && key<=90){
        return true;
    }
    else if(76<=key  && key<=105){
        return true;
    }
    else{
        return false;
    }   
}