function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookies = decodeURIComponent(document.cookie);
  const cookiesArray = decodedCookies.split(';');
  for (let cookie of cookiesArray) {
    cookie = cookie.trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
}

function updateVisitCount() {
  let visits = parseInt(getCookie("visits") || "0") + 1;
  document.cookie = `visits=${visits}; path=/;`;
  return visits;
}

function setupProfilePage() {
  const name = getCookie("name")  || "Guest";
  const color = getCookie("color") || "#000000";
  const gender = getCookie("gender") || "male";
  const visits = updateVisitCount();

  // const greetingElement = document.getElementById("greeting");
  // greetingElement.innerText = `Hi, ${name}!`;
  // greetingElement.style.color = color;

const greetingElement = document.getElementById("greeting");
if (greetingElement) {
  greetingElement.innerText = `Hi, ${name}!`;
  greetingElement.style.color = color;
} else {
  console.error("Element with id 'greeting' not found!");
}


  const visitCountElement = document.getElementById("visit-count");
  visitCountElement.innerText = `This is your visit number: ${visits}`;

  const profilePicElement = document.getElementById("profile-pic");
  if (gender === "male") {
    profilePicElement.style.backgroundImage = "url('E:/iti%204%20month/javascript/day5/lab6/task1/imgs/img_boy.jpg')";
  } else if (gender === "female") {
    profilePicElement.style.backgroundImage = "url('E:/iti%204%20month/javascript/day5/lab6/task1/imgs/img_girl.jpg')";
  }
  profilePicElement.style.backgroundSize = "cover";
  profilePicElement.style.backgroundPosition = "center";
}

window.onload = function() {
  setTimeout(setupProfilePage, 200); 
};




