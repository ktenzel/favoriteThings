$(document).ready(function(){
  $("form#questions").submit(function() {
    var name = $("input#name").val();
    var car = $("input#car").val();
    var street = $("input#street").val();
    var color = $("input#color").val();
    var month = $("input#month").val();

    var answerArray = [name, car, month, street, color];
    // alert(answerArray);
    var secondArray = answerArray.slice();
    var ulone = secondArray[1];
    var ultwo = secondArray[0];
    var ulthree = secondArray[2];

    $("#answer1").text(ulone)
    $("#answer2").text(ultwo)
    $("#answer3").text(ulthree)

    event.preventDefault();
  });
});
