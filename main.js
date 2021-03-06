let color = 'black';
let click = true ;

//populate the container\
function createGrid(size) {
    let container = document.querySelector('.container');
    let cells = container.querySelectorAll('div');
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
    if (input>=2 && input<=200){
        document.getElementById('notInRange').style.display = 'none';
        createGrid(input);
    } else {
        document.getElementById('notInRange').style.display = 'flex';
    }
};

function paintCell() {
    if (click){
        if( color === 'rainbow'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
        }else {
            this.style.backgroundColor = color ;
        }
    }

};

function pickColor(selection) {
    color = selection;
};

function clearCont(){
    let container = document.querySelector('.container');
    let cells = container.querySelectorAll('div');
    cells.forEach((div) => (div.style.backgroundColor = "white"));
};

document.querySelector('body').addEventListener('click' , ()=> {
    click = !click;
});