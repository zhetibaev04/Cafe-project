
const triviaQuestions = [
    {
      question: "Qazaqtyń ulttyq dástúrli mýzykalyq aspaby?",
      options: ["Syrnaı", "Gıtara", "Dombyra", "Komýz"],
      answer: "Dombyra"
    },
    {
        question: "Atqa minýge arnalǵan dástúrli qazaq oıyny qandaı? ",
        options: ["Býzkashıi", "Polo", "Rodeo", "Chýkker"],
        answer: "Býzkashı"
      },
      {
        question: "Qazaqstannyń ulttyq taǵamy qandaı?",
        options: ["Kýllama", "Sýshı", "Palaý", "Beshbarmaq"],
        answer: "Beshbarmaq"
      },
      {
        question: "Qazaqstannyń qandaı áıgili kórikti jeri 'Аspan ıesi' degen atpen tanymal?",
        options: ["Han Táńiri", "Balqash kóli", "Sharyn kanony", "Baıanaýyl taýlary"],
        answer: "Han Táńiri"
      },
      {
        question: "Kazakstannyn astanasy kaı kala?",
        options: ["Atyrau", "Almaty", "Astana", "Qyzylorda"],
        answer: "Astana"
      },
      {
        question: "Aqyn jáne aǵartýshy Abaı Qunanbaev qaı jyly dúnıege keldi?",
        options: ["1843", "1844", "1845", "1846"],
        answer: "1845"
      },
      {
        question: "Táýelsizdik Qazaqstan Tuńǵysh Prezıdenti kım?",
        options: ["Qasym-Jomart Toqaev", "Nursultan Nazarbaev", "Dinmuhamed Qonaev", "Imanǵalı Tasmaǵambetov"],
        answer: "Nursultan Nazarbaev"
      },
      {
        question: "Qandaı jyr kesheni halyqqa úlken áser etken?",
        options: ["Qozy Kórpesh-Baıan Sulý", "Abaıdyn kara sozderı", "Aqqýlar uıyqtaǵanda", "Dosyma hat"],
        answer: "Qozy Kórpesh-Baıan Sulý"
      },
      {
        question: "Qysta erlerge arnalǵan dástúrli qazaq bas kıimi qalaı atalady?",
        options: ["Taqiya", "Tymaq", "Kalpak", "Turban"],
        answer: "Tymaq"
      },
      {
        question: "Qazaqtyń áıgili búrkitpen aýlaý dástúri qalaı atalady?",
        options: ["Quspen aýlaý", "Saıatshylyq", "Ornithomancy", "Ań aýlaý"],
        answer: "Saıatshylyq"
      },
      {
        question: "Dástúrli qazaq nany qalaı atalady?",
        options: ["Naan", "Chapatı", "Baýyrsaq", "Borodınskıı"],
        answer: "Baýyrsaq"
      },
      {
        question: "Qazaqstannyń qaı qalasy jyl saıynǵy qyzǵaldaq festıvalimen tanymal?",
        options: ["Aktobe", "Nur-Sultan", "Almaty", "Shymkent"],
        answer: "Almaty"
      },
      {
        question: "Belgili qazaq ánshisi men án jazýshysynyń aty kim?",
        options: ["Dımash Qudaıbergen", "Kairat Nurtas", "Abai","Beyoncé"],
        answer: "Dımash Qudaıbergen"
      },
      {
        question: "Bul poloǵa uqsas, biraq eshkiniń denesimen oınalatyn dástúrli qazaq oıyny qandaı?",
        options: ["Вáıge", "Аýdaryspaq", "Jamby atý", "Kókpar"],
        answer: "Kókpar"
      },
      {
        question: "'Shyǵys Matterhorny' dep atalatyn Qazaqstandaǵy áıgili taý shyńy qandaı?",
        options: ["Kók jaılaý", "Kólsaı", "Úlken Almaty shyńy", "Úshqońyr"],
        answer: "Kók jaılaý"
      },
  ];
  
  let currentQuestion = 0; 
  let score = 0; 
  

  const animationProps = {
    duration: 1000,
    delay: 200,
    easing: "ease-in-out"
  };
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
  
  shuffleArray(triviaQuestions);

animateText(questionElement, triviaQuestions[currentQuestion].question);
  

triviaQuestions[currentQuestion].options.forEach((option, index) => {
  const optionButton = document.createElement("button");
  optionButton.textContent = option;
  optionButton.addEventListener("click", checkAnswer);
  optionButton.addEventListener("mouseover", animateButton);
  optionsElement.appendChild(optionButton);


  animateButton(optionButton, index);
});
}


function animateText(element, text) {
element.style.opacity = 0;

setTimeout(() => {
  element.textContent = text;
  element.style.opacity = 1;
}, animationProps.delay);
}


function animateButton(element, index) {
element.style.opacity = 0;
element.style.transform = "scale(0)";

setTimeout(() => {
  element.style.opacity = 1;
  element.style.transform = "scale(1)";
}, animationProps.delay * (index + 1));
}
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
}
}

function checkAnswer(event) {
const selectedOption = event.target.textContent;
const correctAnswer = triviaQuestions[currentQuestion].answer;

if (selectedOption === correctAnswer) {
  score++;
}

currentQuestion++;


if (currentQuestion < triviaQuestions.length) {
  displayQuestion();
} else {

  endGame();
}
}
function generateRandomWord(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let randomWord = "";

  for (let i = 0; i < length; i++) {
    randomWord += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return randomWord;
}


function endGame() {
const gameElement = document.getElementById("game");
const scoreElement = document.createElement("p");
const returnButton = document.createElement('button');
let discount = 0;
const randomWord = generateRandomWord(5);

returnButton.textContent = 'Brondau';
returnButton.addEventListener('click', () => {
  window.location.href = 'booking.html';
});




if (score === 15) {
  discount = 10;
} else if (score >= 0 && score < 13) {
  discount = 5;
} else if (score >= 13 && score < 15) {
  discount = 7.5;
}
scoreElement.textContent = `Sizdiń sońǵy upaıyńyz ${triviaQuestions.length} ten  ${score}. Quttyqtaımyz! Siz kafedegi barlyq tapsyrystarǵa ${discount}% jeńildik aldyńyz. Sizdiń jarnamalyq kodyńyz: ${randomWord}`;

gameElement.innerHTML = "<center><h2>Oıyn aıaqtaldy!</h2></center>";
gameElement.appendChild(scoreElement);
gameElement.appendChild(returnButton);
}


displayQuestion();

