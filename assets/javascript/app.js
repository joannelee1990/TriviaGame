var correct = 0;
var wrong = 0;
var unanswered = 0;
var answerArray = ["answer1","answer2","answer3","answer4","answer5","answer6","answer7","answer8","answer9","answer10"]

function getAnswers() {
  for (var i = 0; i < answerArray.length; i++) {
    choice = $("input[name=" + answerArray[i] + "]:checked").val();
          
      if (choice === "true") {
        correct++;
        } else if (choice === "false") {
        wrong++;
        } else {
        unanswered++;
        }
  }
}

$(document).ready(function () {
  console.log("madeit");
  $("section").hide();

    $("#startButton").click(function() {
      console.log("starting");
      $("section").show();
        var number = 120;

        var intervalId;

        $("#doneButton").on("click", stop);

        $("#startButton").on("click", run);

      function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }

      function decrement() {
      
        number--;
        $("#remaining").html("<h2>" + "Seconds Remaining:" + number + "</h2>");
        if (number === 0) {
          stop();
          alert("Times Up!");
          $("section").hide();
          $("#startButton").hide();
          getAnswers();
          $(".correctAnswers").append("Correct Answers:" + correct);
          $(".wrongAnswers").append("Wrong Answers:" + wrong);
          $(".unansweredAnswers").append("Unanswered Answers:" + unanswered);
          $(".correctAnswers").show();
          $(".wrongAnswers").show();
          $(".unansweredAnswers").show();        
        }
      }

      function stop() {
        clearInterval(intervalId);
      }
      run();      
});    


  $("#doneButton").click(function() {
    console.log("done");
    $("section").hide();
    $("#startButton").hide();
    getAnswers();
    $(".correctAnswers").append("Correct Answers:" + correct);
    $(".wrongAnswers").append("Wrong Answers:" + wrong);
    $(".unansweredAnswers").append("Unanswered Answers:" + unanswered);
    $(".correctAnswers").show();
    $(".wrongAnswers").show();
    $(".unansweredAnswers").show();
  });   

});
