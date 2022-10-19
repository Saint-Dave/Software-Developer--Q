// For every function, You have to ask;
// 1. What are the inputs? (parameters; 'haystack and needle')
// 2. What are the Outputs? (what are we printing?)
// 3. What is the function doing? (return/call)



function my_string_index(haystack, needle){
    var placed = 0;

    while (placed < haystack.length) {
        if (haystack[placed]== needle){
            return placed;
        }
        placed += 1;
    }
    return -1;
};

console.log(my_string_index("haystack", "a"));
