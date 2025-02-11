const quizData = [
    // Questions d'images
    {
        question: "Qui est ce membre ?", 
     img: "https://i.pinimg.com/736x/86/97/6a/86976ae7c187e2ab791266a7c0f82f81.jpg", 
     options: ["Bang Chan", "Lee Know", "Felix", "I.N"], 
     correct: "Lee Know" 
   },
  { question: "Qui est ce membre ?", 
    img: "https://i.pinimg.com/736x/c5/85/95/c58595bb641b969bfb55546bad41c018.jpg", 
    options: ["Han", "Felix", "Seungmin", "Hyunjin"], correct: "Felix" 
  }, 
  { question: "Qui est ce membre ?", 
    img: "https://i.pinimg.com/736x/c9/69/ae/c969aeebe51082a0afe8d9941206ee11.jpg", 
    options: ["I.N", "Chanbin", "Seungmin", "Hyunjin"], correct: "I.N" 
  }, 
  { question: "Qui est ce membre ?", 
    img: "https://i.pinimg.com/736x/a2/b1/d4/a2b1d43835b42fadb2bf75ba70d64c00.jpg", 
    options: ["Seungmin", "Changbin", "Felix", "Hyunjin"], correct: "Hyunjin" 
  }, 
  { question: "Qui est ce membre ?", 
    img: "https://i.pinimg.com/736x/d3/4b/a2/d34ba21e1046fa968e5a1c68d08de9a9.jpg", 
    options: ["Changbin", "Bangchan", "Han", "Lee Know"], correct: "Han" 
  }, 
  { question: "Qui est ce membre ?", 
    img: "https://i.pinimg.com/736x/0d/b5/5d/0db55d740502fe78636d9b8b3461d8da.jpg", 
    options: ["Changbin", "I.N", "Bangchan", "Felix"], correct: "Changbin" 
  }, 
  { question: "Qui est ce membre ?", 
    img: "https://i.pinimg.com/736x/58/a9/28/58a928d72747e061af516177950f771e.jpg", 
    options: ["I.N", "Hyunjin", "Han", "Seungmin"], correct: "Seungmin" 
  }, 
  { question: "Qui est ce membre ?", 
    img: "https://i.pinimg.com/736x/20/9b/d3/209bd37bf61547ae0ae730b01c998ecf.jpg", 
    options: ["Han", "Lee Know", "Bangchan", "Changbin"], correct: "Bangchan"
  },

  
  { question: "Qui est ce duo ?", 
    img: "https://i.pinimg.com/736x/df/6c/5e/df6c5ecd3762b7779e8a15abcfe9858a.jpg", 
    options: ["Bangchan & Hyunjin", "Changbin & I.N", "Han & Felix", "I.N & Lee Know"], correct: "Changbin & I.N"
  },
  { question: "Qui est ce duo ?", 
    img: "https://i.pinimg.com/736x/db/ae/ff/dbaeff4a7054953e91d176a91daac32b.jpg", 
    options: ["Changbin & Felix", "Lee Know & Seungmin", "Han & I.N", "Bangchan & Hyunjin"], correct: "Bangchan & Hyunjin"
  },


  { question: "A qui est associer cette peluche ?", 
    img: "https://i.pinimg.com/736x/b8/ba/56/b8ba56ffe571ba476f32486bc219fc78.jpg", 
    options: ["Han", "Seungmin", "I.N", "Felix"],
    correct: "Felix"
  },
  { question: "A qui est associer cette peluche ?", 
    img: "https://i.pinimg.com/736x/4d/dd/6e/4ddd6e335f4a387c9f3783696f13a7f0.jpg", 
    options: ["Seungmin", "Hyunjin", "Bangchan", "Han"], 
    correct: "Seungmin"
  },
  { question: "A qui est associer cette peluche ?", 
    img: "https://i.pinimg.com/736x/fe/41/15/fe41150bb2cf02e96d47e866f3f92f62.jpg", 
    options: ["I.N", "Felix", "Han", "Changbin"], 
    correct: "Han"
  },
  { question: "A qui est associer cette peluche ?", 
    img: "https://i.pinimg.com/736x/3c/99/9c/3c999c0fe24740365ab6dd42f5512bdf.jpg", 
    options: ["Felix", "Hyunjin", "Bangchan", "Han"], 
    correct: "Hyunjin"
  },
  { question: "A qui est associer cette peluche ?", 
    img: "https://i.pinimg.com/736x/88/44/6d/88446d129ed9cf4c451b7328220c68dc.jpg", 
    options: ["Bangchan", "Changbin", "Lee Know", "Seungmin"], 
    correct: "Bangchan"
  },
  { question: "A qui est associer cette peluche ?", 
    img:  
"https://i.pinimg.com/736x/48/2c/e5/482ce507650ffa324bc62325f9de4798.jpg", 
    options: ["I.N", "Changbin", "Hyunjin", "Lee Know"], 
    correct: "Lee Know"
  },
  { question: "A qui est associer cette peluche ?", 
    img:  
"https://i.pinimg.com/736x/14/d4/6c/14d46c5b7348164e0ec39c8001dd69e3.jpg", 
    options: ["Felix", "Han", "Changbin", "Lee Know"], 
    correct: "Changbin"
  },
  { question: "A qui est associer cette peluche ?", 
    img:  
"https://i.pinimg.com/736x/55/a4/4f/55a44fd4cba923e4e7dc6bca4966c673.jpg", 
    options: ["Lee Know", "I.N", "Hyunjin", "Seungmin"], 
    correct: "I.N"
  },

  
    {
        question: "Quel membre est connu pour sa voix profonde et grave ?",
        options: ["Felix", "Han", "Changbin", "I.N"],
        correct: "Felix"
    },
    {
        question: "Qui a été danseur pour BTS avant de rejoindre Stray Kids ?",
        options: ["Hyunjin", "Lee Know", "Bang Chan", "Seungmin"],
        correct: "Lee Know"
    },
    // Ajoute 8 autres fun facts ici
];

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = []; // Stocke les mauvaises réponses

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-button');

function showQuestion() {
    const questionData = quizData[currentQuestion];
    quizContainer.innerHTML = `<h2>${questionData.question}</h2>`;

    if (questionData.img) {
        quizContainer.innerHTML += `<img src="${questionData.img}" alt="Question Image">`;
    }

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(option);
        quizContainer.appendChild(optionElement);
    });
}

function checkAnswer(selected) {
    const questionData = quizData[currentQuestion];
    if (selected === questionData.correct) {
        score++;
    } else {
        incorrectAnswers.push({
            question: questionData.question,
            selectedAnswer: selected,
            correctAnswer: questionData.correct
        });
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.innerHTML = `<h2>Tu as obtenu ${score} sur ${quizData.length} !</h2>`;
    if (score === quizData.length) {
        quizContainer.innerHTML += "<p>Wow, tu es un(e) STAY légendaire ! 🎉</p>";
    } else if (score > quizData.length / 2) {
        quizContainer.innerHTML += "<p>Pas mal du tout ! Tu connais bien Stray Kids. ✨</p>";
    } else {
        quizContainer.innerHTML += "<p>Il est temps de binge-watch quelques MVs ! 😉</p>";
    }

    // Afficher les mauvaises réponses
    if (incorrectAnswers.length > 0) {
        quizContainer.innerHTML += "<h3>Voici les questions où tu t'es trompé(e) :</h3>";
        incorrectAnswers.forEach(item => {
            quizContainer.innerHTML += `
                <p><strong>Question :</strong> ${item.question}</p>
                <p><strong>Ta réponse :</strong> ${item.selectedAnswer}</p>
                <p><strong>Bonne réponse :</strong> ${item.correctAnswer}</p>
                <hr>
            `;
        });
    }

    nextButton.style.display = "none";
}

nextButton.addEventListener('click', showQuestion);

// Lancer le quiz au début
showQuestion();