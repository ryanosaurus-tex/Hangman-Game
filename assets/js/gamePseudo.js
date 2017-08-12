

//[[[Create Alphabet Buttons]]]

//1.) create array to hold alphabet

var alphabet = [
  "A", "B", "C", "D", "E", "F",
  "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X",
  "Y", "Z"
];

//2.) for loop to cycle through [alphabet]
		
for(i = 0; i < alphabet.length; i++) {

  //2.A) create for each letter in [alphabet]:
  // var x = "X" 


  //2.B) create buttons in div id #center with IDs = their letter
  // with one letter each (A B C D etc )inside and specs for style
  // use bootstrap buttons (clear buttons with CAP letter in middle, stacked vert)

  //2.C) associate html IDs with variables in js
  
  //2.D) change opacity of button (letter) when user selects it with key-press
  // reset by button and/or win/lose conditions
  // give button same function as keypress with an onclick

};

//3.) create array for word-bank (INCOMPLETE)

var word-bank = [
  "Northern Mockingbird", "Carolina Wren", "Tufted Titmouse", "Eastern Screech Owl",
  "Northern Cardinal", "Great Blue Heron", "Great Egret", "Mourning Dove"
]

//4.) create a variable by selecting random index value from [word-bank]
// this variable is the puzzle-word

  //4.A) remove the word from the [word-bank]  

  //4.B)  BLANKS: create for loop using .length of puzzle-word to create <spans> with glyphicons as children within a div
  // # of glyphicons/spans created = number of letters in the puzzle-word (puzzle-word.length)

  /* !! IMPORTANT !! -- give the spans IDs in increasing sequential order starting with 0
  so they line up with the index values of puzzle-word 

  --> create a listener for user key press

  --> create variable from user key press called keypress

    --> reduce opacity for button with character corrosponding to keypress-character (letter bank)

    --> for loop: search puzzle-word for keypress-character

      --> if found,

        --> put that character into span in lieu of bootstrap glyphicon

      --> else,

        --> reduce lives by 1

  --> Find a way to know when all characters in a word have been selected

    --> increase lives by 1

    --> play media

    --> generate new word from [word-bank]


  */


