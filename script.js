const quizData = [
  {
    question:
      'A flashing red traffic light signifies that a driver should do what?',
    A: 'stop',
    B: 'speed up',
    C: 'proceed with caution',
    D: 'honk the horn',
    answer: 'A',
  },
  {
    question: 'A knish is traditionally stuffed with what filling?',
    A: 'potato',
    B: 'creamed corn',
    C: 'lemon custard',
    D: 'raspberry jelly',
    answer: 'A',
  },
  {
    question: 'A pita is a type of what?',
    A: 'fresh fruit',
    B: 'flat bread',
    C: 'French tart',
    D: 'friend bean dip',
    answer: 'B',
  },
  {
    question:
      "A portrait that comically exaggerates a person's physical traits is called a what?",
    A: 'landscape',
    B: 'caricature',
    C: 'still life',
    D: 'Impressionism',
    answer: 'B',
  },
  {
    question: 'A second-year college student is usually called a what?',
    A: 'sophomore',
    B: 'senior',
    C: 'freshman ',
    D: 'junior ',
    answer: 'A',
  },
  {
    question:
      'A student who earns a J.D. can begin his or her career as a what?',
    A: 'lawyer',
    B: 'bricklayer',
    C: 'doctor',
    D: 'accountant',
    answer: 'A',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const btn = document.getElementById('submit');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let quizNo = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const questionData = quizData[quizNo];

  questionEl.innerText = questionData.question;
  a_text.innerText = questionData.A;
  b_text.innerText = questionData.B;
  c_text.innerText = questionData.C;
  d_text.innerText = questionData.D;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

btn.addEventListener('click', () => {
  // check to see the answer
  const ans = getSelected();

  if (ans) {
    if (ans === quizData[quizNo].answer) {
      score++;
    }

    quizNo++;
    if (quizNo < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
              <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
              
              <button onclick="location.reload()">Reload</button>
          `;
    }
  }
});
