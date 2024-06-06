var previous_list = ["Atiqua", "Meghna", "Nimra"];
for (var i = 0; i < previous_list.length; ++i) {
    var invitition2 = "Hello ".concat(previous_list[i], ", I have arranged a dinner for all of my friends at my home and I am inviting you too , please come at my home tomorrow for dinner.");
    console.log(invitition2);
}
console.log("".concat(previous_list[2], ", can't come to my dinner as she has declined because of her some other work"));
previous_list[2] = "Yasmeen";
console.log("Here is my updated guest list");
console.log(previous_list);
for (var i = 0; i < previous_list.length; ++i) {
    var newMsg = "Hello ".concat(previous_list[i], ", This is a reminder to you that tomorrow is dinner at my home and I will love it if you will join me. ");
    console.log(newMsg);
}
