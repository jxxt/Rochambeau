let i

let humanScore
let computerScore

let computerChoiceNum
let humanChoiceNum

const numberOfRounds = 5

const container_1 = document.querySelector(".content-1")
const container_2 = document.querySelector(".content-2")

const round_number = document.querySelector(".round-number")

const result_msg = document.querySelector(".result-msg")

const human_score = document.querySelector(".human-score")
const computer_score = document.querySelector(".computer-score")

const play_btn = document.querySelector(".play-btn")

play_btn.addEventListener("click", function () {

    i = 1                          //setting everything to default value when play btn is clicked
    humanScore = 0
    computerScore = 0

    container_1.style.display = "none"
    container_2.style.display = "flex"

    round_number.textContent = i

    human_score.textContent = humanScore
    computer_score.textContent = computerScore

    result_msg.textContent = "\u00A0"   //balnk space
})

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

    round_number.textContent = i

    if (humanChoiceNum == 0 && computerChoiceNum == 1) {
        computerScore++
        result_msg.textContent = "Computer chose Paper, computer won the round!"
    }

    else if (humanChoiceNum == 1 && computerChoiceNum == 2) {
        computerScore++
        result_msg.textContent = "Computer chose Scissors, computer won the round!"
    }

    else if (humanChoiceNum == 2 && computerChoiceNum == 0) {
        computerScore++
        result_msg.textContent = "Computer chose Rock, computer won the round!"
    }

    else if (humanChoiceNum == 1 && computerChoiceNum == 0) {
        humanScore++
        result_msg.textContent = "Computer chose Rock, you won the round!"
    }

    else if (humanChoiceNum == 2 && computerChoiceNum == 1) {
        humanScore++
        result_msg.textContent = "Computer chose Paper, you won the round!"
    }

    else if (humanChoiceNum == 0 && computerChoiceNum == 2) {
        humanScore++
        result_msg.textContent = "Computer chose Scissors, you won the round!"
    }

    else if (humanChoiceNum == computerChoiceNum) {

        if (computerChoiceNum == 0) {
            result_msg.textContent = "Computer also chose Rock, it's a tie!"
        }

        else if (computerChoiceNum == 1) {
            result_msg.textContent = "Computer also chose Paper, it's a tie!"
        }

        else if (computerChoiceNum == 2) {
            result_msg.textContent = "Computer also chose Scissors, it's a tie!"
        }
    }

    human_score.textContent = humanScore
    computer_score.textContent = computerScore

    if (computerScore == numberOfRounds || humanScore == numberOfRounds) {
        finalResult(humanScore, computerScore)
    }
}

function finalResult(humanScore, computerScore) {

    container_2.style.display = "none"

    const container_3_1 = document.querySelector(".content-3-human")
    const play_again_btn_1 = document.querySelector(".content-3-human .play-again-btn")

    const container_3_2 = document.querySelector(".content-3-computer")
    const play_again_btn_2 = document.querySelector(".content-3-computer .play-again-btn")

    if (humanScore == numberOfRounds) {
        i = 1
        humanScore = 0
        computerScore = 0
        container_3_1.style.display = "flex"
        play_again_btn_1.addEventListener("click", function () {
            container_3_1.style.display = "none"
            container_1.style.display = "flex"
        })
    }

    else if (computerScore == numberOfRounds) {
        i = 1
        humanScore = 0
        computerScore = 0
        container_3_2.style.display = "flex"
        play_again_btn_2.addEventListener("click", function () {
            container_3_2.style.display = "none"
            container_1.style.display = "flex"
        })
    }
}