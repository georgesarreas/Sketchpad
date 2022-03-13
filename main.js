let color = 'black';

//populate the container\
function createGrid(size) {
    let container = document.querySelector('.container');
    let cells = container.querySelectorAll("div");
    cells.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberOfCells = size*size ;

    for (let i=0; i<numberOfCells; i++){
        let cell=document.createElement("div");
        cell.addEventListener('mouseover', paintCell);
        cell.style.backgroundColor = 'white';
        container.insertAdjacentElement("beforeend" , cell);
    }
}

createGrid(16);

function reSize(input) {
    if (input>=2 && input<=100){
    createGrid(input);
    } else {
        console.log("number between 2 and 100");
    }
}

function paintCell() {
    this.style.backgroundColor = color ;
}

function pickColor(selection) {
    color = selection;
}

