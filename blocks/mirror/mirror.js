export default function decorate(block) {
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('mirror-img');
        }
      }
    });
  });
}

// Select the <h2> element
const h2Element = document.querySelector('h2');

// Select the <div> element with class "mirror"
const mirrorDiv = document.querySelector('.mirror');

// Select the parent element of the <h2> element
//const parentOfH2 = querySelector('.mirror >');

// Append the <h2> element as a child of the <div> element
mirrorDiv.appendChild(h2Element);

// Remove the <h2> element from its original parent
//parentOfH2.remove('');
