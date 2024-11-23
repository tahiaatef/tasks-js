
document.addEventListener('keydown', (event) => {
    const key = event.key; 
    const code = event.keyCode; 
    const isAlt = event.altKey; 
    const isCtrl = event.ctrlKey;
    const isShift = event.shiftKey; 

    alert(`Key: ${key}\nASCII Code: ${code}\nAlt: ${isAlt}\nCtrl: ${isCtrl}\nShift: ${isShift}`);
});

document.addEventListener('contextmenu', (event) => {
    event.preventDefault(); 
    alert('Right-click is disabled on this page.');
});