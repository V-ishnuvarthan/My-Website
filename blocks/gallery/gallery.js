export default function decorate(block) {
  const button = document.createElement('a');
  button.classList.add('button');
  button.setAttribute('href', '#');
  button.textContent = 'Show More..';
  const gallery = document.querySelector('.gallery');
  gallery.append(button);
}
