var questionText = document.getElementById("Question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
let list=[0,1,2,3]
let j =Math.floor(Math.random() * (4));

let questions = [
    ["Em que continente fica Guiné Equatorial?", "América", "Asia", "Oceania", "Africa", "Africa"],
    ["text1", "question1", "question2", "question3", "question4", "correctQuestion"],
    ["text2", "question1", "question2", "question3", "question4", "correctQuestion"],
    ["text3", "question1", "question2", "question3", "question4", "correctQuestion"],
];

function showCurrentQuestion() {
    questionText.innerHTML=questions[j][0];
    answer1.innerHTML = questions[j][1];
    answer2.innerHTML = questions[j][2];
    answer3.innerHTML = questions[j][3];
    answer4.innerHTML = questions[j][4];
};
function checkAnswer(answer){
    if(answer.innerHTML==questions[j][5]){
        console.log("acertou!")
    }
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
return array;
}
shuffleArray(list)
console.log(list)    
// Call the function to show the current question
showCurrentQuestion();