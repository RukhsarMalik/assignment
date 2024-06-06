//Seeing the World
var favPlace = ["Malaysia", "Turkey", "Saudia Arabia", "Dubai"];
console.log("Here is my favourite places list: ", favPlace);
var newFav = favPlace.slice();
newFav.sort();
console.log("Modified list: ", newFav);
console.log("Orignial List", favPlace);
newFav.reverse();
console.log("Modified reverse list: ", newFav);
console.log("Original List", favPlace);
console.log("Original Reversed List", favPlace.reverse());
console.log("Original list", favPlace.reverse());
console.log("Original Sorted list", favPlace.sort());
console.log("Orignal sorted reversed list", favPlace.reverse());
