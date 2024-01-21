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
["Qual é o símbolo do sódio?","Na","A","Ag","Au","Na"],
["Numa escala de Ph, para uma sunstância ser considerada ácida, ela tem que apresentar o mesmo (Ph) sendo:", "Maior que sete", "Menor que sete", "Igual a sete", "Nenhuma das opções anteriores", "Menor que sete"],
["Qual dos elementos abaixo não é um gás nobre?","Hélio","Xenônio","Argônio","Cádmio","Cádmio"],
];
let biology=[["Qual é a função principal das mitocôndrias nas células?","Armazenar informações genéticas","Produzir energia","Sintetizar proteínas","Armazenar água","Produzir energia"],
["Em que fase do ciclo celular ocorre a replicação do DNA?"," G1","S","G2","M","S"],
["Qual é a função principal dos ribossomos nas células?","Produção de ATP","Síntese de proteínas","Armazenamento de lipídios","Regulação do pH celular","Síntese de proteínas"],
["O que é a mitose?","Processo de divisão celular que resulta em células haploides","Processo de divisão celular que resulta em células diploides","Troca de material genético entre células","Respiração celular nas mitocôndrias","Processo de divisão celular que resulta em células diploides"]
];
let physics=[ ["A massa é...", "a força da gravidade", "uma grandeza vetorial", "determina-se com um dinamómetro", "medida com uma balança", "medida com uma balança"],
["Qual é a unidade de medida da força no sistema internacional de unidades (SI)?","Newton","Watt","Joule","Pascal","Newton"],
["Para medir o valor ou intensidade de uma força utiliza-se que instrumento?", "Balança", "Termómetro", "Dinamómetro", "Barómetro", "Dinamómetro"],
["Qual a idade do Sistema Solar?","15 mil anos","15 mil milhões de anos","5 mil milhões de anos","5 mil anos","5 mil milhões de anos"],
];
if (variableValue=="Geography"){
    questions=geography
}if(variableValue=="Geology"){
    questions=geology
}if(variableValue=="Chemistry"){
    questions=chemistry
}if(variableValue=="Biology"){
    questions=biology
}if(variableValue=="Physics"){
    questions=physics
}

function showCurrentQuestion(j) {
    questionText.innerHTML = questions[j][0];
    answer1.innerHTML = questions[j][1];
    answer2.innerHTML = questions[j][2];
    answer3.innerHTML = questions[j][3];
    answer4.innerHTML = questions[j][4];
}
function hideCurrentQuestion() {
    // Hides the question and answer elements
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
        console.log("acertou!");
        currentQuestion++;
        console.log(list, j);
        run();
        progress+=25;
        progressValue.innerHTML=progress+"%"
        bar.style.width=progress + '%';
    } else {
        list = [0, 1, 2, 3];
        currentQuestion = 0;
        start();
        console.log("erraste");
        wrong++;
        progress=0;
        progressValue.innerHTML=progress+"%"
        bar.style.width=progress + '%';
    }
}

function run() {
    if (currentQuestion < 4) {
        list.pop();
        j = list[list.length - 1];
        showCurrentQuestion(j);
    } else {
        console.log("hello");
        hideCurrentQuestion();
        result.innerHTML = `Acabou!! Erraste ${wrong} vezes!`;
        result.style.display = "block";
        result.style.display = "block";
        document.getElementById("question1").style.display="none";
    }
}

function start() {
    shuffleArray(list);
    j = list[list.length - 1];
    showCurrentQuestion(j);
}

start();
console.log(list);
