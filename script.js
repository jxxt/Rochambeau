let humanScore = 0
let computerScore = 0

let computerChoiceNum
let humanChoiceNum

function humanChoiceFunction() {
    let humanChoice
    humanChoice = prompt("choose from Rock, Paper and Scissors")
    if (humanChoice == "rock") {
        humanChoiceNum = 0
    }
    else if (humanChoice == "paper") {
        humanChoiceNum = 1
    }
    else if (humanChoice == "scissors") {
        humanChoiceNum = 2
    }
    return humanChoiceNum
}

function computerChoiceFunction() {
    let computerChoice
    computerChoiceNum = Math.floor(Math.random() * 3);
}

function game() {
    for (let i = 0; i < 5; i++) {
        humanChoiceFunction()
        computerChoiceFunction()
        console.log("humanCh " + humanChoiceNum)
        console.log("computerCh " + computerChoiceNum)

        if (humanChoiceNum == 0 && computerChoiceNum == 1) {
            computerScore++
            console.log("humanSc " + humanScore)
            console.log("computerSc " + computerScore)
        }
        else if (humanChoiceNum == 1 && computerChoiceNum == 2) {
            computerScore++
            console.log("humanSc " + humanScore)
            console.log("computerSc " + computerScore)
        }
        else if (humanChoiceNum == 2 && computerChoiceNum == 0) {
            computerScore++
            console.log("humanSc " + humanScore)
            console.log("computerSc " + computerScore)
        }
        else if (humanChoiceNum == 1 && computerChoiceNum == 0) {
            humanScore++
            console.log("humanSc " + humanScore)
            console.log("computerSc " + computerScore)
        }
        else if (humanChoiceNum == 2 && computerChoiceNum == 1) {
            humanScore++
            console.log("humanSc " + humanScore)
            console.log("computerSc " + computerScore)
        }
        else if (humanChoiceNum == 0 && computerChoiceNum == 2) {
            humanScore++
            console.log("humanSc " + humanScore)
            console.log("computerSc " + computerScore)
        }
        else if (humanChoiceNum == computerChoiceNum) {
            console.log("humanSc " + humanScore)
            console.log("computerSc " + computerScore)
            continue
        }
    }
}

game()

// if (humanScore == 5) {
//     alert("human wins " + humanScore)
// }
// else {
//     alert("computer wins " + humanScore)
// }