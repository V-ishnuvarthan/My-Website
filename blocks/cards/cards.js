import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture'))
        div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  const pic = ul.querySelectorAll('picture');
  if (pic) {
    pic.forEach((img) =>
      img
        .closest('picture')
        .replaceWith(
          createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])
        )
    );
    block.textContent = '';
    block.append(ul);
  }
}

const h2Element = document.querySelector('h2');

// Select the <div> element with class "mirror"
const mirrorDiv = document.querySelector('.cards');

// Select the parent element of the <h2> element
const parentOfH2 = h2Element.parentElement;

// Append the <h2> element as a child of the <div> element
mirrorDiv.appendChild(h2Element);

// Remove the <h2> element from its original parent
parentOfH2.removeChild(h2Element);
