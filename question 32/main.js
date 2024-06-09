"use strict";
let current_users = ["rukhsarmalik", "atiquaawan", "nimrakhan", "sarali", "amekulsoom"];
let new_users = ["anumsaleem", "rukhsarmalik", "atiquaawan", "mahakhan", "mahimalik"];
for (let user of new_users) {
    if (current_users.includes(user)) {
        console.log("You need to enter a new Username");
    }
    else {
        console.log("Username is available");
    }
}
