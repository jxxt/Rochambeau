let humanScore = 0
let computerScore = 0

let computerChoiceNum
let humanChoiceNum

let numberOfRounds = 5

function humanChoiceFunction() {
    let humanChoice
    humanChoice = prompt("choose from Rock, Paper and Scissors")
    if (humanChoice == "r") {
        humanChoiceNum = 0
    }
    else if (humanChoice == "p") {
        humanChoiceNum = 1
    }
    else if (humanChoice == "s") {
        humanChoiceNum = 2
    }
    return humanChoiceNum
}

function computerChoiceFunction() {
    let computerChoice
    computerChoiceNum = Math.floor(Math.random() * 3)
    return computerChoiceNum
}

function gameWinnerFunction() {

    if (humanScore == 5) {
        alert("human won")
    }

    else {
        alert("computer won")
    }
}

function gameFunction() {

    for (let i = 1; i > 0; i++) {

        if (humanScore == 5 || computerScore == 5) {
            gameWinnerFunction()
            break
        }

        else {

            humanChoiceFunction()
            computerChoiceFunction()

            if (humanChoiceNum == 0 && computerChoiceNum == 1) {
                computerScore++
            }

            else if (humanChoiceNum == 1 && computerChoiceNum == 2) {
                computerScore++
            }

            else if (humanChoiceNum == 2 && computerChoiceNum == 0) {
                computerScore++
            }

            else if (humanChoiceNum == 1 && computerChoiceNum == 0) {
                humanScore++
            }

            else if (humanChoiceNum == 2 && computerChoiceNum == 1) {
                humanScore++
            }

            else if (humanChoiceNum == 0 && computerChoiceNum == 2) {
                humanScore++
            }

            else if (humanChoiceNum == computerChoiceNum) {
                continue
            }
        }
    }
}

gameFunction()