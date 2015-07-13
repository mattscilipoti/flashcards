$(document).ready(function() {
  $(".box1").on("click", function() {
    prompt("who are my favorite recording artists?");
    $(".music").css("display", "block");
  })
  $(".box2").on("click", function() {
    prompt("what are my favorite movies?");
  })
  $(".box3").on("click", function() {
    prompt("what's my favorite food?");
  })
  $(".box4").on("click", function() {
    prompt("what's my favorite color?");
  })
  $(".box5").on("click", function(){
    prompt("am i a dog person or a cat person?");
  })
  $(".box6").on("click", function() {
    prompt("what are my least favorite things?");
  })
})
