
let usersList = ["Rukhsar", "Nimra", "Hina", "Admin", "Sara"]

for(let user of usersList) {
    if (user == "Admin"){
        console.log("Hello Admin, Would you like to see a status report?")
    }
    else{
        console.log( `Hello ${user}, Thank you for logging in again`   )
    }
}