
let users_list =[]
if (users_list.length === 0){
    console.log("We need to find Some users...!")
}
else {for(let user of users_list) {
   
    if (user == "Admin"){
        console.log("Hello Admin, Would you like to see a status report?")
    }
    else{
        console.log( `Hello ${user}, Thank you for logging in again`   )
    }
}}