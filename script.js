const GRID_WIDTH = 960;

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
        });
    });
}

document.getElementById('reset').addEventListener('click', () => {
    gridSize = window.prompt("What grid size?");
    buildGrid(gridSize);
    // document.querySelectorAll('.square').forEach(square => {
    //     square.classList.remove('hovered');
    // });
});

buildGrid(4);
