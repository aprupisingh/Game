let playerScore = 0;
let computerScore = 0;
let draw = 0;


function playGame(playerChoice){


let choices = [
"Rock",
"Paper",
"Scissors"
];


let computerChoice =
choices[Math.floor(Math.random()*3)];



let result="";


if(playerChoice == computerChoice){

result="Draw 🤝";
draw++;

}

else if(

(playerChoice=="Rock" && computerChoice=="Scissors") ||

(playerChoice=="Paper" && computerChoice=="Rock") ||

(playerChoice=="Scissors" && computerChoice=="Paper")

){

result="You Win 🎉";
playerScore++;

}

else{

result="Computer Wins 🤖";
computerScore++;

}



document.getElementById("result").innerHTML =
`
You: ${playerChoice}
<br>
Computer: ${computerChoice}
<br>
${result}
`;



document.getElementById("playerScore").innerHTML =
playerScore;


document.getElementById("computerScore").innerHTML =
computerScore;


document.getElementById("draw").innerHTML =
draw;



let history =
document.createElement("li");


history.innerHTML =
`
${playerChoice} vs ${computerChoice}
=
${result}
`;



document.getElementById("history")
.appendChild(history);


}
