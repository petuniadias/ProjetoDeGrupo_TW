let questionText = document.getElementById("Question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let result = document.getElementById("result");
let wrong = 0;

let list = [0, 1, 2, 3];
let currentQuestion = 0;

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

let questions = [];



function showCurrentQuestion(j) {
    questionText.innerHTML = questions[j][0];
    answer1.innerHTML = questions[j][1];
    answer2.innerHTML = questions[j][2];
    answer3.innerHTML = questions[j][3];
    answer4.innerHTML = questions[j][4];
}

function checkAnswer(answer) {
    if (answer.innerHTML === questions[j][5]) {
        console.log("acertou!");
        currentQuestion++;
        console.log(list, j);
        run();
    } else {
        list = [0, 1, 2, 3];
        currentQuestion = 0;
        start();
        console.log("erraste");
        wrong++;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const h = Math.floor(Math.random() * (i + 1));
        [array[i], array[h]] = [array[h], array[i]];
    }
    return array;
}

function run() {
    if (currentQuestion < 4) {
        list.pop();
        j = list[list.length - 1];
        showCurrentQuestion(j);
    } else {
        console.log("hello");
        hideElements();
        result.innerHTML = `Acabou!! Erraste ${wrong} vezes!`;
        result.style.display = "block";
    }
}

function start() {
    shuffleArray(list);
    j = list[list.length - 1];
    showCurrentQuestion(j);
}

function hideElements() {
    // Hides the question and answer elements
    questionText.style.display = "none";
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
}

// Initialize the quiz when the page loads
start();
console.log(list);
