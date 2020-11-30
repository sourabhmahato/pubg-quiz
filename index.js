var readlineSync = require("readline-sync");
const chalk = require('chalk');
var score = 0;
console.log (chalk.blue("WELCOME TO THE PUBG QUIZ"));
console.log("--------------------------");
var userName = readlineSync.question("What's your name?\n");
console.log("Let's start the quiz, " + userName);

var highScores = [{
  name: "Sourabh",
  score: 5,
},{
  name: "Gourab",
  score: 4
}];

//function part 
function pubg(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase()==answer.toUpperCase()){
    score = score + 1 ;
    console.log(chalk.green("Keep it up, Right Answer"));
  } else {
    score = score - 1;
    console.log(chalk.red("Oops, wrong answer"));
  }
   console.log("your score is: ",score);
    console.log("--------------");
}
var setOfQuestions = [{
  question: `1. Engine used to develop pubg mobile? 
  a. Unity
  b. Unreal
  c. GameMaker
  d. GDevelop\n`,
  answer: "b",
},{
  question: `2. Most Powerful sniper?
  a. AWM
  b. Kar98K
  c. M24\n`,
  answer: "a",
},{
  question: `3. Most Powerful Designated marksman rifle (DMR)?
  a. SLR
  b. Win94
  c. Mini14
  d. SKS\n`,
  answer: "a",

},{ 
 question: `4. Highest damage assault rifle?
  a. M4
  b. Berryl
  c. AKM
  d. Scarl\n`,
  answer: "c",

},{
  question: `5. Which weapon has capacity of 100 ammo?
  a. M4
  b. M249
  c. UZI
  d. Vector\n`,
  answer: "b",

}];

for (var i = 0; i<setOfQuestions.length; i++){
  pubg(setOfQuestions[i].question, setOfQuestions[i].answer)
}
console.log("WOW, you scored: ", score);
console.log("--------------");
console.log(chalk.yellow("CheckOut the Highscores:"));
for (var j=0; j<highScores.length; j++){
console.log(highScores[j].name, highScores[j].score);
}