const cellElements = document.querySelectorAll("[data_cell]");
const board = document.querySelector("[data_board]");

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const swapTurns = () => {
    isCircleTurn = !isCircleTurn

    board.classList.remove('circle');
    board.classList.remove('x');

    if(isCircleTurn){
        board.classList.add("circle");
    } else {
        board.classList.add("x");
    }
};

const handleClick = (e) => {
    //Input the mark (X or Circle)
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";

    placeMark(cell, classToAdd);

    //Check the victory

    //Check a tie

    //Translate the simble

    swapTurns();
};

for (const cell of cellElements){
    cell.addEventListener("click", handleClick, {once: true});
}
