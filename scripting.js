let dice1 = 0;
let dice2 = 0;
let total = 0;

function rollDice() {
    dice1 = parseInt ((Math.random() * 6) + 1);
    dice2 = parseInt ((Math.random() * 6) + 1);
    update1();
    update2();
    const sum = dice1 + dice2;
    total1.textContent = `Total: ${sum}`;
}

function update1() {
    dice3.textContent = `Dice 1: ${dice1}`;
}

function update2() {
    dice4.textContent = `Dice 2: ${dice2}`;
}


const rolling = document.querySelector("roll");
const adding = document.querySelector("add");
roll.addEventListener("click", rollDice);