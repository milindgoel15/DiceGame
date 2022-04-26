let images = [
    "./images/dice-01.svg",
    "./images/dice-02.svg",
    "./images/dice-03.svg",
    "./images/dice-04.svg",
    "./images/dice-05.svg",
    "./images/dice-06.svg"
];

let dice = document.querySelectorAll("img");

const rollDice = () => {
    dice.forEach(die => {
        die.classList.add("shake");
    });
    setTimeout(() => {
        dice.forEach(die => {
            die.classList.remove("shake");
        });

        let randomVar1 = Math.floor(Math.random() * 6);
        let randomVar2 = Math.floor(Math.random() * 6);

        // console.log(randomVar1, randomVar2);

        document.querySelector("#die1").setAttribute("src", images[randomVar1]);
        document.querySelector("#die2").setAttribute("src", images[randomVar2]);

        if (randomVar1 > randomVar2) {
            document.querySelector(".result").innerHTML = "Player 1 Won! 🚩"
        } else if (randomVar1 < randomVar2) {
            document.querySelector(".result").innerHTML = "Player 2 Won! 🚩"
        } else {
            document.querySelector(".result").innerHTML = "Match Drawn!!"
        }
    }, 400);
}