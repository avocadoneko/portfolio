const modal = document.getElementById('modal');
const openBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('modal-close-btn');
const about = document.getElementById('about');
const works = document.getElementById('works');
const contact = document.getElementById('contact');

openBtn.addEventListener('click', function () {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target === modal || e.target === about || e.target === works || e.target === contact) {
    modal.style.display = 'none';
  }
});
