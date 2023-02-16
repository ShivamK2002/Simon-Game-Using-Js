userClickedPattern = [];
const gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);

  let level = 0;
  $("h1").html("Level " + level);
  level = level + 1;
  $("h1").html("Level " + level);
}
$(".btn").click(function (event) {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  function delay() {
    $(".btn").removeClass("pressed");
  }

  let timoutId = setTimeout(delay, 100);
}

$(document).keypress(function (event) {
  nextSequence();
});
