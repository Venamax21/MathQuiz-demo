"use strict";
let timeID;
/*    
      Project to present an online quiz with a countdown clock
      Author: Vanlal Vena
      Date:  04/16/2024

      Filename: mathquiz.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 30;
const correctAnswers = ["10", "4", "-6", "5", "-7", "9"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

const questionList = document.querySelectorAll("div#quiz input");

// Declare the ID for timed commands
// and the node list for questions

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

startQuiz.onclick = function() {
   overlay.className = "showquiz";
   timeID = setInterval(countdown, 1000);
};
//countdown function using if, else statement
function countdown() {
   if (timeLeft === 0) {
       
       clearInterval(timeID);
       let totalCorrect = checkAnswers();

       if (totalCorrect === correctAnswers.length) {
           alert("Congrats! You got 100% on the quiz.");
       } else {
           alert("You answered " + totalCorrect + " out of " + correctAnswers.length + " questions correctly.");
           timeLeft = quizTime;
           document.getElementById("quizClock").value = timeLeft;
           overlay.className = "hidequiz";
       }
   } else {
       timeLeft--;
       quizClock.value = timeLeft;
   }
}