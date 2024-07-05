function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making of sandwitches includes following items:");
    for (var i = 0; i < items.length; i++) {
        console.log("-".concat(items[i]));
    }
    console.log("\nNow Enjoy your sandwich 🥪..!\n");
}
sandwich("Cheese", "Chicken", "Tomatto sauce");
sandwich("Extra cheese", "Colesla", "Vegetables");
sandwich("Extra hot sauce", "Cheese", "Chicken");
