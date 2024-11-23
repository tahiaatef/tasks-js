const text = "Welcome to the typing window! This message will disappear after finishing t amet consectetur adipisicing elit. Natus, eligendi. Reiciendis labore et modi placeat ab, voluptatum molestias obcaecati, dicta nesciunt repellat suscipit debitis in perferendis? Iusto nam ex commodi?.";
const typingInterval = 100; 
let index = 0;

// ////////////////////////////////////////////////////////////

const typingWindow = window.open("", "", "width=400,height=200");

// ///////////////////////////////////////////////////////////////////
if (typingWindow) {

    typingWindow.document.write(`
        <html>
            <head>
                <title>Typing Window</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <div id="text-container"></div>
            </body>
        </html>
    `);
    const container = typingWindow.document.getElementById("text-container");
    const typeLetter = () => {
        if (index < text.length) {
            container.textContent += text[index];
            index++;
        } else {
            clearInterval(typingTimer); 
            setTimeout(() => typingWindow.close(), 1000); 
        }
    };

    const typingTimer = setInterval(typeLetter, typingInterval);
} else {
    alert("Please allow popups for this website to see the typing window.");
}
