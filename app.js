  let userScore = 0;
  let computerScore = 0;
  const userScore_span = document.getElementById("user-score");
  const computerScore_span = document.getElementById("comp-score");
  const scoreBoard_div = document.querySelector(".score-board");
  const result_p = document.querySelector(".result p");
  const rock_div = document.getElementById("r");
  const paper_div = document.getElementById("p");
  const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function converter(element){
if (element === "r"){
  return "✊";}
else if (element === "p"){
  return "✋";}
else return "✌";

}

  
function win(user, computer){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${converter(user)}${smallUserWord} beats ${converter(computer)}${smallCompWord}. you Win! 🔥`

  userChoice_div.classList.add('green-glow');
  setTimeout( () => userChoice_div.classList.remove('green-glow'), 400);

}

function lose(user, computer){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);

  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${converter(computer)}${smallCompWord} beats ${converter(user)}${smallUserWord} you lose 😬!`

  userChoice_div.classList.add('red-glow');
   setTimeout( () => userChoice_div.classList.remove('red-glow'), 400);
} 


function draw(user, computer){

  const userChoice_div = document.getElementById(user);

  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `It's a Draw : Try again 😎!`
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400);

}


function game(userChoice){
const computerChoice = getComputerChoice();
switch(userChoice + computerChoice){
  case "rs" : 
  case "sp" : 
  case "pr" :
  win(userChoice, computerChoice);
  break;

  case "sr" : 
  case "ps" : 
  case "rp" : 
  lose(userChoice, computerChoice);
  break;

  default :
  draw(userChoice, computerChoice);
  break;

}
}

  function main(){

    rock_div.addEventListener('click', () => game ("r"));
    paper_div.addEventListener('click', () => game ("p"));
    scissors_div.addEventListener('click', () => game ("s"));
  }

main();
