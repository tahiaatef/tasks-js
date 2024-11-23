let selectedGender = null;

function selectGender(gender) {
    selectedGender = gender;
  }
  
  document.getElementById("submitBtn").addEventListener("click", function () {
  
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const color = document.getElementById("color").value;
    
    if (!selectedGender) {
      alert("Please select a gender.");
      return;
    }
  
    document.cookie = `name=${name}; path=/;`;
    document.cookie = `age=${age}; path=/;`;
    document.cookie = `color=${color}; path=/;`;
    document.cookie = `gender=${selectedGender}; path=/;`;


    window.location.href = "profile.html";
  });