// function my_string_formatting(firstname, lastname, age) {
//    firstname = "John";
//    lastname = "Doe";
//    age = "37.";
//  };

//  function my_string_formatting(firstname) {
//     return "John";
//   };

// console.log("Hello, my name is" + my_string_formatting(firstname) + my_string_formatting(lastname)+", I'm" +my_string_formatting(age)+ ".");              

function my_string_formatting(firstname, lastname,age) {
    var firstname = 'John';
    var lastname = 'Doe';
    var age = 37;

    var string =
    "Hello, my name is " + String(firstname) + " " +
        String(lastname)+", I'm " + String(age) + ".";

    console.log(string);
}
my_string_formatting();