const rocks = document.querySelector(".r");
const papers = document.querySelector(".p");
const scissors = document.querySelector(".s");
const h4 = document.querySelector("h4");

const user_screen = document.querySelector(".user");
const comp_screen = document.querySelector(".computer");

let user_move = ""
let cpu_move = ""
let moves = ["rock", "paper", "scissors"];
let result = "";

const hands = ["./assets/rock.png", "./assets/paper.png","./assets/scissors.png"];

const computer = () => {
    let randomNum = Math.floor(Math.random() * 3);
    cpu_move = moves[randomNum];
    
    return cpu_move;

}



const play_game = (user_move, cpu_move) => {
console.log("user : "+user_move);
console.log("cpu : "+cpu_move);

    if(user_move === cpu_move){
        result = "It's a tie..!!";
    }
    else if(user_move === "rock" && cpu_move === "scissors"){
        result = "You Won..!!";
    }
    else if(user_move === "rock" && cpu_move === "paper"){
        result = "You lose..!!";
    }
    
    else if(user_move === "paper" && cpu_move === "rock"){
        result = "You Won..!!";
    }
    else if(user_move === "paper" && cpu_move === "scissors"){
        result = "You Lose..!!";
    }
    
    else if(user_move === "scissors" && cpu_move === "rock"){
        result = "You Lose..!!";
    }
    else if(user_move === "scissors" && cpu_move === "paper"){
        result = "You Won..!!";

    }

    else if(user_move === "rock" && cpu_move === "scissors"){
        result = "You Won..!!";
    }

    user_screen.firstElementChild.src = hands[moves.indexOf(user_move)];
    comp_screen.firstElementChild.src = hands[moves.indexOf(cpu_move)];

    return result;

    

}

// play_game();


rocks.addEventListener('click', () => {
        cpu_move = computer();
        user_move = "rock";
        h4.textContent = play_game(user_move, cpu_move);
})

papers.addEventListener('click', () => {
    cpu_move = computer();
    user_move = "paper"
    h4.textContent = play_game(user_move, cpu_move);
})

scissors.addEventListener('click', () => {
    cpu_move = computer();
    user_move = "scissors"
    h4.textContent = play_game(user_move, cpu_move);
})


h4.textContent = result;
console.log("result : "+result)









