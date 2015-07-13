$(document).ready(function() {
  $(".box1").on("click", function() {
    prompt("who are my favorite recording artists?");
    $(".box1").css("display", "none");
  })
  $(".box2").on("click", function() {
    prompt("what are my favorite movies?");
    $(".box2").css("display", "none");
  })
  $(".box3").on("click", function() {
    prompt("what's my favorite food?");
    $(".box3").css("display", "none");
  })
  $(".box4").on("click", function() {
    prompt("what's my favorite color?");
    $(".box4").css("display", "none");
  })
  $(".box5").on("click", function(){
    prompt("am i a dog person or a cat person?");
    $(".box5").css("display", "none");
  })
  $(".box6").on("click", function() {
    prompt("what are my least favorite things?");
    $(".box6").css("display", "none");
  })
})
