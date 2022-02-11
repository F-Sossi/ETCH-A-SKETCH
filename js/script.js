
var cols = 16;
var rows = 16;
const main = document.querySelector("#main");
const newGrid = document.querySelector("#newGrid");


function addGrid(){
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

addGrid();
//newGrid.addEventListener('click', () => addGrid());