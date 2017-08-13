
/*
var ButtonModule = {
    alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    createButtons: function() {
  	    var i = 0;
  	    for (i = 0; i < alphabet.length; i++) {
  	        var button = document.createElement("BUTTON");
  	        var text = document.createTextNode(alphabet[i]);
  	        button.appendChild(text);
  	        document.getElementById("character-pool").appendChild(button);
  	    } // close for(i) 	
    }, // close createButtons()
} // close ButtonModule
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
    for(i = 0; i < wordCurrent.length; i++) {
        var newSpan = document.createElement("span");
        newSpan.setAttribute("ID", wordCurrent.i);        
        newSpan.setAttribute("class", "glyphicon glyphicon-question-sign");        
        var targetDiv = document.getElementById("wordBlank");
        targetDiv.appendChild(newSpan);
    }

  },

}; // close WordModule

window.onload = wordModule.wordLoader();






		