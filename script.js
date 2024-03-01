//  Retrieve DOM elements
const cardContainer = document.getElementById('cardContainer')
const mystCard = document.querySelectorAll('.myst-card');


// Start Deck
const AnimeQuestions = {
    hardQuestion: [{
        definition: {
            question: "Qui a écrit Dragon Ball",
            answer: ["Akira Toryama", "Jean-Michel Random"]
        }
    },
    {
        definition: {
            question: "Qui a écrit City Hunter",
            answer: ["Tuskasa Hojo", "Jean-Claude Random"]
        }
    },
    {
        definition: {
            question: "Qui a écrit Gunnm",
            answer: ["Yukito Kishiro", "Jean-Charle Random"]
        }
    }],
}

const HistoryQuestions = {
    hardQuestion: [{
        definition: {
            question: "Qui a découvert l'Amérique",
            answer: ["Christophe Colomb", "Jean-Michel Random"]
        }
    },
    {
        definition: {
            question: "Date de la Révolution Française",
            answer: ["1789", "Jean-Claude Random"]
        }
    },
    {
        definition: {
            question: "Qui a écrit Le Banquet",
            answer: ["Platon", "Jean-Charle Random"]
        }
    }],
}

const Card1 = {
    id: "Anime",
    hardQuestions: AnimeQuestions.hardQuestion
}

const Card2 = {
    id: "Histoire",
    hardQuestions: HistoryQuestions.hardQuestion
}

const deck = [Card1, Card2]

// Is called when click on mystButton
function updateCards() {
    // Delete mystery cards
    mystCard.forEach(card => {
        card.remove()
    })

    // Select a random card
    let randomTheme = Math.floor(Math.random() * deck.length)
    let chosenTheme = deck[randomTheme]

    // Create choice card 
    let titleCard = chosenTheme.id
    let choiceChard = document.createElement('div')
    choiceChard.classList.add('choice-card')
    choiceChard.innerHTML = `
    <h2>${titleCard}</h2>
    <div class="choice-buttons">
        <button class="question-button" id="hardButton">Difficile</button>
        <button class="question-button" id="mediumButton">Moyen</button>
        <button class="question-button" id="easyButton">Facile</button>
    </div>`;
    cardContainer.appendChild(choiceChard);

    const hardButton = document.getElementById('hardButton');
    const mediumButton = document.getElementById('mediumButton');
    const easyButton = document.getElementById('easyButton')

    hardButton.addEventListener('click', () => {
        searchQuestion(hardButton, chosenTheme.hardQuestions, choiceChard)
    })

    mediumButton.addEventListener('click', () => {
        // searchQuestion(mediumButton)
    })

    easyButton.addEventListener('click', () => {
        // searchQuestion(easyButton)
    })
}


function searchQuestion(selectedInput, questToSearch, cardToRemove) {

    if (selectedInput === hardButton) {
        console.log("success1")

        // Choose a random question in the deck
        let randomQuestion = Math.floor(Math.random() * questToSearch.length)
        console.log(questToSearch[randomQuestion]);

        // Remove choiceCard
        cardToRemove.remove()

        // Add Question card
        let questionTitle = questToSearch[randomQuestion].definition.question
        let questionCard = document.createElement('div')
        questionCard.classList.add('question-card')
        questionCard.innerHTML = `
            <h2>Anime</h2>
            <p> ${questionTitle} </p>
            <ul>
                <button id="answerInput1"> ${questToSearch[randomQuestion].definition.answer[0]} </button>
                <button id="answerInput2"> ${questToSearch[randomQuestion].definition.answer[1]} </button>
            </ul>`
        cardContainer.appendChild(questionCard)

        const answerInput1 = document.getElementById('answerInput1')
        const answerInput2 = document.getElementById('answerInput2')

        answerInput1.addEventListener('click', reloadPage)

        // Retrieve answer inputs 

        // Remove question from the Question Card array

        // Reload Page

    }

    // if (selectedQuestion === mediumButton) {
    //     console.log("success2")
    // }

    // if (selectedQuestion === easyButton) {
    //     console.log("success3")
    // }
}


function reloadPage() {
    location.reload()
}