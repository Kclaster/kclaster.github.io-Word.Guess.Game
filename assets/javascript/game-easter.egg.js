var name, userchoice;

document.onkeyup = function (event) {
    if (typeof userchoice === 'undefined') {
      userchoice = event.key; 
    } else {
        userchoice += event.key;
    };
   

    document.getElementById("named-champion").innerHTML = '1. ' + userchoice;

};