var myName = "rukhsar malik";
// Assign name in a new variabl
console.log(myName.toUpperCase());
// toUpperCase() will convert all letters in uppercase
console.log(myName.toLowerCase());
var words = myName.split(" ");
var titleCases = "";
for (var i = 0; i < words.length; i++) {
    titleCases += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titleCases);
var naame = "Eric";
console.log("hello ".concat(naame, ", would you like to learn some python today?"));
// it will print the statement
