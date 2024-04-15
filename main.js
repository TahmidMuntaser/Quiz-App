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
            { text: "None of theseg", correct: false }
        ]

    },


];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answerbtn");
const nextButton = document.getElementById("nxtbtn");

let ind = 0;
let score = 0;

function startQuiz(){
    ind = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    let currQues = questions[ind];
    let QuesNo = ind+1;
    questionElement.innerHTML = QuesNo + ". " + currQues.question;
    
    currQues.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}



startQuiz();

