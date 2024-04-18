const questions = [
    {
        question: "What does the abbreviation HTML stand for?",
        answers: [
            { text: "HighTech Markup Language", correct: false },
            { text: "HyperText Machine Language", correct: false },
            { text: "HyperText Markup Language", correct: true },
            { text: "HighTech Machine Language", correct: false }
        ]

    },

    {
        question: "How many sizes of headers are available in HTML by default?",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true }
        ]

    },

    {
        question: "How to create an ordered list in HTML?",
        answers: [
            { text: "<ul>", correct: false },
            { text: "<ol>", correct: true },
            { text: "<li>", correct: false },
            { text: "<href>", correct: false }
        ]
    },

    {
        question: "We enclose HTML tags within?",
        answers: [
            { text: "<>", correct: true },
            { text: "/", correct: false },
            { text: "{}", correct: false },
            { text: "None of these", correct: false }
        ]

    },

    {
        question: "Which of the following is correct about HTML?",
        answers: [
            { text: "HTML uses user-defined Tags", correct: false },
            { text: "HTML uses tags defined within the language", correct: true },
            { text: "Both A and B", correct: false },
            { text: "None of these", correct: false }
        ]

    },


];

// Fisher-Yates (also known as Knuth) shuffle algorithm

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(questions);

// Shuffle the answers for each question
questions.forEach(question => {
    shuffle(question.answers);
});

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answerbtn");
const nextButton = document.getElementById("nxtbtn");

let ind = 0;
let score = 0;

function startQuiz(){
    ind = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    document.getElementById('timer').style.display = '';
    showQuestion();
}

//Timer 

let timerId;
let timeLeft = 30;

function startTimer(){
    timeLeft = 30;
    timerId = setInterval(()=>{
        timeLeft--;

        document.getElementById('timer').innerText = `Time left: ${timeLeft}s`;

        if(timeLeft<=0){
            clearInterval(timerId);
            handleNxtBtn();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}


function showQuestion(){
    stopTimer();
    startTimer();
    resetState();
    let currQues = questions[ind];
    let QuesNo = ind+1;
    questionElement.innerHTML = QuesNo + ". " + currQues.question;
    
    currQues.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}



function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";

    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("wrong");   
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block"; 
}

function showScore(){
    stopTimer(); 
    document.getElementById('timer').style.display = 'none';
    resetState();
    questionElement.innerHTML = "Your Score is: " + score + " out of " + questions.length;
    nextButton.innerHTML = 'Restart';
    nextButton.style.display = "block";
}

function handleNxtBtn() {
    ind++;
    if(ind<questions.length){
        document.getElementById('timer').style.display = '';
        showQuestion();
    }
    else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(ind<questions.length){
        handleNxtBtn();
    }
    else{
        startQuiz();
    }

});

document.getElementById('startButton').addEventListener('click', function() {
 
    
    document.getElementById('instructionPage').style.display = 'none';

    
    document.getElementById('quizPage').style.display = '';

    
    startQuiz();
});

// startQuiz();

