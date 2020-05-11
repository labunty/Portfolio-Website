var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i < 6; i++) {
  var newImage = document.createElement('img');
  let pathToImg = 'images/pic' + i + '.jpg'
  newImage.setAttribute('src', pathToImg);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', switchImage);
}

function switchImage(e) {
  displayedImage.setAttribute('src', e.target.getAttribute('src'));
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
  if(btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.innerHTML = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class', 'dark');
    btn.innerHTML = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}
