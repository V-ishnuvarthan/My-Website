export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      console.log(pic);
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
      const list = col.querySelector('list');
      console.log(list);
      if (list) {
        const listWrapper = list.closest('div');
        if (listWrapper && listWrapper.children.length === 1) {
          listWrapper.classList.add('bg-circle');
        }
      }
    });
  });
}
// [...block.children].forEach((row, i) => {
//   const col1 = row.children[0];
//   const col1Div = document.createElement('div');
//   col1.classList.add(`row-${i}-col-1`);
//   col1Div.append(...col1.children);

//   const col2 = row.children[1];
//   const col2Div = document.createElement('div');
//   col2.classList.add(`row-${i}-col-2`);
//   col2Div.append(...col2.children);

//   const stepWrapper = document.createElement('div');
//   stepWrapper.classList.add(`step-${i}-step-container`);
//   stepWrapper.append(col1, col2);
// });
