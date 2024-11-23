document.getElementById("showResult").addEventListener("click", () => {
    const tagName = document.getElementById("tagName").value || "*";
    const className = document.getElementById("className").value;
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;

    let output = "";

    // /////////////////////////////////////////
    const tagElements = document.getElementsByTagName(tagName);
    output += `Number Of ${tagName}: ${tagElements.length} `;

    if (className) {
    const classElements = document.getElementsByClassName(className);
    output += `Class ${className}: ${classElements.length}` ;
}

// /////////////////////////////////////////
if (id) {
    const idElement = document.getElementById(id);
    output += `Id ${id}: ${idElement ? "True" : "False"}` ;
}

// //////////////////////////////////////////////
if (name) {
    const nameElements = document.getElementsByName(name);
    output += `Name ${name}: ${nameElements.length}` ;
}

// //////////////////////////////////////////////

document.getElementById("resultText  ").textContent = output;
});