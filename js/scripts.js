
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

$(document).ready(function(){
  $("#formOne").submit(function(event){
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
    var inputArray = userInput.split("");

    if (inputArray[0] === "q" && inputArray[1] === "u") {
      var removed = inputArray.splice(0, 2);
      inputArray = inputArray.concat(removed);
      var output = inputArray.join("");
      return console.log(output + "ay");
    } else if (inputArray[1] === "q" && inputArray[2] === "u") {
      var removed = inputArray.splice(0, 3);
      console.log(removed);
     inputArray = inputArray.concat(removed);
     var output = inputArray.join("");
     return console.log(output + "ay");
    };

      for(var secondIndex = 0; secondIndex < inputArray.length; secondIndex++) {
        for(var thirdIndex = 0; thirdIndex < vowels.length; thirdIndex++) {
          if (inputArray[secondIndex] === vowels[thirdIndex]) {
            var removed = inputArray.splice(0, secondIndex);
            console.log(inputArray);
            inputArray = inputArray.concat(removed);
            var output = inputArray.join("");
            return console.log(output + "ay");
           }
         }
      };

    // var beginVowel = function(userInput) {
    //   console.log("test");
    // };


  });
});
