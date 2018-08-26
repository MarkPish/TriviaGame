// set up questions and answers in arrays
var questions = [{
    question: "The capital of Italy is ?",
    choices: ["Florence", "Milan", "Rome", "Calabria", "Palermo"],
    correctAnswer: 2
}, {
    question: "The Italian city of Portofino is located on ?",
    choices: ["the Amalfi coast", "the Strait of Messina", "the Adriatic", "Lake Cuomo", "the Italian Riviera"],
    correctAnswer: 4
}, {
    question: "Which country, besides Vatican City, is also land-locked within Italy?",
    choices: ["Sardinia", "Capri", "Montenegro", "San Marino", "Moldova"],
    correctAnswer: 3
}, {
    question: "All of the following are rivers in Italy, except?",
    choices: ["Po", "Rubicon", "Tiber", "Arno", "Rhine"],
    correctAnswer: 4
}, {
    question: "A traditional Caprisi salad mimics the Italian flag in color, having 3 main ingredients; tomatoes, basil and this type of fresh cheese?",
    choices: ["Mozzarella", "Fontina", "Goat", "Cheddar", "Gorganzola"],
    correctAnswer: 0
}, {
    question: "Which Italian city is home to the exotic car maker, Ferrari?",
    choices: ["Naples", "Pirelli", "Maranello", "Turin", "Florence"],
    correctAnswer: 2
}, {
    question: "Gelato, an Italian ice cream, boasts this many locations selling it in Italy?",
    choices: ["6,000", "19,000", "26,000", "32,000", "39,000"],
    correctAnswer: 4 
}, {
    question: "Which of the following grapes is NOT grown in Italy?",
    choices: ["Barbera", "Sangiovese", "Chianti", "Bordeaux", "Merlot"],
    correctAnswer: 3
}, {
    question: "In 79 A.D., Mount Vesuvius, near Naples, erupted, burying the ancient city of Pompeii under thick volcanic ash. What other city was also buried?",
    choices: ["Verona", "Herculaneum", "Aleppo", "Torino", "Rome"],
    correctAnswer: 1
}, {
    question: "As of 2015, how many scooters are registered in Italy?",
    choices: ["950,000", "1.9 million", "3.6 million", "5.1 million", "7.4 million"],
    correctAnswer: 2
}, {
    question: "Which mountain range is located in central Italy?",
    choices: ["Italian Alps", "Himalayas", "Dolomites", "Apennines", "Pyrenees"],
    correctAnswer: 3
}, {
    question: "Which Italian city is home to a new sculpture, depicting gigantic arms rising from the water?",
    choices: ["Rome", "Milan", "Pisa", "Venice", "Palermo"],
    correctAnswer: 3
}
];

// Tracks question number
var questionCounter = 0; 
var selections = [];
var quiz = $('#quiz');

// Display first question
displayNext();
timer();
$('#done').hide();

// Next button
$('#next').on('click', function(){
    choose();
    // if they don't pick an answer
    if (isNaN(selections[questionCounter])) {
        alert('Please make a selection!');
    }
    else {
        questionCounter++;
        displayNext();
    }
});

// sets the timer
function timer() {
    t = setTimeout(timeUp, 1000 * 120);
}

function stopFunction() {
    clearTimeout(t);
}
// show and hide commands for button ids
function timeUp() {
    $('#done').show();
    $('#start').show();
    $('#next').hide();
    $('#quiz').hide();
    $('#time').hide();
    stopFunction();
    stopFunctionII();
    }
// set up time frame and temp file?
    var seconds;
    var temp;

    function countDown() {
        seconds = document.getElementById('countdown').innerHTML;
        seconds = parseInt(seconds, 10);

        if (seconds == 1) {
            temp = document.getElementById('countDown');
            return;
        }

        seconds--;
        temp = document.getElementById('countDown');
        temp.innerHTML = seconds;
        setTimeoutMyTimer = setTimeout(countdown, 1000);
    }

    countDown();



    function stopFunctionII() {
        clearTimeout(setTimeoutMyTimer);
    }

    // Need to reset game when the 'Start Over' button is clicked, reset all counters! hide and show appropriate buttons

    $('#start').on('click', function() {
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
        $('#next').show();
        $('#done').hide();
        $('#time').show();
        timer();
        document.getElementById("countDown").innerHTML = 120;
        countDown();
    });