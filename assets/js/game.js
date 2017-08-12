
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


var WordModule = {
	wordBank: ["Bluebird", "Mockingbird", "Cardinal", "Robin", "Chickadee", "Grackle", "Dove"],	
	wordSelector: function() {		
		var x = Math.floor(Math.random() * (this.wordBank.length) );
		return this.wordBank[x];		
	}

}; // close WordModule

console.log( WordModule.wordSelector() );




		