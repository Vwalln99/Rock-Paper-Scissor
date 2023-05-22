

function computerPlay() {
    let zufall = ["schere", "stein", "papier"];
    let computerZufall = Math.floor(Math.random() * 3);
    return zufall[computerZufall];
}

function playRound() {

    const playerSelect = prompt("Wähle Schere, Stein oder Papier: ").toLowerCase();
    const computerSelect = computerPlay();

    if (playerSelect === computerSelect) {
        return 0;
    }
    else if (
        (playerSelect === "schere" && computerSelect === "papier") ||
        (playerSelect === "stein" && computerSelect === "schere") ||
        (playerSelect === "papier" && computerSelect === "stein") ||
        (playerSelect === "papier" && computerSelect === "schere") ||
        (playerSelect === "schere" && computerSelect === "stein") ||
        (playerSelect === "stein" && computerSelect === "papier")
    ) {

        return 1;


    } else {

        return 2;


    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let keinScore = 0;

    for (let i = 0; i < 5; i++) {
        let winner = playRound();

        if (winner === 1) {
            playerScore++;

        }
        else if (winner === 2) {
            computerScore++;

        }
        else if (winner===0){
            keinScore++;
        }


    }
    console.log("Punkte Computer: ", computerScore, " Punkte Spieler: ", playerScore, " Untentschieden: ",keinScore);
}

game();



















