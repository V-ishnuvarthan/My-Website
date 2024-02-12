export default function decorate(block) {
  const button = document.createElement('a');
  button.classList.add('button', 'show-more');
  button.setAttribute('href', '#');
  button.textContent = 'Show More..';
  const gallery = document.querySelector('.gallery');
  gallery.append(button);

  const showMore = document.querySelector('.show-more');
  const images = document.querySelectorAll('.gallery > div');
  console.log(images.length);
  for (let i = 8; i < images.length; i++) {
    images[i].classList.add('hide');
  }

  showMore.addEventListener('click', function () {
    for (let i = 8; i < images.length; i++) {
      images[i].classList.remove('hide');
    }
    showMore.style.display = 'none';
  });
}
