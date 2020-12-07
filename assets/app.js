'use strict'

let modeToggler = document.getElementById('mode-toggler');
let darkModeText = document.querySelectorAll('.dark-mode-text-compliant');

modeToggler.innerText = 'View in dark mode';
makeBtn(modeToggler, 'black', 'white');
modeToggler.addEventListener('click', toggleMode);

function toggleMode() {
  if (modeToggler.innerText == 'View in dark mode') {
    modeToggler.innerText = 'I prefer white';
    makeBtn(modeToggler, '#f5f5f5', 'black');
    changeBodyColor('#1F2937');
    changeColor(darkModeText, 'white');
  } else {
    modeToggler.innerText = 'View in dark mode';
    makeBtn(modeToggler, 'black', 'white');
    changeBodyColor('white');
    changeColor(darkModeText, '#1F2937');
  }
}

function makeBtn(el, bgColor, color) {
  el.style.backgroundColor = bgColor;
  el.style.color = color;
}

function changeBodyColor(bgColor) {
  document.querySelector('body').style.backgroundColor = bgColor;
}

function changeColor(el, color) {
  el.forEach(function (item) {
    item.style.color = color;
  });
}
