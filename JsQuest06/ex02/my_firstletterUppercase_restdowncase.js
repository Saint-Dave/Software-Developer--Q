function capitalize(str) {
    const lowerCaseString = str.toLowerCase(), // convert string to lower case  
          firstLetter = str.charAt(0).toUpperCase(), // upper case the first character
          strWithoutFirstChar = lowerCaseString.slice(1); // remove first character from lower case string 
  
    return firstLetter + strWithoutFirstChar; 
  
  }
  
  console.log(capitalize("javaScript"));
  console.log(capitalize("educative.io"));