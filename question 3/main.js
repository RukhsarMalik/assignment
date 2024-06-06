var person_name = "rukhsar malik";
console.log(person_name.toUpperCase());
console.log(person_name.toLowerCase());
var word = person_name.split(" ");
var titleCase = "";
for (var i = 0; i < word.length; i++) {
    titleCase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
console.log(titleCase);
