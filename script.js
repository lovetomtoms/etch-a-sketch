const body = document.querySelector('body');

const button = document.createElement('button');
button.textContent = 'Create a grid';
body.appendChild(button);

button.addEventListener('click', createGrid);
    
function createGrid() {
    const contain = document.querySelector('#container');
    if (contain !== null) {
        body.removeChild(contain);
    }
    let num = 0;
    let test = 0;
    do{
        num = parseInt(prompt('Enter a number of squares per side for grid (1 to 100 only): '));
        test = ((800 / num) / 800) * 100;
    }
    while (num > 100 || isNaN(num) || num === 0);
    console.log(num);
    const container = document.createElement('div');
    container.id = 'container';
    container.style.gridTemplateColumns = `repeat(auto-fill, minmax(${test}%, 1fr))`;
    body.appendChild(container);
    for (let i = 0; i < parseInt(num) ** 2; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        let hover = 255;
        box.addEventListener('mouseover', colorBackground);
        function colorBackground (e) {
            hover -= 255 * 0.1;
            console.log(hover);
            if (hover >= 0) {
                box.style.background = `rgb(${hover}, ${hover}, ${hover})`;
            } else {
                box.removeEventListener('click', colorBackground);
            }
        }
        container.appendChild(box);
        
    }
}


// function colorBackground () {
//     let hover = 255;
//     hover += 255 * 0.1;
//     if (hover >= 0) {
//         box.style.background = `rgb(${hover}, ${hover}, ${hover})`;
//     } else {
//         box.removeEventListener('mouseover', colorBackground);
//     }
// }