
function validateTwoParameters(param1, param2) {
    if (arguments.length !== 2) {
        throw new Error("Function requires exactly 2 parameters.");
    }
    return `Parameters accepted: ${param1}, ${param2}`;
}

function addNumbers(...numbers) {
    if (numbers.length === 0) {
        throw new Error("No parameters provided. At least one number is required.");
    }
    numbers.forEach(num => {
        if (typeof num !== "number") {
            throw new Error("All parameters must be of type 'number'.");
        }
    });
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return` Sum of numbers: ${sum}`;
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const param1 = document.getElementById("param1").value;
    const param2 = document.getElementById("param2").value;
    const numbersInput = document.getElementById("numbers").value;

const numbers = numbersInput.split(",").map(num => parseFloat(num.trim()));

const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; 

 
  try {
      const result1 = validateTwoParameters(param1, param2);
      outputDiv.innerHTML += `<p>${result1}</p>`;
  } catch (error) {
      outputDiv.innerHTML += `<p style="color: red;">${error.message}</p>`;
  }

  try {
      const result2 = addNumbers(...numbers);
      outputDiv.innerHTML +=` <p>${result2}</p>`;
  } catch (error) {
      outputDiv.innerHTML += `<p style="color: red;">${error.message}</p>`;
  }
});