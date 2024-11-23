
const flyingWindow = document.getElementById('flying-window');

let startX = window.innerWidth  / 2 - 50 ; 
let startY = window.innerHeight / 2 - 50; 
let offset = 30; 
let direction =1 ;

flyingWindow.style.left = `${startX}px`;
flyingWindow.style.top = `${startY}px`;

function animateWindow() {

    startX += direction * offset;
    startY += direction * offset;

    flyingWindow.style.left =` ${startX}px`;
    flyingWindow.style.top =` ${startY}px`;

    if (startX >= window.innerWidth - 150 || startX <= 0 || startY >= window.innerHeight - 100 || startY <= 0) {
        direction *= -1;
    }
}

setInterval(animateWindow, 500); 