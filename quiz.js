// Create a tree function that should build a pine tree out of a character in the browser console. It accepts a single object as an argument. The object should have two key/value pairs.
// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console.
// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.


// 'Grow your tree' button will be used later to begin fill() function
var button = document.getElementById("grow");
//function that creates an object to be used later in tree(obj) function below
function fill(){
  var obj = { 
    character: document.getElementById('charac').value,
    numLevels: document.getElementById('levels').value 
    };
    // If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.
    if (obj.character == "" || obj.numLevels == ""){
      alert("You must enter a character AND the number of levels for your tree");
    }else{
      tree(obj);}
}
// Create a tree function that should build a pine tree out of a character in the browser console. It accepts a single object as an argument. The object should have two key/value pairs.
function tree(obj) {
  // spaces in front of characters
  var spaces = parseInt(obj.numLevels);
  // begin by displaying one character, obj.character
  var charLine=obj.character;
 
  for (var i = 1; i <= obj.numLevels;  i++) {   
    spaces -= 1; 
    if(i>1){
      // add 2 characters to the line of existing characters, charLine
      charLine += obj.character+obj.character;
    }
    // display all odd width of trees on console log (numLevels of 1, 3, 5, etc)  
    console.log(" ".repeat(spaces)+charLine);
  }   
}
//As soon as 'Grow your tree button' is clicked, the fill function will begin
button.addEventListener("click", fill);
