// set up questions and answers in arrays
var questions = [{
    question: "The capital of Italy is ?",
    choices: ["Florence", "Milan", "Rome", "Calabria", "Palermo"],
    correctAnswer: 2
    //slide1a.jpg
}, {
    question: "The Italian city of Portofino is located on ?",
    choices: ["the Amalfi coast", "the Strait of Messina", "the Adriatic", "Lake Cuomo", "the Italian Riviera"],
    correctAnswer: 4
    //slide2a.jpg
}, {
    question: "Which country, besides Vatican City, is also land-locked within Italy?",
    choices: ["Sardinia", "Capri", "Montenegro", "San Marino", "Moldova"],
    correctAnswer: 3
    //slide3a.jpg
}, {
    question: "All of the following are rivers in Italy, except?",
    choices: ["Po", "Rubicon", "Tiber", "Arno", "Rhine"],
    correctAnswer: 4
    //slide4a.jpg
}, {
    question: "A traditional Caprisi salad mimics the Italian flag in color, having 3 main ingredients; tomatoes, basil and this type of fresh cheese?",
    choices: ["Mozzarella", "Fontina", "Goat", "Cheddar", "Gorganzola"],
    correctAnswer: 0
    //slide5a.jpg
}, {
    question: "Which Italian city is home to the exotic car maker, Ferrari?",
    choices: ["Naples", "Pirelli", "Maranello", "Turin", "Florence"],
    correctAnswer: 2
    //slide6a.jpg
}, {
    question: "Gelato, an Italian ice cream, boasts this many gelaterias (stores) selling it in Italy?",
    choices: ["6,000", "19,000", "26,000", "32,000", "39,000"],
    correctAnswer: 4
    //slide7a.jpg 
}, {
    question: "Which of the following wine grape is NOT grown in Italy?",
    choices: ["Barbera", "Sangiovese", "Chianti", "Bordeaux", "Merlot"],
    correctAnswer: 3
    //slide8a.jpg
}, {
    question: "In 79 A.D., Mount Vesuvius, near Naples, erupted, burying the ancient city of Pompeii under thick volcanic ash. What other city was also buried?",
    choices: ["Verona", "Herculaneum", "Aleppo", "Torino", "Rome"],
    correctAnswer: 1
    //slide9a.jpg
}, {
    question: "As of 2015, how many scooters are registered in Italy?",
    choices: ["950,000", "1.9 million", "3.6 million", "5.1 million", "7.4 million"],
    correctAnswer: 2
    //slide10a.jpg
}, {
    question: "Which mountain range is located in central Italy?",
    choices: ["Italian Alps", "Himalayas", "Dolomites", "Apennines", "Pyrenees"],
    correctAnswer: 3
    //slide11a.jpg
}, {
    question: "Which Italian city is home to a new sculpture, depicting gigantic arms and hands rising from the water?",
    choices: ["Rome", "Milan", "Pisa", "Venice", "Palermo"],
    correctAnswer: 3
    //slide12a.jpg
}
];

// Tracks question number
var questionCounter = 0; 
var selections = [];
var quiz = $('#quiz');

// Set up array of slideshow images
var images = ["assets/images/slide1a.jpg", "assets/images/slide2a.jpg", "assets/images/slide3a.jpg", "assets/images/slide4a.jpg", "assets/images/slide5a.jpg", "assets/images/slide6a.jpg", "assets/images/slide7a.jpg", "assets/images/slide8a.jpg", "assets/images/slide9a.jpg", "assets/images/slide10a.jpg", "assets/images/slide11a.jpg", "assets/images/slide12a.jpg"]; 
var showImage;
var count = 0;

$("#start").click(startSlideshow);
$("#stop").click(stopSlideshow);

function displayImage() {
    $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}
function nextImage() {
    count++;
    setTimeout(displayImage, 1000);
    if (count === images.length) {
        count = 0;
    }
}
function startSlideshow() {
    showImage = setInterval(nextImage, 8000);

}
function stopSlideshow() {
    clearInterval(showImage); //check here for problem with slideshow not reseting...eliminated buttons...need to set to questions...next.onclick

}
displayImage();

// Display first question
displayNext();
timer();
$('#done').hide();

// Next button
$('#next').on('click', function(){
    choose();
    // if they don't pick an answer set up alert
    if (isNaN(selections[questionCounter])) {
        alert("Please make a selection!");
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
// set up time frame and temp file
    var seconds;
    var temp;

    function countDown() {
        seconds = document.getElementById('countDown').innerHTML;
        
        if (seconds == 1) {
            temp = document.getElementById('countDown');
            return;
        }

        seconds--;
        temp = document.getElementById('countDown');
        temp.innerHTML = seconds;
        setTimeoutMyTimer = setTimeout(countDown, 1000);
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

    // Need to create question and choosen answer divs

    function makeQuiz(index) {
        var quizDiv = $('<div>', {
            id: 'question'
        });

        var question = $('<p>').append(questions[index].question);
        quizDiv.append(question);


    //radio buttons...can choose only one option...research use     
        var radioButtons = createRadios(index);
        quizDiv.append(radioButtons);
        return quizDiv;
     };

     function createRadios(index) {
         var radioList = $('<ul>');
         var input = '';   // creating space where the choices will go

         for (var i = 0; i < questions[index].choices.length; i++) {
             var item = $('<li>');     // creating each list item
             input = '<input type="radio" name="answer" value=' + i + ' />';
             input += questions[index].choices[i];     //input is equal to input plus
             questions[index].choices[i]
             item.append(input);    //adding the list to the space created
             radioList.append(item);     //adding it to the radio list
         }
         return radioList;
     }

     //Reads the user selection and pushes the value to an array
     function choose() {
         selections[questionCounter] = +$('input[name="answer"]:checked').val();
     }

     //Displays next requested element.... research .attr or .prop
     function displayNext() {
         quiz.fadeOut(function() {
             $('#question').remove();
             if (questionCounter < questions.length) {
                 var nextQuestion = makeQuiz(questionCounter);
                 quiz.append(nextQuestion).show();
                 if (!(isNaN(selections[questionCounter]))) {
                     $('input[value='+selections[questionCounter]+']').prop('checked', true);
                 }
                 else if (questionCounter === 0) {
                     $('#next').show();
                    }
                }
                else {
                    var scoreElem = displayScore();
                    quiz.append(scoreElem).fadeIn();
                    $('#next').hide();
                    $('#start').show();
                }
        });
     };

     //computes score and returns a paragraph element to be displayed
     function displayScore() {
         clearTimeout(t);
         $('#time').hide();
         stopFunctionII();
         stopFunction();
         var score = $('<p>', {id: 'question'});
         var numCorrect = 0;
         for (var i = 0; i < selections.length; i++) {
             if (selections[i] === questions[i].correctAnswer) {
                 numCorrect++;
             }
         }
     // add code here to add a sound for a perfect score!
         score.append('You got ' + numCorrect + ' out of ' + questions.length + ' questions correct!!!');
            return score;
            
        };

     // TO DO : create a slideshow that corresponds with the questions and
     // either show up in the main container or centered below and inline with it.
     // NOTE: slides are commented out and located under each correct answer in arrays above.
     // also....change current timer to reflect 30 seconds per question.