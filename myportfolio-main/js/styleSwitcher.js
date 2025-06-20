const links = document.querySelectorAll('.alternate-style'),
  totalLinks = links.length;

function setActiveStyle(color) {
  for (let i = 0; i < totalLinks; i++) {
    if (color === links[i].getAttribute('title')) {
      links[i].removeAttribute('disabled');
    } else {
      links[i].setAttribute('disabled', true);
    }
  }
}

// Body skin radio buttons
const bodySkin = document.querySelectorAll('.body-skin'),
  totalBodySkin = bodySkin.length;

// Check and apply the default skin on page load
document.addEventListener('DOMContentLoaded', function () {
  const defaultSkin = document.querySelector('input[name="body-skin"]:checked').value;
  if (defaultSkin === 'dark') {
    document.body.className = 'dark';
  } else {
    document.body.className = '';
  }
});

// Listen for changes on the radio buttons
for (let i = 0; i < totalBodySkin; i++) {
  bodySkin[i].addEventListener('change', function () {
    if (this.value === 'dark') {
      document.body.className = 'dark';
    } else {
      document.body.className = '';
    }
  });
}

document.querySelector('.toggle-style-switcher').addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
});
