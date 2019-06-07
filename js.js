let player1 = prompt("First player name: ");


let player2 = prompt("Second player name: ");


let h6 = document.getElementById("name");

h6.innerHTML = "Player turn: " + player1 + ".";

var table = document.getElementsByClassName("cell");


let step = true;

let state = [1, 2, 3,
    4, 5, 6,
    7, 8, 9];


function check(state, player) {
    if (state[0] === state[1] && state[1] === state[2]) {
        setTimeout(function message() {
            alert("Player win: " + player + "!")
        }, 200);
    }
    if (state[3] === state[4] && state[4] === state[5]) {
        console.log("You win!");
    }
    if (state[6] === state[7] && state[7] === state[8]) {
        console.log("You win!");
    }
    if (state[0] === state[3] && state[3] === state[6]) {
        console.log("You win!");
    }
    if (state[1] === state[4] && state[4] === state[7]) {
        console.log("You win!");
    }
    if (state[2] === state[5] && state[5] === state[8]) {
        console.log("You win!");
    }
    if (state[0] === state[4] && state[4] === state[8]) {
        console.log("You win!");
    }
    if (state[2] === state[4] && state[4] === state[6]) {
        console.log("You win!");
    }

}


for (let i = 0; i < table.length; i++) {
    let obj = table[i];
    console.log(obj);
    obj.addEventListener("click", function () {
        if (step) {
            obj.innerHTML = "X";
            state[i] = "X";
            h6.innerHTML = "Player turn: " + player2 + ".";
            check(state, player1);
            console.log(state);
            step = !step;
        }
        else {
            obj.innerHTML = "O";
            state[i] = "O";
            h6.innerHTML = "Player turn: " + player1 + ".";
            check(state, player2);
            console.log(state);
            step = !step;
        }
    });

}
