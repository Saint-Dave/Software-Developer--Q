// Convert negative numbers to positive numbers

// function my_abs(integer){
//     if (integer<0) {
//         Integer = integer * -1;
//     }
//     return Integer + 12
// }
function my_abs(param_1){
    if (param_1<0) {
        return param_1 * -1; 
    }
    if (param_1>=0) {
        return param_1;
    }
}
console.log(my_abs(-30));
console.log(my_abs(30));
console.log(my_abs(-9));
console.log(my_abs(99));