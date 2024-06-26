const toggleIcon = document.getElementById('toggle-icon');
const isDarkModeStored = localStorage.getItem('isDarkMode');
const isDarkMode = isDarkModeStored ? JSON.parse(isDarkModeStored) : false;
const sunPath = 'assets/img/light.png'
const moonPath = 'assets/img/dark.png'

document.body.classList.toggle('dark-mode', isDarkMode);
toggleIcon.src = isDarkMode ? moonPath : sunPath;

toggleIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  toggleIcon.src = isDarkMode ? moonPath : sunPath;
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
});
