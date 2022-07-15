//  Elementleri seçmek

let hoursE = document.getElementById('hours') 
let minutesE = document.getElementById('minutes') 
let secondsE = document.getElementById('seconds') 


window.onload = displayHours();
function displayHours(){
    var display = new Date().getHours();
    hoursE.innerHTML = display;
    setTimeout(displayHours, 1000); 
}

function displayMinutes(){
    var display = new Date().getMinutes();
    minutesE.innerHTML = display;
    setTimeout(displayMinutes, 1000); 
}
window.onload = displayMinutes();

function displaySeconds(){
    var display = new Date().getSeconds();
    secondsE.innerHTML = '0' + display;
    if(display > 10){
        secondsE.innerHTML = display
    }
    setTimeout(displaySeconds, 1000); 
}
window.onload = displaySeconds();