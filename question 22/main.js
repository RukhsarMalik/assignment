var itemList = ["brushes", "paints", "colors", "markers"];
itemList[0] = itemList[4];
console.log(itemList);
// here there is no index on num 4 therefore it will print undefined
itemList[0] = "brushes";
console.log(itemList);
