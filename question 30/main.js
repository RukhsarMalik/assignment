var usersList = ["Rukhsar", "Nimra", "Hina", "Admin", "Sara"];
for (var _i = 0, usersList_1 = usersList; _i < usersList_1.length; _i++) {
    var user = usersList_1[_i];
    if (user == "Admin") {
        console.log("Hello Admin, Would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", Thank you for logging in again"));
    }
}
