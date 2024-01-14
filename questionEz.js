var questionText = document.getElementById("Question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var result = document.getElementById("result");
let wrong=0

let list=[0,1,2,3]
let currentQuestion=0
let questions = [
    ["Em que continente fica Guiné Equatorial?", "América", "Asia", "Oceania", "Africa", "Africa"],
    ["text1", "question1", "question2", "question3", "question4", "question1"],
    ["text2", "question1", "question2", "question3", "question4", "question2"],
    ["text3", "question1", "question2", "question3", "question4", "question3"],
];


function showCurrentQuestion(j) {
    questionText.innerHTML=questions[j][0];
    answer1.innerHTML = questions[j][1];
    answer2.innerHTML = questions[j][2];
    answer3.innerHTML = questions[j][3];
    answer4.innerHTML = questions[j][4];
};
function checkAnswer(answer){
    if(answer.innerHTML==questions[j][5]){
        console.log("acertou!")
        currentQuestion++
        console.log(list,j)
        run()
    }else{
        list=[0,1,2,3]
        currentQuestion=0
        start()
        console.log("erraste")
        wrong++
    }
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const h = Math.floor(Math.random() * (i + 1));
    [array[i], array[h]] = [array[h], array[i]];
    }
return array;
}
function run()
{
    if (currentQuestion<4){
        list.pop()
        j=list[list.length-1]
        showCurrentQuestion(j)
    }else{
        console.log("hello")
        questionText.style.display="none";
        answer1.style.display="none";
        answer2.style.display="none";
        answer3.style.display="none";
        answer4.style.display="none";
        result.innerHTML=`Acabou!! Erraste ${wrong} vezes!`;
        result.style.display="block";

    }
}
function start(){
    shuffleArray(list)
    j=list[list.length-1]
    showCurrentQuestion(j)
}
start()
console.log(list)