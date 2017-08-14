

var buttonModule = {
    alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    createButtons: function() {
  	    var i = 0;
  	    for (i = 0; i < this.alphabet.length; i++) {
  	        var button = document.createElement("BUTTON");
  	        var text = document.createTextNode(buttonModule.alphabet[i]);
  	        button.appendChild(text);
  	        document.getElementById("character-pool").appendChild(button);
  	    };  	
    } 
} 

/*
alphabet: [
      "A", "B", "C", "D", "E", "F", "G",
      "H", "I", "J", "K", "L", "M", "N",
      "O", "P", "Q", "R", "S", "T", "U",
      "V", "W", "X", "Y", "Z"
      ],
*/


var wordModule = {
	wordBank: ["Bluebird", "Mockingbird", "Cardinal", "Robin", "Chickadee", "Grackle", "Dove"],	
	wordSelector: function() {		
		var x = Math.floor(Math.random() * (this.wordBank.length) );
		return this.wordBank[x]; 		
	},
  wordLoader: function() {
    var wordCurrent = this.wordSelector();
    var i = 0;
    var counter = -1;
    console.log(wordCurrent);

    for(i = 0; i < wordCurrent.length; i++) {
        var newSpan = document.createElement("span");
        newSpan.id = "wordBlank-" + (++counter);
        newSpan.setAttribute("class", "glyphicon glyphicon-question-sign");        
        var targetDiv = document.getElementById("wordBlank");
        targetDiv.appendChild(newSpan);
    }
    return wordCurrent;  
  },

}; // close WordModule

var gameModule = {
  gameWord: wordModule.wordLoader(),
  gameKeyHandler: function(event) {
    var userKey = event.key;
    console.log(userKey);

    // check to see if userKey is in gameWord using test()


      // if true:

        // run a RegExp/g to search() for and return positions of match -> save in var X

        // run a RegExp/g to replace() glyphicon ?s with userKey characters

      // OR if true (alternate):

        // create for loop that goes through every character in gameWord and checks if:
        // userKey === gameword[i]

      // if false:

        // subtract 1 from attempts remaining counter

    // change opacity on word-bank buttons

  }
  


}

console.log(gameModule.gameWord);


// add event listener

document.addEventListener("keyup", gameModule.gameKeyHandler);

document.body.onload = buttonModule.createButtons();

		