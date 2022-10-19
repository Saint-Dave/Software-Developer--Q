function my_upcase(aBc){
    var uppercase = "";
    for (var i=0;i<aBc.length;i++) {
        var code = aBc[i].charCodeAt(0)
        if (code>=97&&code<=122) {
            code -= 32;
        }
        uppercase += String.fromCharCode(code);
    }
    return uppercase;
}
console.log(my_upcase("Dave dANce"));

// function newToUpperCase(text) {
//     var result = ""; //Store the new text
//     for (var i=0;i<text.length;i++) { //Loop through all characters in the string
//       var code = text[i].charCodeAt(0) //Get the ASCII code of the current character
//       if (code>=97&&code<=122) { //If it is a lower-case letter (code is between 97 and 122 inclusive) 
//         code -= 32; //Subtract 32 from the code to make it the code for an uppercase letter
//       }
//       result += String.fromCharCode(code); //Concatenate the character code transformed to a string to the result
//     }
//     return result; //Return the result
//   }
  
//   document.write(newToUpperCase("This is a test!")) //Test the function