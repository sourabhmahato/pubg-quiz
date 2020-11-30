var readlineSync = require ("readline-sync");
var score =0;
var userName = readlineSync.question("What's your name? ");
console.log("WELCOME TO DO YOU KNOW SOURABH, " +userName);

//data of high score
var highScores =[{
  name: "Tanay",
  score: 3,
},
{
  name: "Akansha",
  score: 2,
},
];

//function of the app
function play (question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log("sahi jawab...");
    score = score +1;
  } else {
    console.log("galat jawab...");
  }
  console.log("your score is: ",score);
    console.log("--------------");
}
//array of objects creation
var questions = [{
  question: "where do sourabh live? \n" ,
  answer: "Puruliya",
},{
  question: "his favorite superhero? \n",
  answer: "Dhruv"
},{question: "where do he work? \n",
    answer: "Microsoft"
}];

// for loop
for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("congrats, you scored: ",score);
 console.log("--------------");
console.log("CheckOut the Highscores:");
for (var j=0; j<highScores.length; j++){
console.log(highScores[j].name, highScores[j].score);
}
