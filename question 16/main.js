var previous_list = ["Atiqua", "Meghna", "Nimra"];
console.log("".concat(previous_list[2], ", can't come to my dinner as she has declined because of her some other work"));
previous_list[2] = "Yasmeen";
console.log("Here is my updated guest list");
console.log(previous_list);
console.log("I have just got a news that I have more space for some new friends so I will invite more friends");
previous_list.unshift("Iqra");
previous_list.splice(2, 0, "Wania");
previous_list.push("Sania");
console.log("Here is my new guest list.");
console.log(previous_list);
for (var i = 0; i < previous_list.length; ++i) {
    var new_Msg = "Hello ".concat(previous_list[i], ", This is a reminder to you that tomorrow is dinner at my home and I will love it if you will join me. ");
    console.log(new_Msg);
}
