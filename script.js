const container_1 = document.querySelector(".content-1")
const container_2 = document.querySelector(".content-2")

const play_btn = document.querySelector(".play-btn")
play_btn.addEventListener("click", function () {
    container_1.style.display = "none"
    container_2.style.display = "flex"

})


let humanScore = 0
let computerScore = 0

let computerChoiceNum
let humanChoiceNum

const numberOfRounds = 5

let i = 1

const round_number = document.querySelector(".round-number")
round_number.textContent = i


const rockBtn = document.querySelector("#rock")

rockBtn.addEventListener("click", (humanChoiceNum) => {
    humanChoiceNum = 0
    humanChoiceFunction(humanChoiceNum)   //passing the variable to the functuon bcoz in this event listener function, the value of the variable is changing, so i need t0 pass it to the function so that updated value is passed to the function
    i++
    gameFunction(humanChoiceNum, i)

})

const paperBtn = document.querySelector("#paper")

paperBtn.addEventListener("click", (humanChoiceNum) => {
    humanChoiceNum = 1
    humanChoiceFunction(humanChoiceNum)
    i++
    gameFunction(humanChoiceNum, i)
})

const scissorsBtn = document.querySelector("#scissors")

scissorsBtn.addEventListener("click", (humanChoiceNum) => {
    humanChoiceNum = 2
    humanChoiceFunction(humanChoiceNum)
    i++
    gameFunction(humanChoiceNum, i)
})

function humanChoiceFunction(humanChoiceNum) {
    return humanChoiceNum
}

function computerChoiceFunction() {
    computerChoiceNum = Math.floor(Math.random() * 3)
    return computerChoiceNum
}


function gameFunction(humanChoiceNum, i) {

    computerChoiceFunction()
    humanChoiceFunction(humanChoiceNum)

    const round_number = document.querySelector(".round-number")
    round_number.textContent = i

    const result_msg = document.querySelector(".result-msg")
    const human_score = document.querySelector(".human-score")
    const computer_score = document.querySelector(".computer-score")

    if (humanChoiceNum == 0 && computerChoiceNum == 1) {
        computerScore++
        result_msg.textContent = "Paper Blocks Rock, computer won the round!"
    }

    else if (humanChoiceNum == 1 && computerChoiceNum == 2) {
        computerScore++
        result_msg.textContent = "Scissors cut Paper, computer won the round!"
    }

    else if (humanChoiceNum == 2 && computerChoiceNum == 0) {
        computerScore++
        result_msg.textContent = "Rock smashes Scissors, computer won the round!"
    }

    else if (humanChoiceNum == 1 && computerChoiceNum == 0) {
        humanScore++
        result_msg.textContent = "Paper Blocks Rock, you won the round!"
    }

    else if (humanChoiceNum == 2 && computerChoiceNum == 1) {
        humanScore++
        result_msg.textContent = "Scissors cut Paper, you won the round!"
    }

    else if (humanChoiceNum == 0 && computerChoiceNum == 2) {
        humanScore++
        result_msg.textContent = "Rock smashes Scissors, you won the round!"
    }

    else if (humanChoiceNum == computerChoiceNum) {
        result_msg.textContent = "It's a tie!"
    }

    human_score.textContent = humanScore
    computer_score.textContent = computerScore

    if (computerScore == 5 || humanScore == 5) {
        finalResult(humanScore, computerScore)
    }
}

function finalResult(humanScore, computerScore) {
    container_2.style.display = "none"
}































// let humanScore = 0
// let computerScore = 0

// let computerChoiceNum
// let humanChoiceNum

// const numberOfRounds = 5

// function humanChoiceFunction() {
//     let humanChoice
//     humanChoice = prompt("choose from Rock, Paper and Scissors")
//     if (humanChoice == "r") {
//         humanChoiceNum = 0
//     }
//     else if (humanChoice == "p") {
//         humanChoiceNum = 1
//     }
//     else if (humanChoice == "s") {
//         humanChoiceNum = 2
//     }
//     return humanChoiceNum
// }

// function computerChoiceFunction() {
//     computerChoiceNum = Math.floor(Math.random() * 3)
//     return computerChoiceNum
// }

// function gameWinnerFunction() {

//     if (humanScore == 5) {
//         alert("human won")
//     }

//     else {
//         alert("computer won")
//     }
// }

// function gameFunction() {

//     for (let i = 1; i > 0; i++) {

//         if (humanScore == 5 || computerScore == 5) {
//             gameWinnerFunction()
//             break
//         }

//         else {

//             humanChoiceFunction()
//             computerChoiceFunction()

//             if (humanChoiceNum == 0 && computerChoiceNum == 1) {
//                 computerScore++
//             }

//             else if (humanChoiceNum == 1 && computerChoiceNum == 2) {
//                 computerScore++
//             }

//             else if (humanChoiceNum == 2 && computerChoiceNum == 0) {
//                 computerScore++
//             }

//             else if (humanChoiceNum == 1 && computerChoiceNum == 0) {
//                 humanScore++
//             }

//             else if (humanChoiceNum == 2 && computerChoiceNum == 1) {
//                 humanScore++
//             }

//             else if (humanChoiceNum == 0 && computerChoiceNum == 2) {
//                 humanScore++
//             }

//             else if (humanChoiceNum == computerChoiceNum) {
//                 continue
//             }
//         }
//     }
// }

// gameFunction()