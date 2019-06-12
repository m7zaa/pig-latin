
var vowels = ["a", "e", "i", "o", "u"];
var returnArray = [];

$(document).ready(function(){
  $(".btn").click(function(){
    var userInput= $("#userInput").val();
    console.log(userInput)
    //loops through vowels array starting a 0
      for(var i = 0; i < vowels.length; i++) {
    //looks at first character from input and compares it to current index in vowels array
      if (userInput.charAt(0) === vowels[i]) {
        console.log(userInput + "way");
      }
    };

    // var beginVowel = function(userInput) {
    //   console.log("test");
    // };


  });

});
