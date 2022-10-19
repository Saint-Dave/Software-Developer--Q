function my_downcase(str, str2) {
    const lowerCaseString = str.toLowerCase();
    const UpperCaseString = str2.toUpperCase();
    return lowerCaseString + UpperCaseString; 
  }
  
  console.log(my_downcase("javaScript", " daNce"));
  console.log(my_downcase("eduCativE.io", ''));