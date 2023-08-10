const themeButtons = document.querySelectorAll('.theme-menu__button');

themeButtons.forEach((button) => {
  button.onclick = () => {
    changeTheme(button.getAttribute('data-theme'));
  };
});

function changeTheme(theme) {
  document.body.className = 'page';
  document.body.classList.add(`theme-${theme}`);
  setDisabled(theme);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
  }
}

function setDisabled(theme) {
  themeButtons.forEach((item) => {
    if (item.getAttribute('data-theme') === theme) {
      item.setAttribute('disabled', true);
    } else {
      item.removeAttribute('disabled');
    }
  });
}

initTheme();
