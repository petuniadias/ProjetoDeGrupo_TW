let questionText = document.getElementById("Question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let result = document.getElementById("result");
let wrong = 0;
let bar=document.getElementById("bar")
let progressValue=document.getElementById("progress")
let progress=0
let list = [0, 1, 2, 3];
let currentQuestion = 0;
const urlParams = new URLSearchParams(window.location.search);
const variableValue = urlParams.get('variableName');


let geography = [
    ["Em que continente fica Guiné Equatorial?", "América", "Asia", "Oceania", "Africa", "Africa"],
    ["Qual é o maior deserto do mundo em área?", "Deserto do Saara", "Deserto da Arábia", " Deserto de Gobi", " Deserto do Atacama", "Deserto do Saara"],
    ["Qual é o país mais populoso do mundo?", "Índia", "China", "Estados Unidos", "Brasil", "China"],
    ["Qual é o nome da fronteira natural entre a Europa e a Ásia?", " Rio Amazonas", "Montanhas Rochosas", "Montes Urais", "Cordilheira dos Andes", "Montes Urais"],
];

let geology = [
    ["Qual destas rochas é uma rocha sedimentar?", "Arenito", "Granito", "Mármore", "Ardósia", "Arenito"],
    ["Qual é o mineral mais abundante na crosta terrestre?", "Quartzo", "Feldspato", "Calcita", "Mica", "Quartzo"],
    ["Qual é o nome dado à teoria que explica a movimentação das placas tectônicas?", "Teoria da Gravidade", " Teoria da Evolução", "Teoria da Relatividade", "Teoria da Tectônica de Placas", "Teoria da Tectônica de Placas"],
    ["O que é a erosão glacial?", "Erosão causada pelo vento", "Erosão causada pelo gelo em movimento", "Erosão causada pela água", "Erosão causada por atividade vulcânica", "Erosão causada pelo gelo em movimento"],
];

let chemistry=[ ["Quais são os elementos químicos presentes no aço?", "alumínio e magnésio", "carbono e ferro", "ferro e potássio", "potássio e carbono", "carbono e ferro"],
["Qual é o símbolo do sódio?","Na","A","Ag","Au","Na"]
]

if (variableValue=="Geography"){
    questions=geography
}if(variableValue=="Geology"){
    questions=geology
}

function showCurrentQuestion(j) {
    questionText.innerHTML = questions[j][0];
    answer1.innerHTML = questions[j][1];
    answer2.innerHTML = questions[j][2];
    answer3.innerHTML = questions[j][3];
    answer4.innerHTML = questions[j][4];
}

function hideElements() {
    questionText.style.display = "none";
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const h = Math.floor(Math.random() * (i + 1));
        [array[i], array[h]] = [array[h], array[i]];
    }
    return array;
}

function checkAnswer(answer) {
    if (answer.innerHTML === questions[j][5]) {
        currentQuestion++;
        run();
        progress+=25;
        progressValue.innerHTML=progress+"%"
        bar.style.width=progress + '%';
    } else {
        currentQuestion ++;
        wrong++;
        progress+=25;
        progressValue.innerHTML=progress+"%"
        bar.style.width=progress + '%';
        run();
    }
}

function run() {
    if (currentQuestion < 4) {
        list.pop();
        j = list[list.length - 1];
        showCurrentQuestion(j);
    } else {
        hideElements();
        result.innerHTML = `Acabou!!Erraste ${wrong} vezes!`;
        result.style.display = "block";
    }
}

function start() {
    j = list[list.length - 1];
    showCurrentQuestion(j);
}

// Initialize the quiz when the page loads
start();
console.log(list);
