const redLight = document.getElementById("red-light");
const yellowLight = document.getElementById("yellow-light");
const greenLight = document.getElementById("green-light");
const statusText = document.getElementById("status");

let currentLight = 0;

function updateTrafficLight() {
    redLight.classList.remove("red");
    yellowLight.classList.remove("yellow");
    greenLight.classList.remove("green");

    if (currentLight === 0) {
        redLight.classList.add("red");
        statusText.textContent = "Stop";
        statusText.style.color = "red";
    } else if (currentLight === 1) {
        yellowLight.classList.add("yellow");
        statusText.textContent = "Steady";
        statusText.style.color = "orange";
    } else {
        greenLight.classList.add("green");
        statusText.textContent = "Go";
        statusText.style.color = "green";
    }

    currentLight = (currentLight + 1) % 3;
}

setInterval(updateTrafficLight, 1000);
