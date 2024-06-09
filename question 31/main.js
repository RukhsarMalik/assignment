var users_list = [];
if (users_list.length === 0) {
    console.log("We need to find Some users...!");
}
else {
    for (var _i = 0, users_list_1 = users_list; _i < users_list_1.length; _i++) {
        var user = users_list_1[_i];
        if (user == "Admin") {
            console.log("Hello Admin, Would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", Thank you for logging in again"));
        }
    }
}
