
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

function HoverChange(e) {
    // if(e.type === 'mouseover' && 'mousedown') return;
    this.style.backgroundColor = "red";
    return false;
}

function ResetGrid() {
    console.log("button pressed");

    while(main.firstChild){
        main.removeChild(main.firstChild);
    }

    let side = prompt("Enter the size grid you want to draw")

    if(side > 150){side = 150;}

    addGrid(side, side);

    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('mouseover', HoverChange);
        // box.addEventListener('mousedown', HoverChange);
    });
}

addGrid();


newGrid.addEventListener('click', ResetGrid);
//newGrid.addEventListener('click', () => addGrid());