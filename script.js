$(document).ready(function() {

  $(".box1").on("click", function(answer1) {
    var answer1 = prompt("what's my favorite band?");
      if (answer1 == "tool") {
      alert("wtf? i've never told anyone that my favorite band is tool. brb getting a restraining order.");
      $(".box1").css("display", "none");
    } else {
      alert("you're joking, right? can you even call that music? " + answer1 + " makes some of the most repulsive-sounding 'music' i've ever heard in my life.")
      $(".music").css("display", "block");
      $(".t1").css("display", "none");
    }
  })
  $(".box2").on("click", function(answer2) {
    var answer2 = prompt("what is my favorite movie?");
      if (answer2 == "grandma's boy") {
      alert("correct... ok, seriously, this is getting creepy.")
      $(".box2").css("display", "none");
    } else {
      alert("not even close. " + answer2 + " is the worst movie ever made. try again.");
      $(".movies").css("display", "block");
      $(".t2").css("display", "none");
    }
  })
  $(".box3").on("click", function(answer3) {
    var answer3 = prompt("what's my favorite food?");
      if (answer3 == "tacos") {
      alert("wow! how did you know my favorite food is tacos? stalker!")
      $(".box3").css("display", "none");
    } else {
      alert("ew, no. i hate " + answer3 + ". try again.");
      $(".food").css("display", "block");
      $(".t3").css("display", "none");
    }
  })
  $(".box4").on("click", function(answer4) {
    var answer4 = prompt("what's my favorite color?");
      if (answer4 == "seafoam green") {
      alert("hah! i knew you wouldn't guess--wait a second, that IS my favorite color. mom, is that you?")
      $(".box4").css("display", "none");
    } else {
      alert("you couldn't be more wrong. the color " + answer4 + " makes me sick. try again!")
      $(".color").css("display", "block");
      $(".t4").css("display", "none");
    }
  })
  $(".box5").on("click", function(){
    var answer5 = prompt("what are my cats' names?");
      if (answer5 == "monkey and dweezil" || answer5 == "dweezil and monkey") {
      alert("wow, you got another one right. *closes blinds, locks door*");
      $(".box5").css("display", "none");
    } else {
      alert("what? " + answer5 + " have to be the dumbest-sounding names i've ever heard. ever.")
      $(".cats").css("display", "block");
      $(".t5").css("display", "none");
    }
  })
  $(".box6").on("click", function() {
    var answer6 = prompt("what's my least favorite thing?");
      if (answer6 == "assholes") {
      alert("whoa! how did you know i hate assholes? creep!")
      $(".box6").css("display", "none");
      $("footer").css("display", "inline-block");
    } else {
      alert("you know nothing about me! i love " + answer6 + "! try again!")
      $(".dislike").css("display", "block");
      $(".t6").css("display", "none");
    }
  })
  $("footer").on("click", function() {
    location.reload();
  })
})
