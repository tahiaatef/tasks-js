const toggleBtn = document.getElementById('toggle-btn');

let currentMode = 'light';

// /////////////////////////////////////////////////////////////

const setMode = (mode) => {
  const head = document.head;
  const existingLink = document.getElementById('theme-style');

  // ////////////////////////////////////////////////////////////////

  if (existingLink) {
    head.removeChild(existingLink);
  }

  // //////////////////////////////////////////////////////////////

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.id = 'theme-style';
  link.href = `css/${mode}-mode.css`;

  head.appendChild(link);
};

// /////////////////////////////////////////////////////////////////

  toggleBtn.addEventListener('click', () => {
  currentMode = currentMode === 'light' ? 'dark' : 'light';
  setMode(currentMode);
  toggleBtn.textContent = currentMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
});

setMode(currentMode);