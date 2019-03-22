let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_p = document.getElementById("reset-label")

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

const smallUserWord = "user".fontsize(3).sub();
const smallComputerWord = "comp".fontsize(3).sub();

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You win!`
    result_p.style.color = "#baf2a4"
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You lost...`
    result_p.style.color = "#f48684"
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. It's a draw.`
    result_p.style.color = "#ffffff"
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice); 
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}



function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })

    reset_p.addEventListener('click', function() {
        userScore = 0;
        compScore = 0;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        result_p.innerHTML = "Click a button!"
        result_p.style.color = "#ffffff"
    })
}

main();