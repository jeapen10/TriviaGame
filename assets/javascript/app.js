$(document).ready(function () {

    var index = 0;
    var timer = {
        time: 60,
        reset: function () {
            this.time = 60;
            $(".timer").html(this.time + "seconds remaining");
        },
        start: function () {
            counter = setInterval(timer.count, 1000);
        },
        stop: function () {
            clearInterval(counter);
        },
        count: function () {
            timer.time--;
            console.log(timer.time);

            if (timer.time >= 0) {
                $(".timer").html(timer.time + "seconds remaining");
            }
            else {
                index++;
                answerWrong();
                timer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    };

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;


    var q1 = {
        question: "What franchise leads the league in championships won?",
        choices: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"],
        answer: [2]
    };
    var q2 = {
        question: "Who leads the NBA in total points scored?",
        choices: ["Michael Jordan", "Kareem Abdul-Jabbar", "Kobe Bryant", "Karl Malone"],
        answer: [1]
    };
    var q3 = {
        question: "Who is the only player in NBA history to average a triple double in the Finals?",
        choices: ["Wilt Chamberlain", "Russell Westbrook", "Lebron James", "Michael Jordan"],
        answer: [2]
    };
    var q4 = {
        question: "Which player has the most championship rings?",
        choices: ["Bill Russell", "Robert Horry", "Wilt Chamberlain", "Michael Jordan"],
        answer: [0]
    };
    var q5 = {
        question: "Whose nickname is The Mailman?",
        choices: ["John Stockton", "Steve Nash", "Tim Duncan", "Karl Malone"],
        answer: [3]
    };

    var questionArray = [q1, q2, q3, q4, q5];

    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        timer.reset();
        $(".question").html(questionArray[questionSelection].question);
        $("#buttonA").text(questionArray[questionSelection].choices[0]).show();
        $("#buttonB").text(questionArray[questionSelection].choices[1]).show();
        $("#buttonC").text(questionArray[questionSelection].choices[2]).show();
        $("#buttonD").text(questionArray[questionSelection].choices[3]).show();

    };

    function setup() {
        index = 0;
        $(".question").append('<button id="startButton">Start Game</button>');
        $("#startButton").on("click", function () {
            $(this).hide();
            timer.start();
            loadQuestion(index);
        });
    }

    function getAnswer() {
        $(".answerchoice").on("click", function () {
            console.log("alert", index);
            index++;
            console.log("click", index);
            $(".question").text();
            $("#buttonA").text();
            $("#buttonB").text();
            $("#buttonC").text();
            $("#buttonD").text();
            loadQuestion();
        })
    }

    function answerRight() {
        correctAnswers++;
        alert("Correct!");
        console.log("correct");
    }

    function answerWrong() {
        incorrectAnswers++;
        alert("Incorrect!");
        console.log("incorrect");
    }

    function showScore() {
        $(".question").empty();
        $(".question").append("<h2><p>" + correctAnswers + " correct</p></h2>");
        $(".question").append("<h2><p>" + incorrectAnswers + " incorrect</p></h2>");
        timer.stop();
        $(".timer").empty();

    }

    setup();
    $(".answerchoice").on("click", function () {
        console.log($(this));
    
        if (this.id == "buttonA") {
            var answerChosen = "a";
        } else if (this.id == "buttonB") {
            answerChosen = "b";
        } else if (this.id == "buttonC") {
            answerChosen = "c";
        } else if (this.id == "buttonD") {
            answerChosen = "d";
        }
        if ((answerChosen == 'a') && (questionArray[index].answer == [0])) {
            answerCorrect();
        } else if (answerChosen == 'a') {
            answerWrong();
        }
        if ((answerChosen == 'b') && (questionArray[index].answer == [1])) {
            answerCorrect();
        } else if (answerChosen == 'b') {
            answerWrong();
        }
        if ((answerChosen == 'c') && (questionArray[index].answer == [2])) {
            answerCorrect();
        } else if (answerChosen == 'c') {
            answerWrong();
        }
        if ((answerChosen == 'd') && (questionArray[index].answer == [3])) {
            answerCorrect();
        } else if (answerChosen == 'd') {
            answerWrong();
        }

    });

});