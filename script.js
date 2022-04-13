const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
const grid_size = document.querySelector('#grid-size');

createGrid();

grid_size.oninput = () => {
    container.innerHTML='';
    createGrid();
}
function createGrid(){
    let size = 500/Number(grid_size.value);
    console.log(size);
    for(let i = 0; i<grid_size.value*grid_size.value; i++){ 
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.cssText = `width: ${size}px; height: ${size}px;`;
        container.appendChild(div);
    }
    changeColor();
}

function changeColor (){
    //can not place this code before these squares are added to the container
    const squares = document.querySelectorAll('.square'); 
    squares.forEach(square=>{
        console.log(square);
        console.log("sjdfksdjf");
        square.onmouseover = () =>{
            square.classList.add("changedColor");
        }
    });
}

reset.onclick = () => {
    const squares = document.querySelectorAll('.square'); 
    squares.forEach(square=>{
        square.classList.remove("changedColor");
    });
}


