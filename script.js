const GRID_WIDTH = 960;
let red = 0;
let green = 0;
let blue = 0;
let rUp = true;
let gUp = true;
let bUp = true;

function buildGrid(gridSize){
    const container = document.getElementById('container')
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for (i = 0; i < gridSize; i++){
        const gridRow = document.createElement('div');
        for (j = 0; j < gridSize; j++){
            const currentDiv = document.createElement('div');
            const size = GRID_WIDTH / gridSize
            currentDiv.classList.add('square');
            currentDiv.style.width = size + "px";
            currentDiv.style.height = size + "px";
            gridRow.appendChild(currentDiv);
        }
        container.appendChild(gridRow)   
    }
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
            square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            
            if (rUp) red++;
            else red--;
            if (red <= 0) rUp = true;
            else if (red >= 255) rUp = false;

            if (gUp) green+=2;
            else green-=2;
            if (green <= 0) gUp = true;
            else if (green >= 255) gUp = false;

            if (bUp) blue+=4;
            else blue-=4;
            if (blue <= 0) bUp = true;
            else if (blue >= 255) bUp = false;
        });
    });
}

document.getElementById('reset').addEventListener('click', () => {
    gridSize = window.prompt("What grid size?");
    buildGrid(gridSize);
});

buildGrid(50);
