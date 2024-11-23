
document.getElementById("validationForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const errors = [];
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const sports = document.querySelectorAll('input[name="sports"]:checked');
    const country = document.getElementById("country").value;
    const errorMessages = document.getElementById("errorMessages");


    if (!name){
        errors.push("Name is required.");
    } 
    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errors.push("Email is not valid.");
    }
    
        
    if (!password || password.length < 8) {
        errors.push("Password must be 8 characters at least.");
    }
        
    if (!gender) {
        errors.push("Please select your gender.");
    }
        
    if (sports.length < 2) {
        errors.push("Please select at least two sports.");
    }
      
    if (!country){
        errors.push("Please select your country.");
    }
  
    errorMessages.innerHTML = "";
    if (errors.length > 0) {
      errorMessages.classList.remove("hidden");
      errors.forEach((error) => {
        const errorItem = document.createElement("div");
        errorItem.textContent = `- ${error}`;
        errorMessages.appendChild(errorItem);
      });
    } else {
      errorMessages.classList.add("hidden");
      errorMessages.innerHTML = "Form submitted successfully!";
      errorMessages.style.background = "transparent";
      errorMessages.style.color = "green";
    }
  });
  