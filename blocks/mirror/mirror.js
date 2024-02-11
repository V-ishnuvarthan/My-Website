export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    console.log(i);
    const col1 = row.children[0];
    console.log(col1);
    const col1Div = document.createElement('div');
    col1.classList.add(`row-${i}-col-1`);
    col1Div.append(...col1.children);

    const col2 = row.children[1];
    const col2Div = document.createElement('div');
    col2.classList.add(`row-${i}-col-2`);
    col2Div.append(...col2.children);

    const stepWrapper = document.createElement('div');
    stepWrapper.classList.add(`step-${i}`, 'step-container');
    stepWrapper.append(col1, col2);
  });
}
