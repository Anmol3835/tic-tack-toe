let value = true; // Track which player's turn it is
const resetBtn = document.querySelector("#btn");
let count;
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", function() {
        if (box.innerHTML === "") {  // Prevent clicking on an already clicked box
            const currentPlayer = value ? "X" : "O";
            box.innerHTML = currentPlayer;
            value? value=false : value=true;
            count++;
        }      
        if(count === 9){
            alert("It's a draw!");
            resetGame();
        }
        checkWinner();
    });
    
const checkWinner = ()=> {
    for(let win of wins) {
        let pos1=boxes[win[0]].innerText;
        let pos2=boxes[win[1]].innerText;
        let pos3=boxes[win[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                callWinner(pos1);
            }
        }       
    };
}
});
function callWinner(value) {
    alert(`Player ${value} wins!`);

};
resetBtn.addEventListener("click", ()=>{
    boxes.forEach(box => {
        box.innerHTML = "";
    });
    value = true;
    count = 0;
});
   