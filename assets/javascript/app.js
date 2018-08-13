$(document).ready(function () {

    $("#startButton").on("click", function() {
        start();
    });


    var questions = [{
        question: "What franchise leads the league in championships won?",
        choices: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"],
        answer: "Chicago Bulls"
    }, {
        question: "Who leads the NBA in total points scored?",
        choices: ["Michael Jordan", "Kareem Abdul-Jabbar", "Kobe Bryant", "Karl Malone"],
        answer: "Kareem Abdul-Jabbar"
    }, {
        question: "Who is the only player in NBA history to average a triple double in the Finals?",
        choices: ["Wilt Chamberlain", "Russell Westbrook", "LeBron James", "Michael Jordan"],
        answer: "LeBron James"
    }, {
        question: "Which player has the most championship rings?",
        choices: ["Bill Russell", "Robert Horry", "Wilt Chamberlain", "Michael Jordan"],
        answer: "Bill Russell"
    }, {
        question: "Whose nickname is The Mailman?",
        choices: ["John Stockton", "Steve Nash", "Tim Duncan", "Karl Malone"],
        answer: "Karl Malone"
    }];

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = questions.length - (this.incorrectAnswers + this.correctAnswers);
    var counter = 30; 

    var countdown = function() {
        counter--;
        $("#counter").html(counter);
        if (counter <= 0) {
            alert("Time is up!");
            game.done();
        }
    }
    var start = function() {
        timer = setInterval(countdown, 1000);
        $("#wrapper").prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        $("#startButton").remove();
        for (var i=0; i<questions.length; i++) {
            $("#wrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j=0; j<questions[i].choices.length; j++) {
                $("#wrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j])
            }
        }
    }
    var done = function() {
        $.each($('input[name="question-0"]:checked'), function() {
            if ($(this).val() == questions[0].answer) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function() {
            if ($(this).val() == questions[1].answer) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function() {
            if ($(this).val() == questions[2].answer) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function() {
            if ($(this).val() == questions[3].answer) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        });
        $.each($('input[name="question-4"]:checked'), function() {
            if ($(this).val() == questions[4].answer) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        });

    this.result();
    }
    
    var result = function() {
        clearInterval(timer);
        $("#wrapper h2").remove();

        $("#wrapper").html("<h2>The quiz is done!</h2>");
        $("#wrapper").append("<h3>Correct answers: " + this.correctAnswers + "</h3>");
        $("#wrapper").append("<h3>Incorrect answers: " + this.incorrectAnswers + "</h3>");
        $("#wrapper").append("<h3>Unanswered questions: " + this.unanswered + "</h3>");
    }


});