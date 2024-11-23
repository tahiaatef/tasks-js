let images = ['./imgs/m6.webp', './imgs/m7.jpg', './imgs/m7.webp', './imgs/m8.webp'];
let currentIndex = 0;
let slider = document.getElementById('slider').getElementsByTagName('img')[0];
let interval;

document.getElementById('play').addEventListener('click', () => {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        slider.src = images[currentIndex];
    }, 2000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    slider.src = images[currentIndex];
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slider.src = images[currentIndex];
});
