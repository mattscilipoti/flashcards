$(document).ready(function() {

  $(".tool").hover(
    function() {
      $(".tool").css({"border": "2px solid lightblue"});
    },
    function() {
      $(".tool").css({"border": "2px solid #000"});
    }
  )
  $(".tool").on("click", function(answer1) {
    var answer1 = prompt("what's my favorite band?");
      if (answer1 == "tool") {
      alert("wtf? i've never told anyone that my favorite band is tool. brb getting a restraining order.");
      $(".box1").css("display", "none");
    } else {
      alert("you're joking, right? can you even call that music? " + answer1 + " makes some of the worst 'music' i've ever heard in my life. TRY AGAIN.")
      $(".music").css("display", "block");
      $(".t1").css("display", "none");
    }
  })
  // mms: this code looks awfully familiar :)
  // mms: before our next 1:1, could you extract some of this code into a funciton, and reuse it?
  $(".shiloh").hover(
    // mms: in the future, think about add/removing classes to achieve the design you want.
    // mms:  e.g. You could use an 'active' class.
    // mms: Combine this with a css selector that all cards use
    // mms: and all this code goes into your css file. It handles the switching.
    // mms: .card { "border": "2px solid #000" }
    // mms: .card::hover { "border": "2px solid lightblue" }
    function() {
      $(".shiloh").css({"border": "2px solid lightblue"});
    },
    function() {
      $(".shiloh").css({"border": "2px solid #000"});
    }
  )
  // mms: What happens when you want to change the functionality of this app?
  // mms: Yikes, right?
  // mms: One way to remove duplication, is to move the question information into a data structure
  // mms:   data = [ {question: "what's my fav...", answer: "tool", correct_message: "wtf?...", fail_message: 'you're joking...'} ,
  // mms:            { question: "favorite movie?", answer: "shiloh", corrrect_message: "correct, ok...", fail_message: "not even...",
  // mms:            // and so on...
  // mms:   ]
  // mms: How would that change your code?

  $(".shiloh").on("click", function(answer2) {
    var answer2 = prompt("what is my favorite movie?");
      if (answer2 == "grandma's boy") {
      alert("correct... ok, seriously, this is getting creepy.")
      $(".box2").css("display", "none");
    } else {
      alert("not even close. " + answer2 + " is the worst movie ever made. TRY AGAIN.");
      $(".movies").css("display", "block");
      $(".t2").css("display", "none");
    }
  })

  $(".yum").hover(
    function() {
      $(".yum").css({"border": "2px solid lightblue"});
    },
    function() {
      $(".yum").css({"border": "2px solid #000"});
    }
  )
  $(".yum").on("click", function(answer3) {
    var answer3 = prompt("what's my favorite food?");
      if (answer3 == "tacos") {
      alert("wow! how did you know my favorite food is tacos? stalker!")
      $(".box3").css("display", "none");
    } else {
      alert("ew, no. i hate " + answer3 + ". TRY AGAIN.");
      $(".food").css("display", "block");
      $(".t3").css("display", "none");
    }
  })

  $(".green").hover(
    function() {
      $(".green").css({"border": "2px solid lightblue"});
    },
    function() {
      $(".green").css({"border": "2px solid #000"});
    }
  )
  $(".green").on("click", function(answer4) {
    var answer4 = prompt("what's my favorite color?");
      if (answer4 == "seafoam green") {
      alert("hah! i knew you wouldn't guess--wait a second, that IS my favorite color. mom, is that you?")
      $(".box4").css("display", "none");
    } else {
      alert("you couldn't be more wrong. the color " + answer4 + " makes me sick. TRY AGAIN.")
      $(".color").css("display", "block");
      $(".t4").css("display", "none");
    }
  })

  $(".kitten").hover(
    function() {
      $(".kitten").css({"border": "2px solid lightblue"});
    },
    function() {
      $(".kitten").css({"border": "2px solid #000"});
    }
  )
  $(".kitten").on("click", function(){
    var answer5 = prompt("what are my cats' names?");
      if (answer5 == "monkey and dweezil" || answer5 == "dweezil and monkey") {
      alert("wow, you got another one right. *closes blinds, locks door*");
      $(".box5").css("display", "none");
    } else {
      alert("what? " + answer5 + " have to be the dumbest-sounding names i've ever heard. ever. TRY AGAIN.")
      $(".cats").css("display", "block");
      $(".t5").css("display", "none");
    }
  })

  $(".jerkStore").hover(
    function() {
      $(".jerkStore").css({"border": "2px solid red"});
    },
    function() {
      $(".jerkStore").css({"border": "2px solid #000"});
    }
  )
  $(".jerkStore").on("click", function() {
    var answer6 = prompt("what's my least favorite thing?");
      if (answer6 == "jerks") {
      alert("whoa! how did you know i hate jerks? creep!")
      $(".box6").css("display", "none");
      $("footer").css("display", "inline-block");
    } else {
      alert("you know nothing about me! i love " + answer6 + "! TRY AGAIN.")
      $(".dislike").css("display", "block");
      $(".t6").css("display", "none");
    }
  })
  $("footer").on("click", function() {
    location.reload();
  })
})
