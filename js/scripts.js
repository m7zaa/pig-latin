
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var returnArray = [];

$(document).ready(function(){
  $(".btn").submit(function(event){
    event.preventDefault();
    var userInput= $("#userInput").val();
    console.log(userInput)
    //loops through vowels array starting a 0
      for(var firstIndex = 0; firstIndex < vowels.length; firstIndex++) {
    //looks at first character from input and compares it to current index in vowels array
      if (userInput.charAt(0) === vowels[firstIndex]) {
        console.log(userInput + "way");
      }
    };
      var inputArray = userInput.split("")


      for(var secondIndex = 0; secondIndex < inputArray.length; secondIndex++) {
        for(var thirdIndex = 0; thirdIndex < vowels.length; thirdIndex++) {
          if (inputArray[secondIndex] === vowels[thirdIndex]) {
            var removed = inputArray.splice(0, secondIndex);
            console.log(removed)
            return
           }
         }
      };

    // var beginVowel = function(userInput) {
    //   console.log("test");
    // };


  });
});
