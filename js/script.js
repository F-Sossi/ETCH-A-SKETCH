
const main = document.querySelector("#main");
const newGrid = document.querySelector("#newGrid");


function addGrid(rows, cols){
    for(let i = 0; i < rows; i++){
        let row = document.createElement("div");
        row.className = "row";
        for(let j = 0; j < cols; j++){
            let col = document.createElement("div");
            col.className = "box";
            row.append(col);
        }
        
        main.appendChild(row);
    }
}

function HoverChange() {
    this.style.backgroundColor = "red";
    return false;
}

function ResetGrid() {
    console.log("button pressed");

    while(main.firstChild){
        main.removeChild(main.firstChild);
    }

    addGrid(50, 50);

    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('mouseover', HoverChange);});
}

addGrid();


newGrid.addEventListener('click', ResetGrid);
//newGrid.addEventListener('click', () => addGrid());